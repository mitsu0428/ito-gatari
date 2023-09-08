import { randomUUID } from "crypto";

type UUID = string;

const generateUUID = (): UUID => {
  return randomUUID();
};

export default generateUUID;
