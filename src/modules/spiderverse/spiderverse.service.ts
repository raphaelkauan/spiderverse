import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { SpiderverseRepository } from "src/database/repository/spiderverse.repository";
import { CreateSpiderverseDto } from "./dto/create-spiderverse.dto";
import { PrismaService } from "src/database/prisma.service";

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
}
