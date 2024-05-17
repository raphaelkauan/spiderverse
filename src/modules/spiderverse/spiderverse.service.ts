import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { SpiderverseRepository } from "src/modules/spiderverse/repository/spiderverse.repository";
import { CreateSpiderverseDto } from "./dto/create-spiderverse.dto";
import { PrismaService } from "src/database/prisma.service";
import { UpdateSpiderverseDto } from "./dto/update_spiderverse.dto";

@Injectable()
export class SpiderverseService {
    constructor(
        private readonly spiderverseRepository: SpiderverseRepository,
        private readonly prisma: PrismaService,
    ) {}

    async createSpiderverse(createSpiderverseDto: CreateSpiderverseDto) {
        const validationSpiderManName = await this.spiderverseRepository.findBySpiderManName(createSpiderverseDto.spiderManName);

        if (validationSpiderManName) {
            throw new HttpException("Esse nome já existe!", HttpStatus.CONFLICT);
        }

        try {
            await this.spiderverseRepository.createSpiderverse(createSpiderverseDto);
        } catch (error) {
            throw new Error("Erro ao cadastrar!");
        }

        return { ...createSpiderverseDto, spiderManPassword: undefined };
    }

    async findAll(pageIndex?: string) {
        const spiderverse = await this.spiderverseRepository.findAll(pageIndex);

        return spiderverse;
    }

    async findOne(id: string) {
        const spider = await this.spiderverseRepository.findOne(id);

        return spider;
    }

    async update(id: string, updateSpiderverseDto: UpdateSpiderverseDto) {
        const validationSpiderManName = await this.spiderverseRepository.findBySpiderManName(updateSpiderverseDto.spiderManName);

        if (validationSpiderManName) {
            throw new HttpException("Esse nome já existe!", HttpStatus.CONFLICT);
        }

        await this.spiderverseRepository.update(id, updateSpiderverseDto);

        return "Spider atualizado com sucesso!";
    }
}
