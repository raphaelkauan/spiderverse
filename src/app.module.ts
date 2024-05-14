import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./database/prisma.service";
import { SpiderverseModule } from "./modules/spiderverse/spiderverse.module";
import { VillainModule } from "./modules/villain/villain.module";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
    imports: [SpiderverseModule, VillainModule, AuthModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}
