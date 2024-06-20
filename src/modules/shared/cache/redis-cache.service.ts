import { Injectable } from "@nestjs/common";
import { RedisClient } from "src/app/config/redis-client";

@Injectable()
export class CacheService {
    constructor(private readonly client: RedisClient) {}

    async get(key: string): Promise<string> {
        return new Promise((resolve, reject) => {
            this.client.get(key, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    async set(key: string, value: string, ttl: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.set(key, value, "EX", ttl, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }
}
