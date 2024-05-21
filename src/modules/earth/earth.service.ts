import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class EarthService {
    constructor(private readonly prisma: PrismaService) {}

    async findSpiderverseEarth(id: string) {
        const convertId = Number(id);
        const earth = await this.prisma.spiderverses.findMany({
            where: {
                earth: convertId,
            },
        });

        return earth;
    }
}
