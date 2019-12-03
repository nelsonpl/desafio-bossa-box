import { Controller, Get } from '@nestjs/common';
import { ToolService } from './tool.service';
import { Tool } from './tool.interface';

@Controller('tool')
export class ToolController {
    constructor(private readonly service: ToolService) { }

    @Get()
    async findAll(): Promise<Tool[]> {
        return this.service.findAll();
    }
}
