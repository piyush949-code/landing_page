const express =require ('express');
const app = express()
const mysql = require('mysql');
const cors=require('cors');
//connecting with mysql
app.use(cors());
app.use(express.json());
<<<<<<< HEAD
const db=mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "kartikdb@309",
    database: "firstdb",
=======
const db=mysql.createPool({
    user: "root",
    host: "localhost",
    password: "kartikdb@309",
    database: "newdb",
>>>>>>> f471d867d47a94a874b035079efe99696d923a68
});
//in nodejs in express if you want to create a request or api end point write app
//to grab something from frontend use req
//to send something to frontend use res
app.post('/',(req,res)=>{

    //send these data to database
  const id=1
  const name="ABC"
<<<<<<< HEAD
  const email="ABC@gmail.com"
=======
>>>>>>> f471d867d47a94a874b035079efe99696d923a68
  
  //inserting into databse and initially putting values ?key: "id"
  //after , write callback
  db.query(
<<<<<<< HEAD
      `INSERT INTO siteusers ('id', 'username',' useremail') VALUES (?,?,?)`,
      [id, name, email],(err,result)=>{
=======
      `INSERT INTO testtable ('id', 'name') VALUES (?,?)`,
      [id, name],(err,result)=>{
>>>>>>> f471d867d47a94a874b035079efe99696d923a68
          if(err){
              console.log(err)
          }else{
              res.json(result);
          }
      }
      );
});
app.get('/',(req,res)=>{
<<<<<<< HEAD
    db.query("select * FROM siteusers",(err,result)=>{
=======
    db.query("INSERT INTO testtable (id, name) VALUES (1,'ABC')",(err,result)=>{
>>>>>>> f471d867d47a94a874b035079efe99696d923a68
        if(err){
            console.log(err)
        }
        else{
<<<<<<< HEAD
            res.send(result);
=======
            res.send("sever is running");
>>>>>>> f471d867d47a94a874b035079efe99696d923a68
        }
    })
})
app.listen(3001,()=>{
    console.log("Server is running on port 3001");
})