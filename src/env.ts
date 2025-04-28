import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();

const schema = z.object({
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
  PORT: z.coerce.number().default(3333),
});

export const env = schema.parse(process.env);
