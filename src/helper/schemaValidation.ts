import * as yup from "yup";

const departmentOptions = ["hr", "tech", "product", "leadership"];

export const createEmployerSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name can not be empty")
    .test("isPerfectString", "Enter a valid name", (arg) =>
      /^[A-Za-z ]+$/.test(arg)
    ),
  title: yup.string().trim().required("Title is required"),
  department: yup
    .string()
    .trim()
    .required("Please select a department")
    .oneOf(departmentOptions),
  annualSalary: yup.number().required("Annual salary is required"),
});

export const updateEmployerSchema = yup.object().shape({
    title: yup.string().trim().required("Title is required"),
    department: yup
      .string()
      .trim()
      .required("Please select a department")
      .oneOf(departmentOptions),
    annualSalary: yup.number().required("Annual salary is required"),
  });
