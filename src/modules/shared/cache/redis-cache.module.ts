import { Global, Module } from "@nestjs/common";
import { RedisClient } from "src/app/config/redis-client";
import { CacheService } from "./redis-cache.service";

@Global()
@Module({
    providers: [RedisClient, CacheService],
    exports: [RedisClient, CacheService],
})
export class RedisModule {}
