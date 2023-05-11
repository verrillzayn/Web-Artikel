import connectToMongoDb from "lib/mongo";
import User from "models/userModel";

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
