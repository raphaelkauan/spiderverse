import { Body, Controller, Post } from "@nestjs/common";
import { SpiderverseService } from "./spiderverse.service";
import { CreateSpiderverseDto } from "./dto/create-spiderverse.dto";

@Controller()
export class SpiderverseController {
    constructor(private readonly spiderverseService: SpiderverseService) {}

    @Post("spiderverse")
    createSpiderverse(@Body() createSpiderverseDto: CreateSpiderverseDto) {
        return this.spiderverseService.createSpiderverse(createSpiderverseDto);
    }
}
