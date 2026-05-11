import exp from 'express'
import { employeeModel } from './EmployeeModel.js'
export const employeeApp = exp.Router()
// CREATE employee
employeeApp.post("/employees", async (req, res) => {
    const newemp = req.body
    const empDoc = new employeeModel(newemp)
    await empDoc.save()
    res.status(201).json({ message: "Employee created", payload: empDoc })
})
// READ all employees
employeeApp.get("/employees", async (req, res) => {
        const employees = await employeeModel.find()
        res.status(200).json({ message: "Employees", payload: employees })
})

// UPDATE employee
employeeApp.put("/employees", async (req, res) => {
        const update = req.body
        const updatedemp = await employeeModel.findbyIdAndUpdate(
            req.params.id,
            {  $set: { ...modifiedEmp }, },
            { returnDocument: "after" })
        if (!updatedemp) {
            return res.status(404).json({ message: "Employee not found" })
        }
        res.status(200).json({ message: "Employee updated", payload: updatedemp })
})

// DELETE employee
employeeApp.delete("/employees/:id", async (req, res) => {
        const empid = req.params.id
        const deletedemp = await employeeModel.findByIdAndDelete(empid)
        if (!deletedemp) {
            return res.status(404).json({ message: "Employee not found" })
        }
        res.status(200).json({ message: "Employee deleted",payload:deletedemp})
})