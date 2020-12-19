import cors from 'cors';
import { Request, Response, Router } from 'express';
import StatusCodes from 'http-status-codes';

import BookDao from '@daos/Book/BookDao';
import { paramMissingError } from '@shared/constants';

const router = Router();
const bookDao = new BookDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

router.use(cors({
    origin: process.env.FRONTEND_ORIGIN,
    credentials: true,
    optionsSuccessStatus: 200,
}));

router.get('/all', async (req: Request, res: Response) => {
    const books = await bookDao.getAll();
    console.log(books);
    return res.status(OK).json({books});
})

// curl -X POST -H "Content-Type: application/json" -d '{"name":"hoge", "author":"kawasaki", "url":"http://google.com"}' http://localhost:8080/api/books/add
router.post('/add', async (req: Request, res: Response) => {
    const book = req.body;
    if (!book) {
        return res.status(BAD_REQUEST).json({
            "message": paramMissingError
        });
    }
    
    await bookDao.save(book);
    return res.status(CREATED).json({
        insertId: book.id,
        message: "Success to save!"
    });
})

// curl -X DELETE http://localhost:8080/api/books/delete/{id}
router.delete("/delete/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    await bookDao.delete(Number(id));
    return res.status(OK).json({
        deletedId: id,
        message: "Success to delete!"
    });
})


export default router;