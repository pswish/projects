import { Request, Response } from 'express';

import { deleteBirthdaycard } from '../models/birthday-card';

const handler = (req: Request, res: Response) => {
    const { id } =req.params;
    try {
        deleteBirthdaycard(id);
    }   catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
    };
export default handler;
