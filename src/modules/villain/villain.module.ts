import { Module } from "@nestjs/common";
import { VillainController } from "./villain.controller";
import { VillainService } from "./villain.service";
import { VillainRepository } from "./repository/villain.repository";
import { PrismaService } from "src/database/prisma.service";
import { SpiderverseRepository } from "../spiderverse/repository/spiderverse.repository";

@Module({
    controllers: [VillainController],
    providers: [VillainService, VillainRepository, PrismaService, SpiderverseRepository],
})
export class VillainModule {}
