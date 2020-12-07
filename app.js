import express, { json, request, response } from 'express'
import cors from 'cors'
import router from './routes/details.js';

const app = express();

const PORT =  3000 ;

app.use(cors());

app.use("/details" , router);


app.get("/" , (request , response) =>
{
    response.send("Home page and Successfully running");
});

app.listen(PORT , ()=> console.log(`Successfully running at localhost port : ${PORT}`) )
