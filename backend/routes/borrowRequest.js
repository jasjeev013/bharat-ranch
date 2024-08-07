const express = require('express');
const router = express.Router();
const BorrowRequest = require('../models/BorrowRequest');
const { auth, authorize } = require('../middleware/auth');
const Equipment = require('../models/equipment');

// Create a new borrow request
router.post('/add',auth,authorize('farmer'), async (req, res) => {
  try {
    const {equipment_id,time_period,qty} = req.body;
    const borrowRequest = new BorrowRequest({equipment_id,user_email: req.user.email,time_period,status:'pending',qty});
    await borrowRequest.save();
    res.status(201).json({message:'Successfully Lended',result:true});
  } catch (err) {
    res.status(400).json({ message: err.message,result:true });
  }
});

// Read all borrow requests for specific borrower
router.get('/borrower',auth,authorize('farmer'), async (req, res) => {
  try {
    const borrowRequests = await BorrowRequest.find({user_email:req.user.email}).populate('equipment_id');
    res.status(200).json(borrowRequests);
    console.log(borrowRequests)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read All Borrow Requests for specific equpiment's .user_email
router.get('/specific/email',auth,authorize('farmer') ,async (req, res) => {
  try {
    const userEmail = req.user.email; 

    // Find commodities associated with the user_email
    const equipments = await Equipment.find({ user_email: userEmail });
    
    // Extract commodity IDs
    const equpitmentsIds = equipments.map(equipment => equipment._id);
    
    // Find buy requests for the identified commodities
    const borrowRequests = await BorrowRequest.find({ equipment_id: { $in: equpitmentsIds } }).populate('equipment_id');


    res.status(200).json(borrowRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Read a  request by equipment_id
router.get('/equipment/:id', auth,authorize('farmer'),async (req, res) => {
  try {
    const commodity = await Equipment.findOne({_id:req.params.id,user_email:req.user.email})
    if(!commodity){
      return res.status(404).json({ message: 'Commodity not found' });
    }
    const borrowRequest = await BorrowRequest.find({equipment_id:req.params.id})
    res.status(200).json(borrowRequest);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }

});

// Update a borrow request
router.put('/equipment/:id',auth,authorize('farmer'),  async (req, res) => {
  const {status} = req.body;
  try {
    const borrowRequest = await BorrowRequest.findOne({_id:req.params.id});
    if(!borrowRequest){
      return res.status(404).json({ message: 'Buy Request not found' });
    }
    const equipment = await Equipment.findOne({user_email:req.user.email,_id:borrowRequest.equipment_id});
    if(!equipment){
      return res.status(404).json({ message: 'Commodity not found' });
    }
    const updatedBorrowRequest = await BorrowRequest.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json(updatedBorrowRequest);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a borrow request
router.delete('/:id',auth,authorize('farmer'),  async (req, res) => {
  try {
    const borrowRequest = await BorrowRequest.findOneAndDelete({equipment_id:req.params.id});
    if (!borrowRequest) {
      return res.status(404).json({ message: 'Borrow Request not found' });
    }
    res.status(200).json({ message: 'Deleted Borrow Request' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
