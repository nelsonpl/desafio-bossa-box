import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tool } from './tool.interface';

@Injectable()
export class ToolService {
    constructor(@InjectModel('Tool') private readonly model: Model<Tool>) { }

    async findAll(): Promise<Tool[]> {
        return await this.model.find().exec();
    }

}
