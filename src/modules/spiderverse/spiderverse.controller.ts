import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { SpiderverseService } from "./spiderverse.service";
import { CreateSpiderverseDto } from "./dto/create-spiderverse.dto";
import { IsPublic } from "../auth/decorators/is_public.decorator";

@Controller("spiderverse")
export class SpiderverseController {
    constructor(private readonly spiderverseService: SpiderverseService) {}

    @IsPublic()
    @Post()
    createSpiderverse(@Body() createSpiderverseDto: CreateSpiderverseDto) {
        return this.spiderverseService.createSpiderverse(createSpiderverseDto);
    }

    @IsPublic()
    @Get()
    findAll(@Query("pageIndex") pageIndex?: string) {
        return this.spiderverseService.findAll(pageIndex);
    }
}
