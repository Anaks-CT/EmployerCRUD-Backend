import { IEmployer, IUpdateEmployer } from "../interface/employer.interface";
import employerModel from "../model/employer.model";

export async function createEmployer(employer: IEmployer) {
  const createdEmployerDetails = new employerModel(employer);
  await createdEmployerDetails.save();
  return createdEmployerDetails;
}

export async function updateEmployer(id: string, employer: IUpdateEmployer) {
  const { title, department, annualSalary } = employer;
  return await employerModel.findByIdAndUpdate(
    id,
    {
      $set: {
        title,
        department,
        annualSalary,
      },
    },
    { new: true }
  ).select('-deleted');
}

export async function deleteEmployer(id: string) {
  await employerModel.findByIdAndUpdate(id, { $set: { deleted: true } });
}

export async function findEmployerByName(name: string) {
  return await employerModel.findOne({ name }).select('-deleted');
}

export async function findEmployerById(id: string) {
  return await employerModel.findOne({ _id: id, deleted: false }).select('-deleted');
}

export async function getAllEmployers() {
  return await employerModel.find({ deleted: false }).select('-deleted');
}
