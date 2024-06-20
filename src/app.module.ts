import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./database/prisma.service";
import { SpiderverseModule } from "./modules/spiderverse/spiderverse.module";
import { VillainModule } from "./modules/villain/villain.module";
import { AuthModule } from "./modules/auth/auth.module";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./modules/auth/guards/jwt_auth.guard";
import { EarthModule } from "./modules/earth/earth.module";
import { ConfigModule } from "@nestjs/config";
import { RedisModule } from "./modules/shared/cache/redis-cache.module";

@Module({
    imports: [RedisModule, SpiderverseModule, VillainModule, AuthModule, EarthModule, ConfigModule.forRoot()],
    controllers: [AppController],
    providers: [
        AppService,
        PrismaService,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
})
export class AppModule {}
