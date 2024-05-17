import { Injectable } from "@nestjs/common";
import { Spiderverse } from "./modules/spiderverse/entity/spiderverse.entity";

@Injectable()
export class AppService {
    getPresentSpider(spider: Spiderverse) {
        return spider;
    }
}
