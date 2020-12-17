import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import BookDao from '@daos/Book/BookDao';
import { paramMissingError } from '@shared/constants';
import cors from 'cors';

const router = Router();
const bookDao = new BookDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

router.use(cors());

router.get('/all', async (req: Request, res: Response) => {
    const books = await bookDao.getAll();
    console.log(books);
    return res.status(OK).json({books});
})

router.post('/add', async (req: Request, res: Response) => {
    const { book } = req.body;
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

router.delete("/delete/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    await bookDao.delete(Number(id));
})


export default router;