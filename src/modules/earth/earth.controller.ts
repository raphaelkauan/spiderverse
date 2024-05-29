import { Controller, Get, Param } from "@nestjs/common";
import { EarthService } from "./earth.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { SpiderverseInterface } from "src/database/interfaces/spiderverse.interface";

@ApiTags("earth")
@Controller("earth")
export class EarthController {
    constructor(private readonly earthService: EarthService) {}

    @Get(":id")
    @ApiOperation({ summary: "Return the Spider-Man from each land" })
    findSpiderverseEarth(@Param("id") id: string): Promise<SpiderverseInterface[]> {
        return this.earthService.findSpiderverseEarth(id);
    }
}
