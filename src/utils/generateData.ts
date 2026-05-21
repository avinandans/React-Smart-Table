import { faker } from "@faker-js/faker";

export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  quantity: number;
  status: "Active" | "Inactive";
}

const Departments = ["Engineering", "Marketing", "HR", "Finance", "Sales"];

export function generateData(count: number = 10000): Employee[] {
  return Array.from({ length: count }, (_, index) => {
    return {
      id: index + 1,

      name: faker.person.fullName(),

      email: faker.internet.email(),

      department: Departments[Math.floor(Math.random() * Departments.length)],

      salary: faker.number.int({
        min: 30000,
        max: 150000,
      }),

      quantity: faker.number.int({
        min: 1,
        max: 100,
      }),

      status: Math.random() > 0.5 ? "Active" : "Inactive",
    };
  });
}
