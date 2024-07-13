const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user'); // Adjust the path as necessary
const { auth, authorize } = require('../middleware/auth');

// Read all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/*// Get a specific user by Id                     Will Not work as Payload Contains Email Not Id
router.get('/',auth,async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(500).send('Server error');
  }
});*/

// Get a specific user by email
router.get('/email/:email',auth,async (req, res) => {
  try {

    if(req.user.email!=req.params.email){
      return res.status(500).send("User with this email not found")
    }

    const user = await User.findOne({email:req.user.email}).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found',email });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'User not found'});
    }
    res.status(500).send('Server error');
  }
});

// Update a user by email
router.put('/:email', auth,async (req, res) => {
  const {  name, contact, description, address} = req.body;
  const updatedUser = {};
  if (name) updatedUser.name = name;
  if (contact) updatedUser.contact = contact;
  if (description) updatedUser.description = description;
  if (address) updatedUser.address = address;
  try {

    const updateUser = await User.findOneAndUpdate(
      {email: req.user.email},
      { $set: updatedUser },
      { new: true }
    ).select('-password');
    res.json(updateUser);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(500).send('Server error');
  }
});

// Delete a user
router.delete('/:email', auth,async (req, res) => {
  try {

    if(req.user.email!=req.params.email){
      return res.status(500).send("User with this email not found")
    }
    
    await User.findOneAndDelete({email : req.user.email});
    res.json({ message: 'Deleted User' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'User not found'});
    }
    res.status(500).send('Server error');
  }
});

module.exports = router;
