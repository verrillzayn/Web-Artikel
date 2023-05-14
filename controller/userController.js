import connectToMongoDb from "lib/mongo";
import User from "models/userModel";
import { hash } from "bcryptjs";

export const getUser = async (req, res) => {
  try {
    await connectToMongoDb();

    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addUser = async (req, res) => {
  try {
    await connectToMongoDb();
    const user = await User.create(req.body);
    res.json({ user });
  } catch (err) {
    res.json({ err });
  }
};

export const register = async (req, res) => {
  try {
    await connectToMongoDb();
    const reqBody =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const {
      userName,
      firstName,
      lastName,
      pictureProfile,
      email,
      hashedPassword,
      role,
      signInWith,
    } = reqBody;

    // check request body
    if (!req.body)
      return res.status(404).json({ error: "Don't have Form Data" });

    // check duplicate user
    const checkExistingUser = await User.findOne({ email });
    if (checkExistingUser) {
      return res.status(422).json({ message: "User Already Exist..." });
    }

    const pw = hashedPassword ? await hash(hashedPassword, 12) : "";
    console.log(reqBody);

    User.create({
      userName,
      firstName,
      lastName,
      pictureProfile,
      email,
      hashedPassword: pw,
      role,
      signInWith,
    })
      .then((data) => {
        res.status(201).json({ status: true, user: data });
      })
      .catch((err) => {
        res.status(404).json({ msg: err });
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
