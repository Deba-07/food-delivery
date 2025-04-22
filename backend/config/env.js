import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const{
  DB_URI,
  JWT_SECRET,
  STRIPE_SECRET_KEY,
} = process.env;