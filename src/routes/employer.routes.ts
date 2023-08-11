import { Router } from "express";
import { createNewEmployer } from "../controller/createEmployer.controller";
import { validateBody } from "../middleware/validateBody";
import { createEmployerSchema, updateEmployerSchema } from "../helper/schemaValidation";
import { updateEmployer } from "../controller/updateEmployer.controller";
import { validate_id } from "../middleware/validateId";
import { fetchEmployers } from "../controller/getAllEmployer.controller";
import { deleteEmployer } from "../controller/deleteEmployer.controller";

const router = Router();

router
  .route("/:id?")
  .get(fetchEmployers)
  .post(validateBody(createEmployerSchema), createNewEmployer)
  .put(validate_id, validateBody(updateEmployerSchema), updateEmployer)
  .delete(validate_id, deleteEmployer)

export default router;
