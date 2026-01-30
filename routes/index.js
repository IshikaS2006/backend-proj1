import express from 'express';
import { Router } from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('welcome to my index-router world darling');
});

export default router;