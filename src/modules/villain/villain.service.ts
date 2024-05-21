import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { VillainRepository } from "./repository/villain.repository";
import { CreateVillainDto } from "./dto/create_villain.dto";
import { VillainInterface } from "src/database/interfaces/villain.interface";
import { SpiderverseRepository } from "../spiderverse/repository/spiderverse.repository";
import { UpdateSpiderverseDto } from "../spiderverse/dto/update_spiderverse.dto";

@Injectable()
export class VillainService {
    constructor(
        private readonly villainRepository: VillainRepository,
        private readonly spiderverseRepository: SpiderverseRepository,
    ) {}

    async createVillain(createVillainDto: CreateVillainDto): Promise<VillainInterface> {
        const validationSpider = await this.spiderverseRepository.findOneSpiderverse(createVillainDto.fightVs);

        if (!validationSpider) {
            throw new HttpException("fightVs inválido!", HttpStatus.BAD_GATEWAY);
        }

        try {
            return await this.villainRepository.createVillain(createVillainDto);
        } catch (error) {
            throw new error(error);
        }
    }

    async findAllVillain(pageIndex?: string): Promise<VillainInterface[]> {
        try {
            const villainFindAll = await this.villainRepository.findAllVillain(pageIndex);
            return villainFindAll;
        } catch (error) {
            throw new error(error);
        }
    }

    async findOneVillain(id: string): Promise<VillainInterface> {
        if (!/^\d+$/.test(id)) {
            throw new HttpException("Id não encontrado!", HttpStatus.BAD_REQUEST);
        }

        const villainFindOne = await this.villainRepository.findOneVillain(id);

        if (villainFindOne === null) {
            throw new HttpException("Id não encontrado!", HttpStatus.BAD_REQUEST);
        }
        return villainFindOne;
    }

    async updateVillain(id: string, updateVillainDto: UpdateSpiderverseDto): Promise<any> {
        if (!/^\d+$/.test(id)) {
            throw new HttpException("Id inválido!", HttpStatus.BAD_REQUEST);
        }

        try {
            return await this.villainRepository.updateVillain(id, updateVillainDto);
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteVillain(id: string): Promise<any> {
        if (!/^\d+$/.test(id)) {
            throw new HttpException("Id inválido!", HttpStatus.BAD_REQUEST);
        }

        try {
            await this.villainRepository.deleteVillain(id);
            return "Villain deletado com sucesso!";
        } catch (error) {
            throw new Error(error);
        }
    }
}
