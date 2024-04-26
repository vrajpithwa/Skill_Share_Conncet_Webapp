import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"ssc"
})

db.connect((err)=>{
  if(err) throw err;
  console.log("Connected to the database!")
} )

