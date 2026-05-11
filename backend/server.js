import exp from 'express'
import{ connect } from 'mongoose'
import cors from "cors"
import {employeeApp} from './EmployeeAPI.js'
// create express app
const app=exp()
// add cors middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5176"
    ]
  })
);
// body parser middleware
app.use(exp.json())
app.use("/employee-api",employeeApp)


const connectDB=async()=>{
    try{
        await connect("mongodb://localhost:27017/empdb")
        console.log("DB server connected")
        // assign port
        app.listen(3000,()=>console.log(`Server listening on 3000..`))
    }catch(err){
        console.log("error in db connection",err.message)
    }
}
connectDB()




//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});

