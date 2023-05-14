import { register } from "../../../../controller/userController.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    register(req, res);
  } else {
    res.json({ msg: "HTTP Method invalid, only POST method accepted.." });
  }
}
