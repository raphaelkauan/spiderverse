import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../database/prisma.service";
import { CreateSpiderverseDto } from "src/modules/spiderverse/dto/create-spiderverse.dto";
import { SpiderverseInterface } from "../../../database/interfaces/spiderverse.interface";
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

    async findBySpiderManName(SpiderManName: string): Promise<SpiderverseInterface> {
        return this.prisma.spiderverses.findUnique({ where: { spiderManName: SpiderManName } });
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
}
