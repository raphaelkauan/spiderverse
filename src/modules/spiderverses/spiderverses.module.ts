import { Module } from "@nestjs/common";
import { SpiderversesController } from "./spiderverses.controller";
import { SpiderversesService } from "./spiderverses.service";

@Module({
    controllers: [SpiderversesController],
    providers: [SpiderversesService],
})
export class SpiderversesModule {}
