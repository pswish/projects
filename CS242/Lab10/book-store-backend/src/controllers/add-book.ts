import { Request, Response } from 'express';

import { addBook } from '../models/book';

const handler = async (req: Request, res: Response) => {
    const { title, isbn, author, picture, price, id } = req.body;
    try {
        addBook(title, isbn, author, picture, price, id);
    }
    catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};

export default handler;