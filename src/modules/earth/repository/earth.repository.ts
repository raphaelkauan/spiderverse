import { Injectable } from "@nestjs/common";
import { SpiderverseInterface } from "src/database/interfaces/spiderverse.interface";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class EarthRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findSpiderverseEarth(id: string): Promise<SpiderverseInterface[]> {
        const convertId = Number(id);
        return await this.prisma.spiderverses.findMany({
            where: {
                earth: convertId,
            },
        });
    }
}
