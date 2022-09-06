import type { FullThrustShip } from "src/schemas/ship";
import type { SpecialSystem, System, ISystem } from "./_base";

import { Hull } from "./specials/hull";
import { Stealth } from "./specials/stealth";
import { Streamlining } from "./specials/streamlining";
import { Armour } from "./specials/armour";

// Import newly added systems here
import { Drive } from "./drive";
import { Ftl } from "./ftl";
import { Suicide } from "./suicide";
import { FireControl } from "./fireControl";
import { Adfc } from "./adfc";
import { Screen } from "./screen";
import { MineSweeper } from "./mineSweeper";
import { MineLayer } from "./mineLayer";
import { Bay } from "./bay";
import { Magazine } from "./magazine";
import { DamageControl } from "./damageControl";
import { Marines } from "./marines";
import { Ecm } from "./ecm";
import { StealthField } from "./stealthField";
import { Holofield } from "./holofield";
import { Amt } from "./amt";
import { Missile } from "./missile";
import { Salvo } from "./salvo";
import { SalvoLauncher } from "./salvoLauncher";
import { Mkp } from "./mkp";
import { RocketPod } from "./rocketPod";
import { Ads } from "./ads";
import { Pds } from "./pds";
import { ScatterGun } from "./scatterGun";
import { Grapeshot } from "./grapeshot";
import { SpinalBeam } from "./spinalBeam";
import { SpinalPlasma } from "./spinalPlasma";
import { SpinalSingularity } from "./spinalSingularity";
import { Beam } from "./beam";

export { SpecialSystem, System };
export const specialsList: string[] = ["hull", "stealth", "streamlining", "armour"];

// Give each system a basic name for sorting and selection
export const sortNames = new Map<string, string>([
    ["suicide", "Antimatter Suicide Charge"],
    ["fireControl", "Fire Control"],
    ["adfc", "Area Defense Fire Control"],
    ["screen", "Defensive Screen"],
    ["mineSweeper", "Mine Sweeper"],
    ["mineLayer", "Mine Layer"],
    ["bay", "Hold or Berth"],
    ["magazine", "Salvo Missile Magazine"],
    ["damageControl", "Extra Damage Control"],
    ["marines", "Extra Marines"],
    ["ecm", "ECM Device"],
    ["stealthField", "Stealth Field Generator"],
    ["holofield", "Holofield Generator"],
    ["amt", "Antimatter Missile"],
    ["missile", "Heavy Missile"],
    ["salvo", "Salvo Missile Rack (single-use)"],
    ["salvoLauncher", "Salvo Missile Launcher"],
    ["mkp", "Multiple Kinetic Penetrator"],
    ["rocketPod", "Rocket Pod"],
    ["ads", "Area Defense System"],
    ["pds", "Point Defense System"],
    ["scatterGun", "Scatter Gun"],
    ["grapeshot", "Grapeshot Launcher"],
    ["spinalBeam", "Spinal Mount - Beam"],
    ["spinalPlasma", "Spinal Mount - Plasma"],
    ["spinalSingularity", "Spinal Mount - Point Singularity Projector"],
    ["beam", "Beam"],
]);

// Put the short code in the appropriate list in whatever order. They get sorted for display.
export const systemList: string[] = ["holofield", "stealthField", "ecm", "damageControl", "marines", "magazine", "bay", "mineLayer", "mineSweeper", "screen", "suicide", "fireControl", "adfc"].sort((a, b) => {
    if (sortNames.get(a) > sortNames.get(b)) {
        return 1;
    } else if (sortNames.get(a) < sortNames.get(b)) {
        return -1;
    } else {
        return 0;
    }
});
export const ordnanceList: string[] = ["rocketPod", "salvoLauncher", "missile", "salvo", "amt"].sort((a, b) => {
    if (sortNames.get(a) > sortNames.get(b)) {
        return 1;
    } else if (sortNames.get(a) < sortNames.get(b)) {
        return -1;
    } else {
        return 0;
    }
});
export const weaponList: string[] = ["beam", "spinalSingularity", "spinalPlasma", "spinalBeam", "grapeshot", "scatterGun", "pds", "mkp", "ads"].sort((a, b) => {
    if (sortNames.get(a) > sortNames.get(b)) {
        return 1;
    } else if (sortNames.get(a) < sortNames.get(b)) {
        return -1;
    } else {
        return 0;
    }
});
export const allRegSystems: string[] = [...systemList, ...ordnanceList, ...weaponList];

export const getSpecial = (id: string, ship: FullThrustShip): SpecialSystem => {
    switch (id) {
        case "hull":
            return new Hull(ship);
        case "stealth":
            return new Stealth(ship);
        case "streamlining":
            return new Streamlining(ship);
        case "armour":
            return new Armour(ship);
        default:
            console.error(`Could not find a special system with the name ${id}`);
            break;
    }
}

// Finally, return the appropriate object when requested with the short code.
export const getSystem = (data: ISystem, ship: FullThrustShip): System => {
    switch (data.name) {
        case "drive":
            return new Drive(data, ship);
        case "ftl":
            return new Ftl(data, ship);
        case "suicide":
            return new Suicide(data, ship);
        case "fireControl":
            return new FireControl(data, ship);
        case "adfc":
            return new Adfc(data, ship);
        case "screen":
            return new Screen(data, ship);
        case "mineSweeper":
            return new MineSweeper(data, ship);
        case "mineLayer":
            return new MineLayer(data, ship);
        case "bay":
            return new Bay(data, ship);
        case "magazine":
            return new Magazine(data, ship);
        case "damageControl":
            return new DamageControl(data, ship);
        case "marines":
            return new Marines(data, ship);
        case "ecm":
            return new Ecm(data, ship);
        case "stealthField":
            return new StealthField(data, ship);
        case "holofield":
            return new Holofield(data, ship);
        case "amt":
            return new Amt(data, ship);
        case "missile":
            return new Missile(data, ship);
        case "salvo":
            return new Salvo(data, ship);
        case "salvoLauncher":
            return new SalvoLauncher(data, ship);
        case "mkp":
            return new Mkp(data, ship);
        case "rocketPod":
            return new RocketPod(data, ship);
        case "ads":
            return new Ads(data, ship);
        case "pds":
            return new Pds(data, ship);
        case "scatterGun":
            return new ScatterGun(data, ship);
        case "grapeshot":
            return new Grapeshot(data, ship);
        case "spinalBeam":
            return new SpinalBeam(data, ship);
        case "spinalPlasma":
            return new SpinalPlasma(data, ship);
        case "spinalSingularity":
            return new SpinalSingularity(data, ship);
        case "beam":
            return new Beam(data, ship);
        default:
            console.error(`Could not find a system with the name ${data.name}`);
            break;
    }
}
