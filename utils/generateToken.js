import jwt from 'jsonwebtoken';
import keys from '../config/keys.js';
const generateToken = (user) => {    
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined in environment variables');
    }
    return jwt.sign(
        { id: user._id, email: user.email }, keys.JWT_SECRET
    ); 
};

export default generateToken;

