export enum MoleculeSelectionType {
    Atom = 'atom',
    Bond = 'bond',
}

export type MoleculeSelection =
    | {
          type: MoleculeSelectionType.Atom;
          atomIndex: number;
      }
    | {
          type: MoleculeSelectionType.Bond;
          bondIndex: number;
      };
