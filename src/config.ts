import dotenv from "dotenv";

dotenv.config();

const requiredVars = [
  "PG_HOST",
  "PG_USER",
  "PG_PASSWORD",
  "PG_DATABASE",
  "PG_PORT"
];

requiredVars.forEach((key) => {
  if (!process.env[key]) {
    console.error(`Missing environment variable: ${key}`);
    throw new Error(`Environment variable ${key} is not defined`);
  }
});

export const config = {
  host: process.env.PG_HOST as string,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER as string,
  password: process.env.PG_PASSWORD as string,
  database: process.env.PG_DATABASE as string,
};
