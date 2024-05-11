import { Spiderverse } from "src/modules/spiderverse/entitys/spiderverse.entity";

export interface SpiderverseInterface extends Spiderverse {
    id?: string;
    spiderManName: string;
    spiderManPassword: string;
    earth: number;
    powers: string;
    dataCreate?: Date;
}
