import { Controller, Get, Param } from "@nestjs/common";
import { EarthService } from "./earth.service";

@Controller("earth")
export class EarthController {
    constructor(private readonly earthService: EarthService) {}

    @Get(":id")
    findSpiderverseEarth(@Param("id") id: string) {
        return this.earthService.findSpiderverseEarth(id);
    }
}
