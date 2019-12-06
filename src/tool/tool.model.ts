import { Schema, Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export const ToolSchema = new Schema<Tool>({
    title: String,
    link: String,
    description: String,
    tags: [String]
});

export interface Tool extends Document {
    title: String,
    link: String,
    description: String,
    tags: [String]
}

export class ToolDto {

    @ApiProperty({ example: 'Notion' })
    title: String;

    @ApiProperty({ example: 'https://notion.so' })
    link: String;

    @ApiProperty({ example: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.' })
    description: String;

    @ApiProperty({ type: [String], examples: ['api', 'json', 'schema', 'node', 'github', 'rest'] })
    tags: [String];
}