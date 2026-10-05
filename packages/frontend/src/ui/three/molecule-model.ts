import {assertWrap} from '@augment-vir/assert';
import {createArray} from '@augment-vir/common';
import {Color, Quaternion, Vector3} from 'three';
import {type ChemicalElement, chemicalElements} from '../../data/chemical-element.js';
import {BondOrder, type Coordinates, type Molecule} from '../../data/molecule.js';
import {BallAndStickPartType, createBallAndStickModel} from './ball-and-stick-model.js';
import {type ImpostorSceneUniforms} from './impostors.js';
import {type MoleculeSelection, MoleculeSelectionType} from './molecule-selection.js';
import {type RenderEffect} from './render-quality.js';

/** Ball-and-stick atoms are drawn much smaller than their van der Waals radius so bonds show. */
const atomRadiusScale = 0.3;
const bondRadius = 0.1;
const multipleBondRadius = 0.06;
const multipleBondSpacing = 0.2;
const bondColor = 0xb3_b3_b3;
/** PubChem has no color or van der Waals radius for the superheavy elements (Fm and beyond). */
const fallbackAtomColor = 0xff_14_93;
const fallbackVanDerWaalsRadius = 2;

function toVector3({x, y, z}: Readonly<Coordinates>) {
    return new Vector3(x, y, z);
}

/** One of a bond's sticks. A double bond has two, side by side. */
type Stick = {
    bondIndex: number;
    /** How far the stick sits to the side of the bond's axis. */
    offset: number;
    radius: number;
};

/**
 * Places a stick along its bond. A multi-stick bond is turned around its own axis so its sticks
 * spread across the screen and never hide behind each other.
 */
function getStickEnds({
    molecule,
    stick,
    atomPositions,
    cameraPosition,
}: Readonly<{
    molecule: Readonly<Molecule>;
    stick: Readonly<Stick>;
    atomPositions: ReadonlyArray<Readonly<Vector3>>;
    /** In the molecule's own space, which turns with the molecule. */
    cameraPosition: Readonly<Vector3>;
}>) {
    const bond = assertWrap.isDefined(molecule.bonds[stick.bondIndex]);
    const [
        start,
        end,
    ] = bond.atomIndexes.map((atomIndex) => {
        return assertWrap.isDefined(
            atomPositions[atomIndex],
            `Bond in '${molecule.name}' references missing atom ${atomIndex}.`,
        );
    }) satisfies ReadonlyArray<Readonly<Vector3>> as [
        Readonly<Vector3>,
        Readonly<Vector3>,
    ];
    const bondDirection = end.clone().sub(start).normalize();
    const spreadDirection = new Vector3().crossVectors(
        bondDirection,
        cameraPosition.clone().sub(start.clone().add(end).multiplyScalar(0.5)),
    );
    /**
     * Single bonds have nothing to spread, and a bond pointing straight at the camera looks the
     * same at any spread.
     */
    const side =
        bond.order === BondOrder.Single || spreadDirection.lengthSq() < 1e-9
            ? new Vector3(1, 0, 0).applyQuaternion(
                  new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), bondDirection),
              )
            : spreadDirection.normalize();
    return {
        start: start.clone().addScaledVector(side, stick.offset),
        end: end.clone().addScaledVector(side, stick.offset),
        side,
    };
}

export function createMoleculeModel({
    molecule,
    sceneUniforms,
}: Readonly<{
    molecule: Readonly<Molecule>;
    sceneUniforms: Readonly<ImpostorSceneUniforms>;
}>) {
    const sticks: Stick[] = molecule.bonds.flatMap((bond, bondIndex) => {
        return createArray(bond.order, (stickIndex) => {
            return {
                bondIndex,
                offset: (stickIndex - (bond.order - 1) / 2) * multipleBondSpacing,
                radius: bond.order === BondOrder.Single ? bondRadius : multipleBondRadius,
            };
        });
    });
    const bondStickIndexes = molecule.bonds.map((bond, bondIndex) => {
        return sticks.flatMap((stick, stickIndex) => {
            return stick.bondIndex === bondIndex ? [stickIndex] : [];
        });
    });
    const atomPositions = molecule.atoms.map((atom) => toVector3(atom.position));
    /**
     * The molecule never changes shape, so only the sticks of multi-stick bonds move, as they turn
     * to face the camera.
     */
    const movingStickIndexes = sticks.flatMap((stick, stickIndex) => {
        return assertWrap.isDefined(molecule.bonds[stick.bondIndex]).order === BondOrder.Single
            ? []
            : [stickIndex];
    });

    const model = createBallAndStickModel({
        balls: molecule.atoms.map((atom, atomIndex) => {
            const info: Readonly<ChemicalElement> = chemicalElements[atom.element];
            return {
                position: assertWrap.isDefined(atomPositions[atomIndex]),
                radius: (info.vanDerWaalsRadius ?? fallbackVanDerWaalsRadius) * atomRadiusScale,
                color: new Color(info.color ?? fallbackAtomColor),
            };
        }),
        sticks: sticks.map((stick) => {
            return {
                ballIndexes: assertWrap.isDefined(molecule.bonds[stick.bondIndex]).atomIndexes,
                radius: stick.radius,
            };
        }),
        stickEnds: sticks.map((stick) => {
            return getStickEnds({
                molecule,
                stick,
                atomPositions,
                cameraPosition: new Vector3(0, 0, 1),
            });
        }),
        stickColor: new Color(bondColor),
        sceneUniforms,
    });

    return {
        source: molecule,
        group: model.group,
        radius: model.radius,
        groundShadow: model.groundShadow,
        /** Atom positions relative to the turntable's center. */
        centeredAtoms: model.getCenteredBalls(),
        /** Must run after the camera moves and before rendering. */
        update({
            localCameraPosition,
            localTowardLight,
        }: Readonly<{
            localCameraPosition: Readonly<Vector3>;
            localTowardLight: Readonly<Vector3>;
        }>) {
            model.setStickEnds(
                movingStickIndexes.map((stickIndex) => {
                    return {
                        stickIndex,
                        ends: getStickEnds({
                            molecule,
                            stick: assertWrap.isDefined(sticks[stickIndex]),
                            atomPositions,
                            cameraPosition: localCameraPosition,
                        }),
                    };
                }),
            );
            model.update({
                localTowardLight,
            });
        },
        /** Lights up the selection, if any, and turns off every other part's glow. */
        setGlow({
            selection,
            glow,
        }: Readonly<{selection: Readonly<MoleculeSelection> | undefined; glow: number}>) {
            model.setGlow({
                ballIndexes:
                    selection?.type === MoleculeSelectionType.Atom ? [selection.atomIndex] : [],
                stickIndexes:
                    selection?.type === MoleculeSelectionType.Bond
                        ? assertWrap.isDefined(bondStickIndexes[selection.bondIndex])
                        : [],
                glow,
            });
        },
        /** Finds the nearest atom or bond along a ray in the molecule's own space. */
        pick(ray: Readonly<{origin: Readonly<Vector3>; direction: Readonly<Vector3>}>) {
            const part = model.pick(ray);
            return part == undefined
                ? undefined
                : part.type === BallAndStickPartType.Ball
                  ? ({
                        type: MoleculeSelectionType.Atom,
                        atomIndex: part.index,
                    } satisfies MoleculeSelection)
                  : ({
                        type: MoleculeSelectionType.Bond,
                        bondIndex: assertWrap.isDefined(sticks[part.index]).bondIndex,
                    } satisfies MoleculeSelection);
        },
        setDisabledEffects(disabledEffects: ReadonlyArray<RenderEffect>) {
            model.setDisabledEffects(disabledEffects);
        },
        isShadowsEnabled() {
            return model.isShadowsEnabled();
        },
        dispose() {
            model.dispose();
        },
    };
}

export type MoleculeModel = ReturnType<typeof createMoleculeModel>;
