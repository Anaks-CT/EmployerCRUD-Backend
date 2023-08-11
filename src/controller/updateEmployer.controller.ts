import expressAsyncHandler from "express-async-handler";
import ErrorResponse from "../error/errorResponse";
import { findEmployerById, updateEmployer as updateEmployee } from "../helper/employerCRUD";


export const updateEmployer = expressAsyncHandler(async (req, res) => {

    const {id} = req.params
    const {title, annualSalary, department} = req.body

    // checking if the employer exist in the database
    const employerDetails = await findEmployerById(id)
    
    // throwing an error if the employer is not found in the database
    if(!employerDetails) throw ErrorResponse.notFound(`Employer not found`)

    // updating new employer
    const updatedDetails = await updateEmployee(id, {title, annualSalary, department})
    
    // throwing error if the updated details is empty
    if(!updatedDetails) throw ErrorResponse.internalError("Employer not updated !!")

    // returning the data back the client
    res.status(200).json({message: "Employer updated successfully", data: updatedDetails})
  });


