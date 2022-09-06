import type { FullThrustShip } from "src/schemas/ship";
import { System } from "./_base";
import type { ISystem } from "./_base";

export class Marines extends System {
    constructor(_data: ISystem, ship: FullThrustShip) {
        super("marines", ship);
    }

    fullName() {
        return "Extra Marines";
    }

    mass() {
        return 0;
    }

    points() {
        return 5;
    }

    glyph() {
        return {
            id: "marines",
            svg: `<symbol id="svg_marines" viewBox="310 110 340 340"><path fill="white" stroke="#000000" stroke-width="12" stroke-miterlimit="10" d="M605,228.3c0-62-50.3-112.3-112.3-112.3h-25.4 c-62,0-112.3,50.3-112.3,112.3v104.4c0,62,50.3,112.3,112.3,112.3h25.4c62,0,112.3-50.3,112.3-112.3V228.3z"/><path d="M562.5,378.3c-3.2-3.2-6.8-2.6-10.2-6.6c-2.9-3.5,5.1-3.8,3.4-7.5c-15.2-33.5-37.7-90-39.5-93.2c-2.6-4.5-0.6-12.9,4.5-13.6 c5.2-0.6,8.4-0.6,9,2.6s6.7,15,6.7,15s-8.2,8.4-6.6,11.9c2.9,6.4,7.6,15.7,10.9,17c5.2,1.9,12.3-1.3,12.3-3.9 c0-2.6-1.9-23.2-1.9-23.2s9.7-36.8,10.3-43.2c0.2-2-5.3-3.8-8.9-10c-3.8-6.4-5-24.8-9.1-30.9c-4.6-6.7-9-4.3-9-4.3s-21.9,2.6-25.8,0 s0.7-4,0-4.5c0,0-14.8-17.1-28.4-17.1s-28.4,17.1-28.4,17.1c-0.7,0.5,3.9,1.9,0,4.5c-3.9,2.6-25.8,0-25.8,0s-4.5-2.4-9,4.3 c-4.1,6.1-5.3,24.4-9.1,30.9c-3.7,6.2-9.1,8-8.9,10c0.6,6.5,10.3,43.2,10.3,43.2s-1.9,20.7-1.9,23.2c0,2.6,7.1,5.8,12.3,3.9 c3.6-1.3,8.7-12,11.5-18.4c1.2-2.8-7.3-11.7-7.3-11.7s6.1-10.5,6.8-13.7c0.6-3.2,3.9-3.2,9-2.6c5.2,0.6,7.1,9,4.5,13.6 c-1.8,3.2-24.4,59.7-39.5,93.2c-1.7,3.7,6.3,4,3.4,7.5c-3.3,4-6.9,3.4-10.2,6.6c-4.7,4.6-8.2,7.9-7.9,8.9c2.6,7.7,45.1,5.8,45.1,5.8 s13.6-6.5,11-14.8c-1.1-3.6-3.4-35.9-3-45.4c0.5-12.6,4-3,6.2-8.2c3.9-9,18.1-26.5,22.6-29c4.5-2.6,8.4-4,8.4-4s3.9,1.5,8.4,4 c4.5,2.6,18.7,20,22.6,29c2.2,5.2,5.8-4.5,6.2,8.2c0.3,9.5-1.9,41.8-3,45.4c-2.6,8.4,11,14.8,11,14.8s42.5,1.9,45.1-5.8 C570.7,386.2,567.1,382.9,562.5,378.3z"/></symbol>`,
            height: 1,
            width: 1
        };
    }
}