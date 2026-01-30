import express from 'express';
import { Router } from 'express';
import { User } from '../models/user-model.js';
import bcrypt from 'bcrypt';
import generateToken from '../utils/generateToken.js';
const router = express.Router();


export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let UserExists = await User.findOne({ email });
    if (UserExists) {
      return  res.status(400).json({ message: "User already exists" });
    }
    // Hash password using async/await
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create user in database using the model
    let user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    
    const token = generateToken(user);
    res.cookie('token', token);
    res.send("User registered successfully");  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const loginUser = async (req, res) => {
    try {   
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = generateToken(user);
    res.cookie('token', token);
    res.send("User logged in successfully");  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};