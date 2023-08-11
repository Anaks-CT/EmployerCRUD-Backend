import expressAsyncHandler from "express-async-handler";
import { createEmployer, findEmployerByName } from "../helper/employerCRUD";
import ErrorResponse from "../error/errorResponse";


export const createNewEmployer = expressAsyncHandler(async (req, res) => {

    const {name, title, annualSalary, department} = req.body
    // checking if the employer exist with the same name in the database
    const employerDetails = await findEmployerByName(name)
    
    // throwing an error if a employer exist with the same name
    if(employerDetails) throw ErrorResponse.badRequest(`Employer with the name ${name} is taken`)

    // making new employer
    const newEmployerDetails = await createEmployer({name, title, annualSalary, department})

    // returning the data back the client
    res.status(201).json({message: "New employer created successfully", data: newEmployerDetails})
  });


