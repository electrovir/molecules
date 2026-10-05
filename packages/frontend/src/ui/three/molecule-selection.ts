export enum MoleculeSelectionType {
    Atom = 'atom',
    Bond = 'bond',
    /** The nucleus of an atom shown on its own. */
    Nucleus = 'nucleus',
    /** An orbital of an atom shown on its own, picked through one of its electrons. */
    Orbital = 'orbital',
}

export type MoleculeSelection =
    | {
          type: MoleculeSelectionType.Atom;
          atomIndex: number;
      }
    | {
          type: MoleculeSelectionType.Bond;
          bondIndex: number;
      }
    | {
          type: MoleculeSelectionType.Nucleus;
      }
    | {
          type: MoleculeSelectionType.Orbital;
          orbitalId: string;
      };
