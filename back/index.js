import express from "express";
import cors from "cors";
import studentRouter from './studentRouter.js'
import connection from "./connection.js";



const app = express()

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))
app.use("/student", studentRouter)

// connection.then(() =>{
//  app.listen(5000, () => {
// console.log("Server started at 5000")
// )).catch((err) => console.log("DB ERROR:" + err))
// }


connection.then(()=>{
app.listen(5000,()=>{
console.log('app is listening')
})
})