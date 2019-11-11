import { Request, Response } from 'express';

import { updateBirthdaycard } from '../models/birthday-card';

const handler = (req: Request, res: Response) => {
    const { title, material, picture, price , _id} = req.body;
    try {
        updateBirthdaycard( _id, title, material, picture, price,);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};

export default handler;