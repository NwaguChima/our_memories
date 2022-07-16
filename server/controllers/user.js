import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "../models/user";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      token,
      result: existingUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
