import express, { json } from 'express' ;
import dotenv from 'dotenv' ;
import mongodb from 'mongodb' ;

dotenv.config();

const resultRouter = express.Router();

resultRouter.get("/" , (req ,res) =>
{
    res.send("Results Page")
}
);

resultRouter.get("/:id" , (req ,res) =>
{

    const id = req.params.id ;

    const uri = process.env.DATABASE_URL ;
    const MongoClient = mongodb.MongoClient ;
    MongoClient.connect(uri,  { useUnifiedTopology: true } , (err, db) => {

    var dbo = db.db("results");
    const hallticket = id.toUpperCase() ;
    console.log(hallticket);

    const options = {
        // sort returned documents in ascending order by title (A->Z)
        sort: { subjectCode : 1 },
      // Include only the `title` and `imdb` fields in each returned document
        projection: { _id: 1, subjectCode: 1 , subjectName : 1 , Grade : 1 , GradePoint : 1 },
      };
      
    const cursor = dbo.collection("results").find({htno: hallticket}, options );



    cursor.forEach(element => {
      res.write( JSON.stringify(element) )
    });

    setTimeout(() => {
      res.end();
    }, 3000);

    /*  
    code for getting the response in React
fetch("http://localhost:3000/results/16tr1a0520")
.then((response) => response.text())
.then(res => console.log(res) )
*/

});
}
);




export default resultRouter;