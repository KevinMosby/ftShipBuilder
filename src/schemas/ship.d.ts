/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Arcs = "F" | "FS" | "FP" | "A" | "AS" | "AP";
export type Numarcs = number;

/**
 * Representation of a valid Full Thrust ship
 */
export interface FullThrustShip {
  points?: number;
  mass?: number;
  hull?: {
    points: number;
    rows: 3 | 4 | 5 | 6;
    stealth: "0" | "1" | "2";
    streamlining: "none" | "partial" | "full";
  };
  /**
   * Rows of armour. First element being the innermost layer. No layer can be larger than the first row of hull boxes.
   */
  armour?: number[];
  /**
   * This property contains all systems that get checked on threshold rolls but that are not used during the 'fire' or 'ordnance' phases of play.
   */
  systems?: (
    | {
        name: "drive";
        advanced?: boolean;
        thrust: number;
        [k: string]: unknown;
      }
    | {
        name: "ftl";
        advanced?: boolean;
        [k: string]: unknown;
      }
    | {
        name: "fireControl" | "adfc";
        advanced?: boolean;
        [k: string]: unknown;
      }
    | {
        name: "hangar";
        /**
         * This decides what SSD icon to use. If not provided, the standard hangar icon is selected.
         */
        icon?:
          | "I"
          | "circle"
          | "triangle"
          | "bold"
          | "DD"
          | "MR"
          | "chevron"
          | "hex"
          | "missle"
          | "ship"
          | "L"
          | "A"
          | "T"
          | "H"
          | "F"
          | "P"
          | "rack";
        /**
         * A unique identifier used to target this hangar in orders and in the `fighters` property.
         */
        id: {
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }
    | {
        name: "launchTube";
        catapult?: boolean;
        [k: string]: unknown;
      }
    | {
        name: "screen";
        advanced?: boolean;
        area?: boolean;
        [k: string]: unknown;
      }
    | {
        name: "suicide" | "mineSweeper" | "damageControl" | "marines" | "stealthField" | "holofield";
        [k: string]: unknown;
      }
    | {
        name: "mineLayer";
        capacity?: number;
        [k: string]: unknown;
      }
    | {
        name: "bay";
        type: "cargo" | "passenger" | "troop";
        capacity: number;
        /**
         * A unique identifier used to target this specific bay in orders.
         */
        id: string;
        [k: string]: unknown;
      }
    | {
        name: "magazine";
        /**
         * A unique identifier used to tie this magazine to one or more launchers.
         */
        id?: {
          [k: string]: unknown;
        };
        modifier?: "er" | "twostage";
        capacity?: number;
        [k: string]: unknown;
      }
    | {
        name: "ecm";
        area?: boolean;
        [k: string]: unknown;
      }
  )[];
  /**
   * This property contains all systems that get deployed during the 'ordnance' phase of play. These systems are also checked on threshold rolls.
   */
  ordnance?: (
    | {
        name: "antiMatterMissile";
        [k: string]: unknown;
      }
    | {
        name: "missile" | "salvo";
        modifier?: "er" | "twostage";
        [k: string]: unknown;
      }
    | {
        name: "salvoLauncher";
        leftArc: Arcs;
        numArcs: 3;
        /**
         * The unique ID of a missile magazine
         */
        magazine?: string;
        [k: string]: unknown;
      }
    | {
        name: "rocketPod";
        leftArc: Arcs;
        numArcs: 3;
        [k: string]: unknown;
      }
  )[];
  /**
   * This property contains all systems that players can trigger during the 'fire' phase of play. These systems are also checked on threshold rolls.
   */
  weapons?: (
    | {
        name: "pds" | "scatterGun" | "grapeshot";
        [k: string]: unknown;
      }
    | {
        name: "spinalBeam" | "spinalPlasma" | "spinalSingularity";
        range: "short" | "medium" | "long";
        [k: string]: unknown;
      }
    | {
        name: "ads";
        leftArc: Arcs;
        numArcs: 3 | 6;
        [k: string]: unknown;
      }
    | {
        name: "beam" | "emp" | "plasmaCannon" | "phaser" | "transporter" | "needle";
        class: 1 | 2 | 3 | 4;
        leftArc: Arcs;
        numArcs: Numarcs;
        [k: string]: unknown;
      }
    | {
        name: "graser";
        heavy?: boolean;
        highIntensity?: boolean;
        class: 1 | 2 | 3 | 4;
        leftArc: Arcs;
        numArcs: Numarcs;
        [k: string]: unknown;
      }
    | {
        name: "gatling" | "particle" | "meson" | "submunition" | "fusion";
        leftArc: Arcs;
        numArcs: Numarcs;
        [k: string]: unknown;
      }
    | {
        name: "torpedoPulse";
        range?: "standard" | "short" | "long";
        leftArc: Arcs;
        numArcs: Numarcs;
        [k: string]: unknown;
      }
    | {
        name: "kgun";
        class: 1 | 2 | 3 | 4 | 5 | 6;
        range?: "standard" | "short" | "long";
        leftArc: Arcs;
        numArcs: Numarcs;
        [k: string]: unknown;
      }
    | {
        name: "gravitic";
        class: 1 | 2 | 3;
        leftArc: Arcs;
        numArcs: Numarcs;
        [k: string]: unknown;
      }
    | {
        name: "plasmaBolt";
        class: 1 | 2 | 3 | 4 | 5 | 6;
        leftArc: Arcs;
        numArcs: Numarcs;
        [k: string]: unknown;
      }
    | {
        name: "mkp";
        arc: Arcs;
        [k: string]: unknown;
      }
  )[];
  /**
   * This property contains all systems that do NOT get checked on threshold rolls.
   */
  extras?: unknown[];
  /**
   * There cannot be more fighters than hangars. The type of fighter doesn't have to match the type of hangar, but it should to avoid confusion. The hangar type simply determines the icon on the SSD. The fighter type here determines what fighters you actually have available in game.
   */
  fighters?: {
    /**
     * The fighters' base type
     */
    type: "standard" | "interceptor" | "attack" | "torpedo" | "graser" | "plasma" | "MKP" | "missile" | "light";
    mods?: ("heavy" | "fast" | "longRange" | "ftl" | "robot")[];
    /**
     * Must match a hangar id. Omitted if the fighters are deployed.
     */
    hangar?: string;
    [k: string]: unknown;
  }[];
  class?: string;
  name?: string;
  /**
   * Markdown-encoded flavour text attached to this particular ship.
   */
  notes?: string;
  [k: string]: unknown;
}
