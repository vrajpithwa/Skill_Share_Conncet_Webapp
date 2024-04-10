import express from 'express';
import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  createUser,
} 
from '../Controllers/productControllers.js';
const router = express.Router();
router.get('/get', getProducts);
router.post('/new', createProduct);
router.post('/user', createUser);
router.get('/product/:id', getProduct);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

export default router;
