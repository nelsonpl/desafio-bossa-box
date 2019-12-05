export const ToolMock = [
    { title: 'titulo', link: 'link', description: 'descricao', tags: ['tag'] },
    { title: 'titulo', link: 'link', description: 'descricao', tags: ['tag2'] },
];

export class ToolServiceFactory {

    findAll(tag: string) {
        if (tag === 'tag')
            return ToolMock[0];

        return ToolMock;
    }

}
