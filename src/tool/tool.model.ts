import { Schema, Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, IsUrl } from 'class-validator';

export const ToolSchema = new Schema<Tool>({
    title: { type: String, trim: true },
    link: { type: String, trim: true, lowercase: true },
    description: String,
    tags: { type: [String], lowercase: true, trim: true }
});

export interface Tool extends Document {
    title: String,
    link: String,
    description: String,
    tags: [String]
}

export class ToolDto {

    @ApiProperty({ example: 'Notion' })
    @IsNotEmpty()
    @MaxLength(50)
    title: String;

    @ApiProperty({ example: 'https://notion.so' })
    @IsNotEmpty()
    @IsUrl()
    @MaxLength(50)
    link: String;

    @ApiProperty({ example: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.' })
    @IsNotEmpty()
    @MaxLength(500)
    description: String;

    @ApiProperty({ type: [String], examples: ['api', 'json', 'schema', 'node', 'github', 'rest'] })
    @MaxLength(20, { each: true })
    tags: [String];
}