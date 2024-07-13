const express = require('express');
const router = express.Router();
const Commodity = require('../models/commodity');
const { auth, authorize } = require('../middleware/auth');
const upload = require('../config/multer')

// Create a new commodity
router.post('/',auth,authorize('farmer'),upload.single('image') ,async (req, res) => {
  try {
    const {name,description,price,min_qty,total_qty} = req.body;
    const image = null;
    if(req.file){
      image = req.file.path;
    }
    const commodity = new Commodity({user_email:req.user.email,name,description,price,min_qty,total_qty,image});
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


// Read all commodities by specific user_email
router.get('/email/:email', async (req, res) => {
  try {
    
    const commodities = await Commodity.find({user_email:req.params.email});
    res.status(200).json(commodities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Read a specific commodity by ID
router.get('/:id',auth,authorize('farmer') , async (req, res) => {
  try {
    const commodity = await Commodity.findOne({_id: req.params.id,user_email:req.user.email});
    if (!commodity) {
      return res.status(404).json({ message: 'Commodity not found' });
    }
    res.status(200).json(commodity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

});

// Update a commodity
router.put('/:id',auth,authorize('farmer'),upload.single('image'), async (req, res) => {
  const {name,description,price,min_qty,total_qty} = req.body;
  const updatedCommodity = {};
  if (name) updatedCommodity.name = name;
  if (description) updatedCommodity.description = description;
  if (price) updatedCommodity.price = price;
  if (min_qty) updatedCommodity.min_qty = min_qty;
  if (total_qty) updatedCommodity.total_qty = total_qty;
  if(req.file) updatedCommodity.image = req.file.path;

  try {
    const commodity = await Commodity.findOne({_id: req.params.id,user_email:req.user.email});
    if (!commodity) {
      return res.status(404).json({ message: 'Commodity not found' });
    }
    const updatsCommodity = await Commodity.findOneAndUpdate({_id: req.params.id,user_email:req.user.email}, updatedCommodity, { new: true });
    res.status(200).json(updatsCommodity);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a commodity
router.delete('/:id',auth, async (req, res) => {
  try {
    const commodity = await Commodity.findOneAndDelete({_id: req.params.id,user_email:req.user.email});
    if (!commodity) {
      return res.status(404).json({ message: 'Commodity not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
