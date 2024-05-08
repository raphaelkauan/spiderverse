import { Module } from "@nestjs/common";
import { SpiderverseController } from "./spiderverse.controller";
import { SpiderverseService } from "./spiderverse.service";

@Module({
    controllers: [SpiderverseController],
    providers: [SpiderverseService],
})
export class SpiderverseModule {}
