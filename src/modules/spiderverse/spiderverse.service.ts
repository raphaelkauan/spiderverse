import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { SpiderverseRepository } from "src/modules/spiderverse/repository/spiderverse.repository";
import { CreateSpiderverseDto } from "./dto/create-spiderverse.dto";
import { PrismaService } from "src/database/prisma.service";
import { UpdateSpiderverseDto } from "./dto/update_spiderverse.dto";
import { SpiderverseInterface } from "src/database/interfaces/spiderverse.interface";

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

    async findOne(id: string): Promise<SpiderverseInterface> {
        const spider = await this.spiderverseRepository.findOne(id);

        if (!spider) {
            throw new HttpException("Id não encontrado!", HttpStatus.BAD_REQUEST);
        }

        return spider;
    }

    async update(id: string, updateSpiderverseDto: UpdateSpiderverseDto): Promise<{ message: string }> {
        const validationSpiderManName = await this.spiderverseRepository.findBySpiderManName(updateSpiderverseDto.spiderManName);

        if (validationSpiderManName) {
            throw new HttpException("Esse nome já existe!", HttpStatus.CONFLICT);
        }

        try {
            await this.spiderverseRepository.update(id, updateSpiderverseDto);
            return { message: "Spider atualizado com sucesso!" };
        } catch (error) {
            throw new error(error);
        }
    }

    async delete(id: string): Promise<{ message: string }> {
        const validationSpiderverse = await this.spiderverseRepository.findOne(id);

        if (!validationSpiderverse) {
            throw new HttpException("Esse id está inválido!", HttpStatus.BAD_REQUEST);
        }

        try {
            await this.spiderverseRepository.delete(id);
            return { message: "Spider deletado com deletado!" };
        } catch (error) {
            throw new error(error);
        }
    }
}
