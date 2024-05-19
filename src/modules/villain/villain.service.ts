import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { VillainRepository } from "./repository/villain.repository";
import { CreateVillainDto } from "./dto/create_villain.dto";
import { VillainInterface } from "src/database/interfaces/villain.interface";
import { SpiderverseRepository } from "../spiderverse/repository/spiderverse.repository";

@Injectable()
export class VillainService {
    constructor(
        private readonly villainRepository: VillainRepository,
        private readonly spiderverseRepository: SpiderverseRepository,
    ) {}

    async createVillain(createVillainDto: CreateVillainDto): Promise<VillainInterface> {
        const validationSpider = await this.spiderverseRepository.findOne(createVillainDto.fightVs);

        if (!validationSpider) {
            throw new HttpException("fightVs inválido!", HttpStatus.BAD_GATEWAY);
        }

        try {
            return await this.villainRepository.createVillain(createVillainDto);
        } catch (error) {
            throw new error(error);
        }
    }
}
