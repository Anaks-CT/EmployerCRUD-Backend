import { Schema, model } from "mongoose";
import { IEmployer } from "../interface/employer.interface";

const employerModel = new Schema<IEmployer>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    annualSalary: {
      type: Number,
      required: [true, "Annual Salary is required"],
    },
    department: {
      type: String,
      required: [true, "Department is required"],
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model<IEmployer>("employer", employerModel);
