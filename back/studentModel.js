import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }

})

const studentModel = mongoose.model("studentModel",studentSchema )
export default studentModel