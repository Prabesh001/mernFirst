import jwt from "jsonwebtoken";

const createToken = (payload) => {
  return jwt.sign(payload, "helloworld");
};

export { createToken };

export const verifyToken = (token) => {
  return jwt.verify(token, "helloworld");
};
