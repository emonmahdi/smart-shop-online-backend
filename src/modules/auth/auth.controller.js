import { AuthService } from "./auth.service.js";

const register = async (req, res) => {
  try {
    const user = req.body;
    const result = await AuthService.registerUser(user);

    res.status(200).json({
      success: true,
      message: "User Created Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.loginUser(email, password);

    res.status(200).json({
      success: true,
      message: "User Created Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const AuthController = {
  register,
  login,
};
