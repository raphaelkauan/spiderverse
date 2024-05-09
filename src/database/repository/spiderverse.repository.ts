import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { CreateSpiderverseDto } from "src/modules/spiderverse/dto/create-spiderverse.dto";
import { SpiderverseInterface } from "../interface/spiderverse.interface";

@Injectable()
export class SpiderverseRepository {
    constructor(private readonly prisma: PrismaService) {}

    async createSpiderverse(data: CreateSpiderverseDto): Promise<SpiderverseInterface> {
        return this.prisma.spiderverses.create({ data });
    }
}
