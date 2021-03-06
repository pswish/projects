import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 

import addBookController from './controllers/add-book';
import addBirthdayCardController from './controllers/add-birthday-card'
import fetchBooks from './controllers/fetch-books';
import fetchBirthdayCards from './controllers/fetch-birthdaycards';
import fetchBook from './controllers/fetch-book';
import updateBookContoller from './controllers/update-book';
import deleteBookContoller from './controllers/delete-book';
import fetchBirthdaycard from './controllers/fetch-birthdaycard';
import updateBirthdaycardController from './controllers/update-birthdaycard';
import deleteBirthdaycardController from './controllers/delete-birthdaycard';

dotenv.config();

// initalize mongoose/Mongodb
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;

const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// The router

app.post('/book', addBookController);
app.post('/birthdayCard', addBirthdayCardController);
app.get('/books', fetchBooks);
app.get('/birthdaycards', fetchBirthdayCards);
app.get('/book/:id', fetchBook);
app.put('/book', updateBookContoller);
app.delete('/book/:id', deleteBookContoller);
app.get('/birthdaycard/:id', fetchBirthdaycard);
app.put('/birthdaycard', updateBirthdaycardController);
app.delete('/birthdaycard/:id', deleteBirthdaycardController);



app.listen(process.env.port, () => console.log(`The server is running on http://localhost:${process.env.port}`));
