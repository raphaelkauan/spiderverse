import { Body, Controller, Post } from "@nestjs/common";
import { SpiderverseService } from "./spiderverse.service";
import { CreateSpiderverseDto } from "./dto/create-spiderverse.dto";
import { IsPublic } from "../auth/decorators/is_public.decorator";

@Controller()
export class SpiderverseController {
    constructor(private readonly spiderverseService: SpiderverseService) {}

    @IsPublic()
    @Post("spiderverse")
    createSpiderverse(@Body() createSpiderverseDto: CreateSpiderverseDto) {
        return this.spiderverseService.createSpiderverse(createSpiderverseDto);
    }
}
