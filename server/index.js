const express =require ('express');
const app = express()
const mysql = require('mysql');
const cors=require('cors');
//connecting with mysql
app.use(cors());
app.use(express.json());
const db=mysql.createPool({
    user: "root",
    host: "localhost",
    password: "kartikdb@309",
    database: "testingdb",
});
//in nodejs in express if you want to create a request or api end point write app
//to grab something from frontend use req
//to send something to frontend use res
app.post('/',(req,res)=>{

    //send these data to database
//   const name=req.body.name
//   const email=req.body.email
//   const job=req.body.job
  
  //inserting into databse and initially putting values ?key: "id"
  //after , write callback
  db.query(
      `INSERT INTO user('id', 'username',' useremail') VALUES (1,"ABC","abc@gmail.com")`,
      [name, email, job],(err,result)=>{
          if(err){
              console.log(err)
          }else{
              res.json(result);
          }
      }
      );
});
app.get('/',(req,res)=>{
    db.query("select * FROM user",(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})
app.listen(3001,()=>{
    console.log("Server is running on port 3001");
})