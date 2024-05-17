import { Module } from "@nestjs/common";
import { SpiderverseController } from "./spiderverse.controller";
import { SpiderverseService } from "./spiderverse.service";
import { SpiderverseRepository } from "src/modules/spiderverse/repository/spiderverse.repository";
import { PrismaService } from "src/database/prisma.service";

@Module({
    controllers: [SpiderverseController],
    providers: [SpiderverseService, SpiderverseRepository, PrismaService],
})
export class SpiderverseModule {}
