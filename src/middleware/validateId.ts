import { RequestHandler } from "express";
import validator from 'validator';
import ErrorResponse from "../error/errorResponse";

// Validate MongoDB ID in Params
export const validate_id: RequestHandler = (req, res, next) => {
  if (!req.params.id || !validator.isMongoId(req.params.id)) throw ErrorResponse.badRequest('invalid id')
  next();
};