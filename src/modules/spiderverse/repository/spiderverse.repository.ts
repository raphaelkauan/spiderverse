import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../database/prisma.service";
import { CreateSpiderverseDto } from "src/modules/spiderverse/dto/create-spiderverse.dto";
import { SpiderverseInterface } from "../../../database/interfaces/spiderverse.interface";
import * as bcrypt from "bcrypt";
import { UpdateSpiderverseDto } from "../dto/update_spiderverse.dto";

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

    async findBySpiderManName(spiderManName: string): Promise<SpiderverseInterface> {
        return this.prisma.spiderverses.findUnique({ where: { spiderManName } });
    }

    async findAll(pageIndex: string): Promise<any> {
        let skipValue = 0;
        if (pageIndex) {
            const convertPageIndex = Number(pageIndex);
            skipValue = convertPageIndex * 5;
        }

        return this.prisma.spiderverses.findMany({
            select: {
                id: true,
                spiderManName: true,
                earth: true,
                powers: true,
                dataCreate: true,
            },
            orderBy: {
                dataCreate: "desc",
            },
            take: 5,
            skip: skipValue,
        });
    }

    async findOne(id: string): Promise<any> {
        return this.prisma.spiderverses.findUnique({ where: { id } });
    }

    async update(id: string, updateSpiderverseDto: UpdateSpiderverseDto) {
        const spiderUpdate = await this.prisma.spiderverses.update({
            where: {
                id,
            },
            data: {
                spiderManName: updateSpiderverseDto.spiderManName,
                earth: updateSpiderverseDto.earth,
                powers: updateSpiderverseDto.powers,
            },
            select: {
                spiderManName: true,
                earth: true,
                powers: true,
            },
        });

        return spiderUpdate;
    }
}
