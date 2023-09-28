import express from "express";
import cors from "cors";


let students = [
    { id: 1, name: "Nisha Jangir", age: 21, phone: 2372896523 },
    { id: 2, name: "Hansha Jangir", age: 22, phone: 2372326523 },
    { id: 3, name: "Arpita Jangir", age: 221, phone: 2372526523 },


];
const app = express()

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))

app.get("/", (req, res) => {
    res.json(students)
})

app.post("/new", (req, res) => {
    const newStudent = req.body
    const newid = students[students.length - 1].id + 1
    newStudent.id = newid;
    students.push(newStudent)
    res.json(students)
});

app.listen(5000, () => console.log("Server started at 5000"))