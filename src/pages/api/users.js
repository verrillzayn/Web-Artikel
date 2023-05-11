import { getUser, addUser } from "../../../controller/userController.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    addUser(req, res);
  } else if (req.method === "GET") {
    getUser(req, res);
  }
}
