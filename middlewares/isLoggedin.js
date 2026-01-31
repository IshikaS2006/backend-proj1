import jwt from 'jsonwebtoken';
import { User } from '../models/user-model.js';

export const isLoggedIn = async (req, res, next) => {
    if (!req.cookies || !req.cookies.token) {
        req.flash("error", "you need to login first");
        return res.redirect("/");
    }
    
    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id });

        if (!user) {
            req.flash("error", "you need to login first");
            return res.redirect("/");
        }
        req.user = user; // Attach user to request object
        next();
    } catch (error) {
        req.flash("error", "you need to login first");
        return res.redirect("/");
    }
};