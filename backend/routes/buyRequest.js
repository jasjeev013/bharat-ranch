const express = require('express');
const router = express.Router();
const BuyRequest = require('../models/buyRequest');

// Create a new buy request
router.post('/', async (req, res) => {
  try {
    const buyRequest = new BuyRequest(req.body);
    const savedBuyRequest = await buyRequest.save();
    res.status(201).json(savedBuyRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all buy requests
router.get('/', async (req, res) => {
  try {
    const buyRequests = await BuyRequest.find();
    res.json(buyRequests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read a specific buy request
router.get('/:id', getBuyRequest, (req, res) => {
  res.json(res.buyRequest);
});

// Update a buy request
router.put('/:id', getBuyRequest, async (req, res) => {
  Object.assign(res.buyRequest, req.body);

  try {
    const updatedBuyRequest = await res.buyRequest.save();
    res.json(updatedBuyRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a buy request
router.delete('/:id', getBuyRequest, async (req, res) => {
  try {
    await res.buyRequest.remove();
    res.json({ message: 'Deleted Buy Request' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get a buy request by ID
async function getBuyRequest(req, res, next) {
  let buyRequest;
  try {
    buyRequest = await BuyRequest.findById(req.params.id);
    if (buyRequest == null) {
      return res.status(404).json({ message: 'Cannot find buy request' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.buyRequest = buyRequest;
  next();
}

module.exports = router;
