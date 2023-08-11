import expressAsyncHandler from "express-async-handler";
import { getAllEmployers } from "../helper/employerCRUD";
import ErrorResponse from "../error/errorResponse";

export const fetchEmployers = expressAsyncHandler(async (req, res) => {
  const employerDetails = await getAllEmployers();
    if(!employerDetails.length) throw ErrorResponse.notFound("No current employers")
    // const {dele} = employerDetails
  res.status(200).json({
    message: "Employer details fetched successfully",
    data: employerDetails,
  });
});
