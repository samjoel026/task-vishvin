const Employee = require('../models/Employee.model.js')


const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        err.statusCode = 400;
        err.message = "Unable to Get All the employees"
        next(err)
    }
}


const createEmployee = async (req, res) => {
    const { name, email, position, status, description } = req.body;
    const newEmployee = new Employee({ name, email, position, status, description });

    try {
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (err) {
        err.statusCode = 400;
        err.message = "Unable to create a Employee";
        next(err)
    }

}

const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    } catch (err) {
        err.statusCode = 400;
        err.message = "Employee does not exist's";
        next(err)
    }
}


const updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(updatedEmployee);
    } catch (err) {
        err.statusCode = 400;
        err.message = "Cannot update the current employee"
        next(err);
    }
}



const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted' });
    } catch (err) {
        err.statusCode = 400;
        err.message = "Cannot delete the current employee"
        next(err);
    }
}
module.exports = { getAllEmployees, createEmployee, getEmployeeById, updateEmployee, deleteEmployee }