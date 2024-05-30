import { Module } from "@nestjs/common";
import { EarthController } from "./earth.controller";
import { EarthService } from "./earth.service";
import { PrismaService } from "src/database/prisma.service";
import { EarthRepository } from "./repository/earth.repository";

@Module({
    controllers: [EarthController],
    providers: [EarthService, PrismaService, EarthRepository],
})
export class EarthModule {}
