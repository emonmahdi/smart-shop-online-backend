import { generateToken } from "../../config/jwt";
import { User } from "../user/user.model";
import bcrypt from "bcrypt";

const registerUser = async (data) => {
  const userExists = await User.findOne({ email: data.email });

  if (userExists) throw new Error("User already exits");

  const user = await User.create(data);
  return user;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("User not found!");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Invalid Credentials");

  const token = generateToken({
    id: user._id,
    role: user.role,
  });

  return { user, token };
};

export const AuthService = {
  registerUser,
  loginUser,
};
