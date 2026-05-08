import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

type Claims = {
  sub: string;
  email: string;
  role: string;
  iss: string;
  aud: string | string[];
  exp: number;
};

export const validateJwtFromRequest = (request: Request): Claims => {
  const auth = request.headers.get("authorization");
  if (!auth || !auth.startsWith("Bearer ")) {
    throw new Error("Missing bearer token");
  }

  const token = auth.slice("Bearer ".length);

  const decoded = jwt.verify(token, JWT_SECRET, {
    issuer: "uniportal",
    audience: "uniportal-clients",
  }) as Claims;

  return decoded;
};
