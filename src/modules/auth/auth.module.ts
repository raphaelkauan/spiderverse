import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { SpiderverseRepository } from "src/database/repository/spiderverse.repository";
import { PrismaService } from "src/database/prisma.service";
import { PassportModule } from "@nestjs/passport";

@Module({
    imports: [PassportModule],
    controllers: [AuthController],
    providers: [AuthService, SpiderverseRepository, PrismaService],
})
export class AuthModule {}
