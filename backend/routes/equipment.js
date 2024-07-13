const express = require('express');
const router = express.Router();
const Equipment = require('../models/equipment');
const { auth, authorize } = require('../middleware/auth');
const upload = require('../config/multer')
 
// Create a new equipment
router.post('/',auth,authorize('farmer'),upload.single('image') , async (req, res) => {
  const {name,description,price,qty} = req.body;
  const image = null;
  if(req.file){
    image = req.file.path;
  }
  try {

    const equipment = new Equipment({user_email:req.user.email,name,description,price,qty,image});
    const savedEquipment = await equipment.save();
    res.status(201).json(savedEquipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all equipment
router.get('/',auth,authorize('farmer'), async (req, res) => {
  try {
    const equipment = await Equipment.find();
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read all equipment by lender
router.get('/email/:email',auth,authorize('farmer'), async (req, res) => {
  try {
    const equipment = await Equipment.find({user_email:req.user.email});
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read a specific equipment
router.get('/:id',auth,authorize('farmer'),  async (req, res) => {
  try {
    const equipment = await Equipment.findOne({_id:req.params.id,user_email:req.user.email});
    if(!equipment){
      return res.status(404).json({message:'Equipment not found'})
    }
    res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json({message:err});
  }
});

// Update equipment
router.put('/:id', auth,authorize('farmer'),upload.single('image') ,  async (req, res) => {
  const {name,description,price,qty} = req.body;
  const updatedEquipment = {};
  if (name) updatedEquipment.name = name;
  if (description) updatedEquipment.description = description;
  if (price) updatedEquipment.price
  if (qty) updatedEquipment.qty = qty;
  if(req.file) updatedEquipment.image = req.file.path;

  try {
    const equipment = await Equipment.findOne({_id:req.params.id,user_email:req.user.email});
    if (!equipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    const updatesEuip = await Equipment.findOneAndUpdate({_id:req.params.id,user_email:req.user.email}, updatedEquipment, { new: true });
    res.status(200).json(updatesEuip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete equipment
router.delete('/:id', auth,authorize('farmer'),  async (req, res) => {
  try {
    
    const equipment = await Equipment.findOneAndDelete({_id:req.params.id,user_email:req.user.email});
    if (!equipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    res.json({ message: 'Deleted Equipment' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
