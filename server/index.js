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
    database: "newdb",
});
//in nodejs in express if you want to create a request or api end point write app
//to grab something from frontend use req
//to send something to frontend use res
app.post('/',(req,res)=>{

    //send these data to database
  const id=1
  const name="ABC"
  
  //inserting into databse and initially putting values ?key: "id"
  //after , write callback
  db.query(
      `INSERT INTO testtable ('id', 'name') VALUES (?,?)`,
      [id, name],(err,result)=>{
          if(err){
              console.log(err)
          }else{
              res.json(result);
          }
      }
      );
});
app.get('/',(req,res)=>{
    db.query("INSERT INTO testtable (id, name) VALUES (1,'ABC')",(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("sever is running");
        }
    })
})
app.listen(3001,()=>{
    console.log("Server is running on port 3001");
})