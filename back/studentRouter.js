import express  from "express";
import studentModel from "./studentModel.js";

// let students = [
//     { id: 1, name: "Nisha Jangir", age: 21, phone: 2372896523 },
//     { id: 2, name: "Hansha Jangir", age: 22, phone: 2372326523 },
//     { id: 3, name: "Arpita Jangir", age: 221, phone: 2372526523 },
// ];

const studentRouter = express.Router();

studentRouter.get("/", async(req, res) => {
    const existingStudents = await studentModel.find({})
    // console.log(existingStudents);
    res.json(existingStudents)
})

studentRouter.post("/new", async(req, res) => {

    // const newStudent = req.body
    // const newid = students[students.length - 1].id + 1
    // newStudent.id = newid;
    // students.push(newStudent)

const { name , age , phone} =req.body;

const newStudent = new studentModel({
    name : name,
    age : age,
    phone : phone
})
const result = await newStudent.save()
    res.json(result)
});

studentRouter.delete("/delete/:id(\\d+)",(req,res)=>{
    const idTodelete = Number(req.url.split("/delete/")[1])
    students = students.filter((stud)=>{
        return stud.id != idTodelete
    })
    res.json(students)
})

studentRouter.put("/change/:id(\\d+)", (req, res) => {
    const idtoChange = Number(req.url.split("/change/")[1])
    const updatedUser = req.body
    students = students.map((student) => {
        return user.id == idtoChange ?  {...student , ...updatedUser} : student
    })

    res.json(students)
})

export default studentRouter