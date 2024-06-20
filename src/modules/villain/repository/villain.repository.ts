import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateVillainDto } from "../dto/create_villain.dto";
import { VillainInterface } from "src/database/interfaces/villain.interface";
import { UpdateVillainDto } from "../dto/update_villain.dto";
import { CacheService } from "src/modules/shared/cache/redis-cache.service";

@Injectable()
export class VillainRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly cacheService: CacheService,
    ) {}

    async createVillain(createVillainDto: CreateVillainDto): Promise<VillainInterface> {
        const data = {
            ...createVillainDto,
        };

        return await this.prisma.villains.create({ data });
    }

    async findAllVillain(pageIndex?: string): Promise<VillainInterface[]> {
        const cacheKey = "findAllVillain";
        const cacheData = await this.cacheService.get(cacheKey);

        if (cacheData) {
            return JSON.parse(cacheData);
        }

        let skipValue = 0;
        if (pageIndex) {
            const convertPageIndex = Number(pageIndex);
            skipValue = convertPageIndex * 10;
        }

        const villainFindAll = await this.prisma.villains.findMany({
            select: {
                id: true,
                villainName: true,
                powers: true,
                fightVs: true,
                dataCreate: true,
                spiderverses: {
                    select: {
                        spiderManName: true,
                    },
                },
            },
            orderBy: {
                dataCreate: "desc",
            },
            take: 5,
            skip: skipValue,
        });

        await this.cacheService.set(cacheKey, JSON.stringify(villainFindAll), 20);

        return villainFindAll;
    }

    async findOneVillain(id: string): Promise<VillainInterface> {
        const convertId = Number(id);
        const villainFindOne = await this.prisma.villains.findUnique({
            where: { id: convertId },
        });

        return villainFindOne;
    }

    async updateVillain(id: string, updateVillainDto: UpdateVillainDto): Promise<any> {
        const convertId = Number(id);
        const villainUpdate = await this.prisma.villains.update({
            where: { id: convertId },
            data: {
                villainName: updateVillainDto.villainName,
                powers: updateVillainDto.powers,
                fightVs: updateVillainDto.fightVs,
            },
            select: {
                villainName: true,
                powers: true,
                fightVs: true,
            },
        });

        return villainUpdate;
    }

    async deleteVillain(id: string): Promise<any> {
        const convertId = Number(id);
        return await this.prisma.villains.delete({ where: { id: convertId } });
    }
}
