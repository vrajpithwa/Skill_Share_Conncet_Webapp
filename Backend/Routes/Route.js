import express from 'express';
import {
  getProduct,
  updateProduct,
  deleteProduct,
  createUser,
  getPosts,
  getUserCredentials,
} 
from '../Controllers/Controllers.js';
const router = express.Router();
router.get('/auth', getUserCredentials);
router.get('/posts', getPosts);
router.post('/user', createUser);
router.get('/product/:id', getProduct);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

export default router;
