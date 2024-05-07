import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./database/prisma.service";
import { SpiderversesModule } from "./modules/spiderverses/spiderverses.module";
import { VillainsModule } from "./modules/villains/villains.module";

@Module({
    imports: [SpiderversesModule, VillainsModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}
