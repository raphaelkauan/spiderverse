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
}
