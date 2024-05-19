import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { SpiderverseService } from "./spiderverse.service";
import { CreateSpiderverseDto } from "./dto/create_spiderverse.dto";
import { IsPublic } from "../auth/decorators/is_public.decorator";
import { UpdateSpiderverseDto } from "./dto/update_spiderverse.dto";
import { SpiderverseInterface } from "src/database/interfaces/spiderverse.interface";

@Controller("spiderverse")
export class SpiderverseController {
    constructor(private readonly spiderverseService: SpiderverseService) {}

    @Post()
    @IsPublic()
    createSpiderverse(@Body() createSpiderverseDto: CreateSpiderverseDto): Promise<SpiderverseInterface> {
        return this.spiderverseService.createSpiderverse(createSpiderverseDto);
    }

    @Get()
    @IsPublic()
    findAll(@Query("pageIndex") pageIndex?: string): Promise<SpiderverseInterface[]> {
        return this.spiderverseService.findAll(pageIndex);
    }

    @Get(":id")
    @IsPublic()
    findOne(@Param("id") id: string): Promise<SpiderverseInterface> {
        return this.spiderverseService.findOne(id);
    }

    @Patch(":id")
    @IsPublic()
    update(@Param("id") id: string, @Body() updateSpiderverseDto: UpdateSpiderverseDto): Promise<{ message: string }> {
        return this.spiderverseService.update(id, updateSpiderverseDto);
    }

    @Delete(":id")
    @IsPublic()
    delete(@Param("id") id: string): Promise<{ message: string }> {
        return this.spiderverseService.delete(id);
    }
}
