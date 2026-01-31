import express from 'express';
import { registerUser , loginUser, logoutUser} from '../controllers/authController.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('welcome to my users router world darling');
});
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);

export default router;