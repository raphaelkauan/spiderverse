import { Injectable } from "@nestjs/common";
import { SpiderverseRepository } from "src/database/repository/spiderverse.repository";

@Injectable()
export class SpiderverseService {
    constructor(private readonly spiderverseRepository: SpiderverseRepository) {}

    async createSpiderverse(createSpiderverseDto) {
        await this.spiderverseRepository.createSpiderverse(createSpiderverseDto);
    }
}
