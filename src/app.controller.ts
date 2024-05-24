import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { PresentSpiderMan } from "./modules/auth/decorators/present_spider.decorator";
import { Spiderverse } from "./modules/spiderverse/entity/spiderverse.entity";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("test of login")
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    @ApiOperation({ summary: "Return Spider-Man logged" })
    getPresentSpider(@PresentSpiderMan() spider: Spiderverse) {
        return this.appService.getPresentSpider(spider);
    }
}
