import { Injectable } from "@nestjs/common";
import { EarthRepository } from "./repository/earth.repository";
import { SpiderverseInterface } from "src/database/interfaces/spiderverse.interface";

@Injectable()
export class EarthService {
    constructor(private readonly earthRepository: EarthRepository) {}

    async findSpiderverseEarth(id: string): Promise<SpiderverseInterface[]> {
        return await this.earthRepository.findSpiderverseEarth(id);
    }
}
