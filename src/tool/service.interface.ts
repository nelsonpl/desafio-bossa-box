export interface Service<T> {

    findAll(): Promise<T[]>,
    create(model: T): Promise<T>,
    delete(id: string),

}
