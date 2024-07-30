const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { check, validationResult } = require('express-validator');

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET;

// Register a new user (farmer or buyer)
router.post('/register', [
    check('name', 'Full name is required').isLength({ min: 3 }),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be 6 or more characters').isLength({ min: 5 }),
    check('contact', 'Enter a valid Contact number').isLength({ min: 8 }),
    check('description', 'Enter a valid description').isLength({ min: 10 }),
    check('address', 'Enter a valid Address').isLength({ min: 10 }),
    check('role', 'Role is required').isIn(['buyer', 'farmer'])
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(),result: false });
    }
    const { email, password, name, contact, description, address, role } = req.body;

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ errors: [{ message: 'User already exists', result: false }] });
        }

        // Create new user instance
        user = new User({ email, password, name, contact, description, address, role, image: null });

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
        res.status(200).send({ message: "User Created Successfully", result: true })

    } catch (err) {
        console.error(err.message);
        res.status(500).send({ message: 'Server error', result: false });
    }
});

// Login a user
router.post('/login', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Enter a valid Password').isLength({ min: 5 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(),result:false });
    }


    const { email, password } = req.body;
    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: [{ message: 'Invalid credentials', result: false }] });
        }
        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ message: 'Invalid credentials', result: false }] });
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

        res.cookie('token', token)

        console.log(req.cookies, 'DOne jii done');
        // res.setHeader('Authorization', `Bearer ${token}`);
        res.status(200).send({ message: 'Logined Successfully', result: true });


    }
    catch (err) {
        console.error(err.message);
        res.status(500).send({ message: 'Server error', result: false });
    }
});



module.exports = router;