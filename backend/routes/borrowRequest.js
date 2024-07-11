const express = require('express');
const router = express.Router();
const BorrowRequest = require('../models/borrowRequest');

// Create a new borrow request
router.post('/', async (req, res) => {
  try {
    const borrowRequest = new BorrowRequest(req.body);
    const savedBorrowRequest = await borrowRequest.save();
    res.status(201).json(savedBorrowRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all borrow requests
router.get('/', async (req, res) => {
  try {
    const borrowRequests = await BorrowRequest.find();
    res.json(borrowRequests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read a specific borrow request
router.get('/:id', getBorrowRequest, (req, res) => {
  res.json(res.borrowRequest);
});

// Update a borrow request
router.put('/:id', getBorrowRequest, async (req, res) => {
  Object.assign(res.borrowRequest, req.body);

  try {
    const updatedBorrowRequest = await res.borrowRequest.save();
    res.json(updatedBorrowRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a borrow request
router.delete('/:id', getBorrowRequest, async (req, res) => {
  try {
    await res.borrowRequest.remove();
    res.json({ message: 'Deleted Borrow Request' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get a borrow request by ID
async function getBorrowRequest(req, res, next) {
  let borrowRequest;
  try {
    borrowRequest = await BorrowRequest.findById(req.params.id);
    if (borrowRequest == null) {
      return res.status(404).json({ message: 'Cannot find borrow request' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.borrowRequest = borrowRequest;
  next();
}

module.exports = router;
