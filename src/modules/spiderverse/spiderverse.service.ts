import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { SpiderverseRepository } from "src/modules/spiderverse/repository/spiderverse.repository";
import { CreateSpiderverseDto } from "./dto/create_spiderverse.dto";
import { UpdateSpiderverseDto } from "./dto/update_spiderverse.dto";
import { SpiderverseInterface } from "src/database/interfaces/spiderverse.interface";

@Injectable()
export class SpiderverseService {
    constructor(private readonly spiderverseRepository: SpiderverseRepository) {}

    async createSpiderverse(createSpiderverseDto: CreateSpiderverseDto): Promise<SpiderverseInterface> {
        const validationSpiderManName = await this.spiderverseRepository.findBySpiderManName(createSpiderverseDto.spiderManName);

        if (validationSpiderManName) {
            throw new HttpException("This name already exists!", HttpStatus.CONFLICT);
        }

        try {
            const spiderMan = await this.spiderverseRepository.createSpiderverse(createSpiderverseDto);
            return { ...spiderMan, spiderManPassword: undefined };
        } catch (error) {
            throw new Error("Error when registering!");
        }
    }

    async findAllSpiderverse(pageIndex?: string): Promise<SpiderverseInterface[]> {
        try {
            if (pageIndex === undefined) {
                return await this.spiderverseRepository.allSpiderverse();
            } else {
                return await this.spiderverseRepository.findAllSpiderverse(pageIndex);
            }
        } catch (error) {
            throw new error(error);
        }
    }

    async findOneSpiderverse(id: string): Promise<SpiderverseInterface> {
        const spider = await this.spiderverseRepository.findOneSpiderverse(id);

        if (!spider) {
            throw new HttpException("Id not found!", HttpStatus.BAD_REQUEST);
        }

        return spider;
    }

    async updateSpiderverse(id: string, updateSpiderverseDto: UpdateSpiderverseDto): Promise<{ message: string }> {
        const validationSpiderManName = await this.spiderverseRepository.findBySpiderManName(updateSpiderverseDto.spiderManName);

        if (validationSpiderManName) {
            throw new HttpException("This name already exists!", HttpStatus.CONFLICT);
        }

        try {
            await this.spiderverseRepository.updateSpiderverse(id, updateSpiderverseDto);
            return { message: "Spider successfully updated!" };
        } catch (error) {
            throw new error(error);
        }
    }

    async deleteSpiderverse(id: string): Promise<{ message: string }> {
        const validationSpiderverse = await this.spiderverseRepository.findOneSpiderverse(id);

        if (!validationSpiderverse) {
            throw new HttpException("This id is invalid!", HttpStatus.BAD_REQUEST);
        }

        try {
            await this.spiderverseRepository.deleteSpiderverse(id);
            return { message: "Spider successfully deleted!" };
        } catch (error) {
            throw new error(error);
        }
    }
}
