import { Module } from "@nestjs/common";
import { VillainController } from "./villain.controller";
import { VillainService } from "./villain.service";

@Module({
    controllers: [VillainController],
    providers: [VillainService],
})
export class VillainModule {}
