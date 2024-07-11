const express = require('express');
const router = express.Router();
const Commodity = require('../models/commodity');

// Create a new commodity
router.post('/', async (req, res) => {
  try {
    const commodity = new Commodity(req.body);
    const savedCommodity = await commodity.save();
    res.status(201).json(savedCommodity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all commodities
router.get('/', async (req, res) => {
  try {
    const commodities = await Commodity.find();
    res.json(commodities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read a specific commodity
router.get('/:id', getCommodity, (req, res) => {
  res.json(res.commodity);
});

// Update a commodity
router.put('/:id', getCommodity, async (req, res) => {
  Object.assign(res.commodity, req.body);

  try {
    const updatedCommodity = await res.commodity.save();
    res.json(updatedCommodity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a commodity
router.delete('/:id', getCommodity, async (req, res) => {
  try {
    await res.commodity.remove();
    res.json({ message: 'Deleted Commodity' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get a commodity by ID
async function getCommodity(req, res, next) {
  let commodity;
  try {
    commodity = await Commodity.findById(req.params.id);
    if (commodity == null) {
      return res.status(404).json({ message: 'Cannot find commodity' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.commodity = commodity;
  next();
}

module.exports = router;
