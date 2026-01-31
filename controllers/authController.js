import express from 'express';
import { Router } from 'express';
import { User } from '../models/user-model.js';
import bcrypt from 'bcrypt';
import generateToken from '../utils/generateToken.js';
const router = express.Router();


export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    let UserExists = await User.findOne({ email });
    if (UserExists) {
      req.flash("error", "User already exists");
      return res.redirect("/");
    }
    // Hash password using async/await
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create user in database using the model
    let user = await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber
    });
    
    const token = generateToken(user);
    res.cookie('token', token);
    res.redirect("/shop");  
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/");
  }
};
export const loginUser = async (req, res) => {
    try {   
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      req.flash("error", "Invalid email or password");
      return res.redirect("/");
    }   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      req.flash("error", "Invalid email or password");
      return res.redirect("/");
    }
    const token = generateToken(user);
    res.cookie('token', token);
    res.redirect("/shop");  
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/");
  }
};


export const logoutUser = (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
}
