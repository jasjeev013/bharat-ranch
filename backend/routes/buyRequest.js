const express = require('express');
const router = express.Router();
const BuyRequest = require('../models/BuyRequest');
const { auth, authorize } = require('../middleware/auth');
const Commodity = require('../models/Commodity');


// Create a new buy request
router.post('/',auth, async (req, res) => {
  try {
    const {commodity_id,quantity} = req.body;
    const buyRequest = new BuyRequest({user_email:req.user.email,commodity_id,quantity,status:'pending'});
    const savedBuyRequest = await buyRequest.save();
    res.status(201).json(savedBuyRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all buy requests for a specific user_id(Purchaser)
router.get('/email',auth, async (req, res) => {
  try {
    const buyRequests = await BuyRequest.find({user_email:req.user.email});
    res.status(200).json(buyRequests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read All Buy Requests for specific commodit's.user_email
router.get('/specific/email',auth,authorize('farmer') ,async (req, res) => {
  try {
    const userEmail = req.user.email;

    // Find commodities associated with the user_email
    const commodities = await Commodity.find({ user_email: userEmail });

    // Extract commodity IDs
    const commodityIds = commodities.map(commodity => commodity._id);

    // Find buy requests for the identified commodities
    const buyRequests = await BuyRequest.find({ commodity_id: { $in: commodityIds } }).populate('commodity_id');

    res.status(200).json(buyRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Read all buy requests for a commodity
router.get('/:id',auth,authorize('farmer') ,async (req, res) => {

  try {
    const commodity = await Commodity.findOne({user_email:req.user.email,_id:req.params.id})
    if(!commodity){
      return res.status(404).json({ message: 'Commodity not found' });
    }
    const buyRequest = await BuyRequest.find({commodity_id: req.params.id});  
    res.status(200).json(buyRequest); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// Update a buy request
router.put('/:id',auth, async (req, res) => {
  const { status } = req.body;
  if (status == null) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  try {
    const buyRequest = await BuyRequest.findOne({_id:req.params.id});
    if(!buyRequest){
      return res.status(404).json({ message: 'Buy Request not found' });
    }
    const commodity = await Commodity.findOne({user_email:req.user.email,_id:buyRequest.commodity_id});
    if(!commodity){
      return res.status(404).json({ message: 'Commodity not found' });
    }
    const updatedBuyRequest = await BuyRequest.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json(updatedBuyRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a buy request
router.delete('/:id',auth, async (req, res) => {
  try {
    const buyRequest = await BuyRequest.findOneAndDelete({commodity_id:req.params.id,user_email:req.user.email});
    if (buyRequest == null) {
      return res.status(404).json({ message: 'Cannot find Buy Request' });
    }
    res.status(200).json(buyRequest);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
