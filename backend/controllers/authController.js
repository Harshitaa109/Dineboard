const User = require("../models/User");
const jwt = require("jsonwebtoken");

// 🔐 Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// ✅ Register New User
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // ❌ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // ✅ Create new user
    const user = await User.create({ name, email, password });

    // ✅ Generate token
    const token = generateToken(user._id);

    // ✅ Send user info + token
    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
};

// ✅ Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 🔍 Find user by email
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    // 🔐 Check password match (bcrypt)
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    // ✅ Generate token
    const token = generateToken(user._id);

    // ✅ Respond with token and user info
    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
};
