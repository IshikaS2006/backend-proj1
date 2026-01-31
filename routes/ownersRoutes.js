import express from 'express';
import { Router } from 'express';
import ownerModel from '../models/owner-model.js';
const router = express.Router();
router.post('/create', async function (req, res) {
  let owner = await ownerModel.find();
  if (owner.length >0) { 
    return res.status(400).send('Owner already exists');
  }
  let {name, email, password} = req.body;
  let createdOwner = await ownerModel.create(
    {
      name,
      email,
      password,
    });
  res.status(201).json(createdOwner);
})
router.get('/admin', (req, res) => {
  res.render('createproducts');
});

export default router;