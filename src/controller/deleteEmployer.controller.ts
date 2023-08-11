import expressAsyncHandler from "express-async-handler";
import ErrorResponse from "../error/errorResponse";
import { deleteEmployer as deleteEmployee, findEmployerById, updateEmployer as updateEmployee } from "../helper/employerCRUD";


export const deleteEmployer = expressAsyncHandler(async (req, res) => {

    const {id} = req.params

    // checking if the employer exist in the database
    const employerDetails = await findEmployerById(id)
    
    // throwing an error if the employer is not found in the database
    if(!employerDetails) throw ErrorResponse.notFound(`Employer not found`)

    // deleting employer
    await deleteEmployee(id)
    
    // returning the data back the client
    res.status(200).json({message: "Employer deleted successfully"})
  });


