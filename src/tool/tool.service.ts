import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tool } from './tool.interface';
import { ToolDto } from './tool.dto';

@Injectable()
export class ToolService {

    constructor(@InjectModel('Tool') private readonly model: Model<Tool>) { }

    async findAll(tag?: string): Promise<Tool[]> {
        if (tag)
            return await this.model.find({ tags: tag }).exec();

        return await this.model.find().exec();
    }

    async create(tool: ToolDto): Promise<Tool> {
        return await this.model.create(tool);
    }

    async delete(id: string) {
        await this.model.deleteOne({ _id: id });
    }

}
