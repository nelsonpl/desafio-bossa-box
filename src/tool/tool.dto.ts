import { ApiProperty } from "@nestjs/swagger";

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