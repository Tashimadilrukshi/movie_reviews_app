const express=require('express') //using express dependancy
const app=express()  //create an app variable

const mysql=require('mysql')

const db=mysql.createConnection({  //accessing our database
    host:"127.0.0.1",
    user:"root",
    password:"",
})

db.connect(function(err){
    if(err) throw err;
    console.log("Connected")
})

//add a output to the app's initial route (here pass the route first and then pass the parameters)
app.get('/', (req,res)=>{
    const sqlInsert="INSERT INTO moview_reviews (movieName, movieReview) VALUES ('inception','good movie');"
    db.query(sqlInsert, (err, result)=>{
        res.send("hellooo")
    })
       //res means like responce we sending to the front end
})
//req means get information from the frontend


app.listen(3001, ()=>{
    console.log("running on port 3001")
})

// "scripts": {
//     "start": "node index.js", 
//     //to start this app do this command
//     //"devStart": "nodemon index.js", //whenever we run this command it runs the server through nodemon
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },