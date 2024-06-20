import { Injectable } from "@nestjs/common";
import { SpiderverseInterface } from "src/database/interfaces/spiderverse.interface";
import { PrismaService } from "src/database/prisma.service";
import { CacheService } from "src/modules/shared/cache/redis-cache.service";

@Injectable()
export class EarthRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly cacheService: CacheService,
    ) {}

    async findSpiderverseEarth(id: string): Promise<SpiderverseInterface[]> {
        const cacheKey = "findSpiderverseEarth";
        const cacheData = await this.cacheService.get(cacheKey);

        if (cacheData) {
            return JSON.parse(cacheData);
        }

        const convertId = Number(id);
        const findSpiderverseEarth = await this.prisma.spiderverses.findMany({
            where: {
                earth: convertId,
            },
        });

        await this.cacheService.set(cacheKey, JSON.stringify(findSpiderverseEarth), 20);

        return findSpiderverseEarth;
    }
}
