const express = require('express');
const router = express.Router();
const Equipment = require('../models/equipment');

// Create a new equipment
router.post('/', async (req, res) => {
  try {
    const equipment = new Equipment(req.body);
    const savedEquipment = await equipment.save();
    res.status(201).json(savedEquipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all equipment
router.get('/', async (req, res) => {
  try {
    const equipment = await Equipment.find();
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read a specific equipment
router.get('/:id', getEquipment, (req, res) => {
  res.json(res.equipment);
});

// Update equipment
router.put('/:id', getEquipment, async (req, res) => {
  Object.assign(res.equipment, req.body);

  try {
    const updatedEquipment = await res.equipment.save();
    res.json(updatedEquipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete equipment
router.delete('/:id', getEquipment, async (req, res) => {
  try {
    await res.equipment.remove();
    res.json({ message: 'Deleted Equipment' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get equipment by ID
async function getEquipment(req, res, next) {
  let equipment;
  try {
    equipment = await Equipment.findById(req.params.id);
    if (equipment == null) {
      return res.status(404).json({ message: 'Cannot find equipment' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.equipment = equipment;
  next();
}

module.exports = router;
