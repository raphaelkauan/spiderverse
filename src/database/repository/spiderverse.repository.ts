import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { CreateSpiderverseDto } from "src/modules/spiderverse/dto/create-spiderverse.dto";
import { SpiderverseInterface } from "../interfaces/spiderverse.interface";
import * as bcrypt from "bcrypt";

@Injectable()
export class SpiderverseRepository {
    constructor(private readonly prisma: PrismaService) {}

    async createSpiderverse(createSpiderverseDto: CreateSpiderverseDto): Promise<SpiderverseInterface> {
        createSpiderverseDto = {
            ...createSpiderverseDto,
            spiderManPassword: await bcrypt.hash(createSpiderverseDto.spiderManPassword, 7),
        };

        return this.prisma.spiderverses.create({ data: createSpiderverseDto });
    }
}
