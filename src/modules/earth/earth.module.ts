import { Module } from "@nestjs/common";
import { EarthController } from "./earth.controller";
import { EarthService } from "./earth.service";
import { PrismaService } from "src/database/prisma.service";

@Module({
    controllers: [EarthController],
    providers: [EarthService, PrismaService],
})
export class EarthModule {}
