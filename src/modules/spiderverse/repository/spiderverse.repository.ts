import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../database/prisma.service";
import { CreateSpiderverseDto } from "src/modules/spiderverse/dto/create_spiderverse.dto";
import { SpiderverseInterface } from "../../../database/interfaces/spiderverse.interface";
import * as bcrypt from "bcrypt";
import { UpdateSpiderverseDto } from "../dto/update_spiderverse.dto";

@Injectable()
export class SpiderverseRepository {
    constructor(private readonly prisma: PrismaService) {}

    async createSpiderverse(createSpiderverseDto: CreateSpiderverseDto): Promise<SpiderverseInterface> {
        const data = {
            ...createSpiderverseDto,
            spiderManPassword: await bcrypt.hash(createSpiderverseDto.spiderManPassword, 7),
        };

        return await this.prisma.spiderverses.create({ data });
    }

    async findBySpiderManName(spiderManName: string): Promise<SpiderverseInterface> {
        return await this.prisma.spiderverses.findUnique({ where: { spiderManName } });
    }

    async findAllSpiderverse(pageIndex: string): Promise<SpiderverseInterface[]> {
        let skipValue = 0;
        if (pageIndex) {
            const convertPageIndex = Number(pageIndex);
            skipValue = convertPageIndex * 5;
        }

        const spiderFindAll = await this.prisma.spiderverses.findMany({
            select: {
                id: true,
                spiderManName: true,
                spiderManPassword: false,
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

        return spiderFindAll;
    }

    async findOneSpiderverse(id: string): Promise<SpiderverseInterface> {
        const spiderFindOne = await this.prisma.spiderverses.findUnique({
            where: { id },
            select: {
                id: true,
                spiderManName: true,
                spiderManPassword: false,
                earth: true,
                powers: true,
                dataCreate: true,
            },
        });

        return spiderFindOne;
    }

    async updateSpiderverse(id: string, updateSpiderverseDto: UpdateSpiderverseDto): Promise<any> {
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

    async deleteSpiderverse(id: string): Promise<any> {
        return await this.prisma.spiderverses.delete({ where: { id } });
    }

    async allSpiderverse(): Promise<any> {
        return await this.prisma.spiderverses.findMany({
            select: {
                id: true,
                spiderManName: true,
                spiderManPassword: false,
                earth: true,
                powers: true,
                dataCreate: true,
            },
        });
    }
}
