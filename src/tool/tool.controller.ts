import { Controller, Get, Param, Query, Post, Body, Delete } from '@nestjs/common';
import { ToolService } from './tool.service';
import { Tool } from './tool.interface';
import { ToolDto } from './tool.dto';

@Controller('tool')
export class ToolController {
    constructor(private readonly service: ToolService) { }

    @Get()
    async findAll(@Query('tag') tag: string): Promise<Tool[]> {
        return this.service.findAll(tag);
    }

    @Post()
    async create(@Body() tool: ToolDto): Promise<Tool> {
        return this.service.create(tool);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.service.delete(id);
    }
}
