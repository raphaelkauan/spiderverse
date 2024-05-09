import { Body, Controller, Post } from "@nestjs/common";
import { SpiderverseService } from "./spiderverse.service";
import { CreateSpiderverseDto } from "./dto/create-spiderverse.dto";

@Controller("spiderverse")
export class SpiderverseController {
    constructor(private readonly spiderverseService: SpiderverseService) {}

    @Post()
    createSpiderverse(@Body() createSpiderverseDto: CreateSpiderverseDto) {
        return this.spiderverseService.createSpiderverse(createSpiderverseDto);
    }
}
