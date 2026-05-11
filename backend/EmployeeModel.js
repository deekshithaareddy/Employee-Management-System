import { Schema,model } from "mongoose";

const EmployeeSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    mobile:{
        type:Number,
        required:[true,"Mobile number is required"]
    },
    designation:{
        type:String,
        required:[true,"Designation is required"]
    },
    companyName:{
        type:String,
        required:[true,"Company name is required"]
    }
})

export const employeeModel = model("employee", EmployeeSchema)