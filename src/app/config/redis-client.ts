import { Injectable } from "@nestjs/common";
import { Redis } from "ioredis";

@Injectable()
export class RedisClient extends Redis {
    constructor() {
        super();

        super.on("error", (err) => {
            console.log("Error on Redis!");
            process.exit();
        });

        super.on("connect", () => {
            console.log("Redis connected!");
        });
    }
}
