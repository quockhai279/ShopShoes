import express from 'express';
import bodyParser from 'body-parser';
import configViewEngine from './config/viewEngine';
import initWebRoute from './route/web';
import connectDB from './config/connectDB';
import cors from 'cors';

require('dotenv').config();


const app = express();
const port = process.env.PORT;
app.use(cors({ origin: true }))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// setup view engine
configViewEngine(app);
// init web route
initWebRoute(app);
//connect DB
connectDB();


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})