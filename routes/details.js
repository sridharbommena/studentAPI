import express from 'express' ;
import dotenv from 'dotenv' ;
import mongodb from 'mongodb' ;

dotenv.config();

const router = express.Router();

router.get("/" , (req ,res) =>
{
    res.send("Details Page")
}
);

router.get("/:id" , (req ,res) =>
{
    const id = req.params.id ;

    const uri = process.env.DATABASE_URL ;
    const MongoClient = mongodb.MongoClient ;
    MongoClient.connect(uri,  { useUnifiedTopology: true } , (err, db) => {

    var dbo = db.db("results");
    const hallticket = id.toUpperCase() ;
    console.log(hallticket)
    dbo.collection("student").findOne({htno: hallticket}, (err, result) => {

      console.log(result);
      db.close();

    res.json(result) ;

        });

        /*  
    code for getting the response in React
fetch("http://localhost:3000/details/16tr1a0520")
.then((response) => response.json())
.then(res => console.log(res) )
*/
    
});
}
);




export default router;