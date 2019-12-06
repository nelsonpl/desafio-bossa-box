import { Controller, Get, Param, Query, Post, Body, Delete } from '@nestjs/common';
import { ToolService } from './tool.service';
import { Tool, ToolDto } from './tool.model';

@Controller('tool')
export class ToolController {
    constructor(private readonly service: ToolService) { }

    @Get()
    async findAll(@Query('tag') tag: string): Promise<Tool[]> {
        const lista = this.service.findAll(tag);
        return lista;
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
