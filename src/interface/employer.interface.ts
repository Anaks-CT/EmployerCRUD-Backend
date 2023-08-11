export interface IEmployer {
    name: string;
    title: string;
    annualSalary: number;
    department: "hr" | "tech" | "product" | "leadership";
    deleted?: boolean
}

export interface IUpdateEmployer {
  title: string;
  annualSalary: number;
  department: "hr" | "tech" | "product" | "leadership";
}