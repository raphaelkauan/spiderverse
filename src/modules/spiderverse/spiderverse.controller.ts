import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { SpiderverseService } from "./spiderverse.service";
import { CreateSpiderverseDto } from "./dto/create-spiderverse.dto";
import { IsPublic } from "../auth/decorators/is_public.decorator";

@Controller("spiderverse")
export class SpiderverseController {
    constructor(private readonly spiderverseService: SpiderverseService) {}

    @Post()
    @IsPublic()
    createSpiderverse(@Body() createSpiderverseDto: CreateSpiderverseDto) {
        return this.spiderverseService.createSpiderverse(createSpiderverseDto);
    }

    @Get()
    @IsPublic()
    findAll(@Query("pageIndex") pageIndex?: string) {
        return this.spiderverseService.findAll(pageIndex);
    }

    @Get(":id")
    @IsPublic()
    findOne(@Param("id") id: string) {
        return this.spiderverseService.findOne(id);
    }
}
