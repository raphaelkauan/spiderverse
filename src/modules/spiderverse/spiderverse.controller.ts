import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { SpiderverseService } from "./spiderverse.service";
import { CreateSpiderverseDto } from "./dto/create_spiderverse.dto";
import { IsPublic } from "../auth/decorators/is_public.decorator";
import { UpdateSpiderverseDto } from "./dto/update_spiderverse.dto";
import { SpiderverseInterface } from "src/database/interfaces/spiderverse.interface";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";

@ApiTags("spiderverse")
@Controller("spiderverse")
export class SpiderverseController {
    constructor(private readonly spiderverseService: SpiderverseService) {}

    @Post()
    @IsPublic()
    @ApiOperation({ summary: "Create a new Spider-Man" })
    createSpiderverse(@Body() createSpiderverseDto: CreateSpiderverseDto): Promise<SpiderverseInterface> {
        return this.spiderverseService.createSpiderverse(createSpiderverseDto);
    }

    @Get()
    @IsPublic()
    @ApiOperation({ summary: "Get all Spider-Man" })
    @ApiQuery({ name: "pageIndex" })
    findAllSpiderverse(@Query("pageIndex") pageIndex?: string): Promise<SpiderverseInterface[]> {
        return this.spiderverseService.findAllSpiderverse(pageIndex);
    }

    @Get(":id")
    @IsPublic()
    @ApiOperation({ summary: "Get a Spider-Man" })
    findOneSpiderverse(@Param("id") id: string): Promise<SpiderverseInterface> {
        return this.spiderverseService.findOneSpiderverse(id);
    }

    @Patch(":id")
    @IsPublic()
    @ApiOperation({ summary: "Update a Spider-Man" })
    updateSpiderverse(@Param("id") id: string, @Body() updateSpiderverseDto: UpdateSpiderverseDto): Promise<{ message: string }> {
        return this.spiderverseService.updateSpiderverse(id, updateSpiderverseDto);
    }

    @Delete(":id")
    @IsPublic()
    @ApiOperation({ summary: "Delete a Spider-Man" })
    deleteSpiderverse(@Param("id") id: string): Promise<{ message: string }> {
        return this.spiderverseService.deleteSpiderverse(id);
    }
}
