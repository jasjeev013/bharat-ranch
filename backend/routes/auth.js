const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'bharatRanchisthebest';

// Register a new user (farmer or buyer)
router.post('/register', async (req, res) => {

    const { email, password, name, contact, description, address, role } = req.body;

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        // Create new user instance
        user = new User({ email, password, name, contact, description, address, role });

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        // Generate JWT
        /*const payload = {
            user: {
                email: user.email,
                role: user.role
            }
        };

        jwt.sign(
            payload,
            JWT_SECRET,
            { expiresIn: '24h' },
            (err, token) => {
                if (err) throw err;
                res.json({message: "User Created Successfully" });
            }
        );*/
        res.send({message:"User Created Successfully"})

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }
        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }
        // Generate JWT
        const payload = {
            user: {
                email: user.email,
                role: user.role
            }
        };
        const token = jwt.sign(
            payload,
            JWT_SECRET,
            { expiresIn: '24h' });

        /*res.cookie('token',token,{
            httpOnly:true,
            secure:true,
            sameSite:'none'
        })*/

        // res.setHeader('Authorization', `Bearer ${token}`);


        res.status(200).send({
            role: user.role,
            token: token
          });
   

    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});



module.exports = router;