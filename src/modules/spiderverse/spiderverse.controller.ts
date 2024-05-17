import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { SpiderverseService } from "./spiderverse.service";
import { CreateSpiderverseDto } from "./dto/create-spiderverse.dto";
import { IsPublic } from "../auth/decorators/is_public.decorator";
import { UpdateSpiderverseDto } from "./dto/update_spiderverse.dto";

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

    @Patch(":id")
    @IsPublic()
    update(@Param("id") id: string, @Body() updateSpiderverseDto: UpdateSpiderverseDto) {
        return this.spiderverseService.update(id, updateSpiderverseDto);
    }
}
