import { DeleteResult, getRepository } from "typeorm";

import { Book } from '@entities/Book'

export interface IBookDao {
    getAll: () => Promise<Book[]>;
    save: (book: Book) => Promise<Book>;
    delete: (id: number) => Promise<DeleteResult>;
    getById: (id: number) => Promise<Book | undefined>;
}

class BookDao implements IBookDao {
    public getAll(): Promise<Book[]> {
        return getRepository(Book).find();
    }
    
    public save(book: Book): Promise<Book> {
        return getRepository(Book).save(book);
    }

    public delete(id: number): Promise<DeleteResult> {
        return getRepository(Book).delete(id);
    }

    public getById(id: number): Promise<Book | undefined> {
        return getRepository(Book).findOne(id);
    }

}

export default BookDao;