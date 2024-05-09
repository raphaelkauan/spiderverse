import { Module } from "@nestjs/common";
import { SpiderverseController } from "./spiderverse.controller";
import { SpiderverseService } from "./spiderverse.service";
import { SpiderverseRepository } from "src/database/repository/spiderverse.repository";

@Module({
    controllers: [SpiderverseController],
    providers: [SpiderverseService, SpiderverseRepository],
})
export class SpiderverseModule {}
