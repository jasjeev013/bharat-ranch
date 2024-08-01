const express = require('express');
const router = express.Router();
const Commodity = require('../models/Commodity');
const { auth, authorize } = require('../middleware/auth');
const upload = require('../config/multer')
const { check, validationResult } = require('express-validator');


// Create a new commodity
router.post('/',auth,authorize('farmer'),upload.single('image'),[
  check('name', 'Name is required').not().isEmpty(),
  check('description', 'Description is required').not().isEmpty(),
  check('price', 'Price is required').not().isEmpty(),
  check('min_qty', 'Minimum Quantity is required').not().isEmpty(),
  check('total_qty', 'Total Quantity is required').not().isEmpty(),
  check('category', 'Category is required').not().isEmpty(), 
] ,async (req, res) => {

  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(),result: false });
    }
  try {
    const {name,description,price,min_qty,total_qty,category} = req.body;
    let image = null;
    if(req.file){
      image = req.file.path;
    }
    const commodity = new Commodity({user_email:req.user.email,name,description,price,min_qty,total_qty,image,category});
    await commodity.save();
    res.status(200).json({message:'COmmodity added successfully',result:true});
  } catch (err) {
    res.status(400).json({ message: err.message,result:false });
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
router.get('/:id' , async (req, res) => {
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
  const {name,description,price,min_qty,total_qty,category} = req.body;
  const updatedCommodity = {};
  if (name) updatedCommodity.name = name;
  if (description) updatedCommodity.description = description;
  if (price) updatedCommodity.price = price;
  if (min_qty) updatedCommodity.min_qty = min_qty;
  if (total_qty) updatedCommodity.total_qty = total_qty;
  if(req.file) updatedCommodity.image = req.file.path;
  if (category) updatedCommodity.category = category;
  

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


// Route to get all distinct categories with a count and a distinct image for each category
router.get('/categories/find', async (req, res) => {
  try {
    const categories = await Commodity.aggregate([
      // { $unwind: '$categories' }, // Unwind the categories array
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }, // Count each occurrence of the category
          image: { $first: '$image' } // Get the first image associated with the category
        }
      },
      {
        $project: {
          category: '$_id',
          count: 1,
          image: 1,
          _id: 0
        }
      }
    ]);

    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get all commodities by a specific category
router.get('/category/find', async (req, res) => {
  try {
    const { category } = req.query;
    if (!category) {
      return res.status(400).json({ error: 'Category is required' });
    }

    const commodities = await Commodity.find({ category: category });
    res.json(commodities);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
