import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateVillainDto } from "../dto/create_villain.dto";
import { VillainInterface } from "src/database/interfaces/villain.interface";

@Injectable()
export class VillainRepository {
    constructor(private readonly prisma: PrismaService) {}

    async createVillain(createVillainDto: CreateVillainDto): Promise<VillainInterface> {
        const data = {
            ...createVillainDto,
        };

        return await this.prisma.villains.create({ data });
    }

    async findAllVillain(pageIndex?: string): Promise<VillainInterface[]> {
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

        return villainFindAll;
    }

    async findOneVillain(id: string): Promise<VillainInterface> {
        const convertId = Number(id);
        const villainFindOne = await this.prisma.villains.findUnique({
            where: { id: convertId },
        });

        return villainFindOne;
    }
}
