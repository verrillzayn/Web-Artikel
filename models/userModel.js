import mongoose, { model, models } from "mongoose";

const userModel = mongoose.Schema({
  userName: {
    type: "String",
    required: true,
  },
  firstName: {
    type: "String",
  },
  lastName: {
    type: "String",
  },
  pictureProfile: {
    type: "String",
  },
  email: {
    type: "String",
    required: true,
  },
  hashedPassword: {
    type: "String",
  },
  role: {
    type: "String",
  },
  signInWith: {
    type: "String",
    required: true,
  },
  dateCreated: {
    type: "Date",
    default: Date.now,
  },
});

const User = models.User || model("User", userModel);

export default User;
