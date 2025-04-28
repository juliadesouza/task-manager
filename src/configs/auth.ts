import { env } from "@/env";

export const authConfig = {
  jwtSecret: env.JWT_SECRET,
  expiresIn: 60 * 60 * 24,
};
