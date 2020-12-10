import express, { json, request, response } from 'express'
import cors from 'cors'
import router from './routes/details.js';
import resultRouter from './routes/result.js';

import dotenv from 'dotenv' ;
dotenv.config();

const app = express();

const PORT =  process.env.PORT || 3000 ;

app.use(cors());

app.use("/details" , router);

app.use("/results" , resultRouter);

app.get("/" , (request , response) =>
{
    response.send("Home page and Successfully running");
});

app.get("/nothing" , (req , res) =>
{
    res.send("Nothing here");
})

app.listen(PORT , ()=> console.log(`Successfully running at localhost port : ${PORT}`) )
