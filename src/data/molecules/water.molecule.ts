import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

const waterBondLength = 0.9584;
const waterHalfBondAngle = ((104.45 / 2) * Math.PI) / 180;
const sinHalfAngle = Math.sin(waterHalfBondAngle);
const cosHalfAngle = Math.cos(waterHalfBondAngle);
/**
 * Oxygen moves opposite the hydrogens, scaled down by this ratio, so the molecule's center of mass
 * stays put.
 */
const hydrogenToOxygenMass = 1.008 / 15.999;

export const water: Molecule = {
    name: 'Water',
    description:
        'Two hydrogen atoms bonded to one oxygen atom at a bent 104.45° angle. The bend makes the molecule polar, which gives water its high boiling point and its talent for dissolving things.',
    atoms: [
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: waterBondLength * Math.sin(waterHalfBondAngle),
                y: -waterBondLength * Math.cos(waterHalfBondAngle),
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -waterBondLength * Math.sin(waterHalfBondAngle),
                y: -waterBondLength * Math.cos(waterHalfBondAngle),
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                2,
                0,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                1,
            ],
            order: BondOrder.Single,
        },
    ],
    vibrationModes: [
        {
            name: 'Symmetric stretch',
            waveNumberPerCentimeter: 3657,
            atomDisplacements: [
                {
                    x: sinHalfAngle,
                    y: -cosHalfAngle,
                    z: 0,
                },
                {
                    x: -sinHalfAngle,
                    y: -cosHalfAngle,
                    z: 0,
                },
                {
                    x: 0,
                    y: 2 * cosHalfAngle * hydrogenToOxygenMass,
                    z: 0,
                },
            ],
        },
        {
            name: 'Asymmetric stretch',
            waveNumberPerCentimeter: 3756,
            atomDisplacements: [
                {
                    x: sinHalfAngle,
                    y: -cosHalfAngle,
                    z: 0,
                },
                {
                    x: sinHalfAngle,
                    y: cosHalfAngle,
                    z: 0,
                },
                {
                    x: -2 * sinHalfAngle * hydrogenToOxygenMass,
                    y: 0,
                    z: 0,
                },
            ],
        },
        {
            name: 'Bend',
            waveNumberPerCentimeter: 1595,
            atomDisplacements: [
                {
                    x: cosHalfAngle,
                    y: sinHalfAngle,
                    z: 0,
                },
                {
                    x: -cosHalfAngle,
                    y: sinHalfAngle,
                    z: 0,
                },
                {
                    x: 0,
                    y: -2 * sinHalfAngle * hydrogenToOxygenMass,
                    z: 0,
                },
            ],
        },
    ],
};
