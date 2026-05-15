import exp from 'express'
import { employeeModel } from './EmployeeModel.js'
export const employeeApp = exp.Router()

// CREATE employee
employeeApp.post("/employees", async (req, res, next) => {
  try {
    const newemp = req.body
    const empDoc = new employeeModel(newemp)
    await empDoc.save()
    res.status(201).json({ message: "Employee created", payload: empDoc })
  } catch (err) {
    next(err)
  }
})

// READ all employees
employeeApp.get("/employees", async (req, res, next) => {
  try {
    const employees = await employeeModel.find()
    res.status(200).json({ message: "Employees", payload: employees })
  } catch (err) {
    next(err)
  }
})

// UPDATE employee ✅ fixed all 3 bugs
employeeApp.put("/employees/:id", async (req, res, next) => {  // ✅ added :id
  try {
    const update = req.body
    const updatedemp = await employeeModel.findByIdAndUpdate(  // ✅ fixed typo
      req.params.id,
      { $set: { ...update } },   // ✅ changed modifiedEmp to update
      { new: true }              // ✅ correct mongoose option (not returnDocument)
    )
    if (!updatedemp) {
      return res.status(404).json({ message: "Employee not found" })
    }
    res.status(200).json({ message: "Employee updated", payload: updatedemp })
  } catch (err) {
    next(err)
  }
})

// DELETE employee
employeeApp.delete("/employees/:id", async (req, res, next) => {
  try {
    const empid = req.params.id
    const deletedemp = await employeeModel.findByIdAndDelete(empid)
    if (!deletedemp) {
      return res.status(404).json({ message: "Employee not found" })
    }
    res.status(200).json({ message: "Employee deleted", payload: deletedemp })
  } catch (err) {
    next(err)
  }
})
