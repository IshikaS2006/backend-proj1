import express from 'express';
import { Router } from 'express';
import { isLoggedIn } from '../middlewares/isLoggedin.js';
const router = express.Router();

// Home page with login/register
router.get('/', (req, res) => {
    let errorMessages = req.flash("error");
    res.render('index', { errors: errorMessages });
});

// Shop page (protected)
router.get('/shop', isLoggedIn, (req, res) => {
  res.render('shop', { user: req.user });
});


export default router;