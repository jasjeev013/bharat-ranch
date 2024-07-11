const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

// Create a new cart
router.post('/', async (req, res) => {
  try {
    const cart = new Cart(req.body);
    const savedCart = await cart.save();
    res.status(201).json(savedCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all carts
router.get('/', async (req, res) => {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read a specific cart
router.get('/:id', getCart, (req, res) => {
  res.json(res.cart);
});

// Update a cart
router.put('/:id', getCart, async (req, res) => {
  Object.assign(res.cart, req.body);

  try {
    const updatedCart = await res.cart.save();
    res.json(updatedCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a cart
router.delete('/:id', getCart, async (req, res) => {
  try {
    await res.cart.remove();
    res.json({ message: 'Deleted Cart' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get a cart by ID
async function getCart(req, res, next) {
  let cart;
  try {
    cart = await Cart.findById(req.params.id);
    if (cart == null) {
      return res.status(404).json({ message: 'Cannot find cart' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.cart = cart;
  next();
}

module.exports = router;
