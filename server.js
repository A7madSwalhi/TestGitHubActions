import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import routes from './src/Routes/index.js';
import cookieParser from 'cookie-parser';


dotenv.config();
const app = express();

if (process.env.APP_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(cookieParser())


app.use(routes)


app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.APP_PORT}`);
});


class CustomError extends Error {

}
