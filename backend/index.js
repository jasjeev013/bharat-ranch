const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors');
require('dotenv').config()

const app = express();

app.use(cors({
  origin: [process.env.FRONTEND_URL], // List of allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true // Allow cookies to be sent and received
}))

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());


// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bharatRanch')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


// Import routes
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js');
const commodityRoutes = require('./routes/commodity.js');
const equipmentRoutes = require('./routes/equipment.js');
const cartRoutes = require('./routes/cart.js');
const buyRequestRoutes = require('./routes/buyRequest.js');
const borrowRequestRoutes = require('./routes/borrowRequest.js');

// Use routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/commodities', commodityRoutes);
app.use('/equipments', equipmentRoutes);
app.use('/cart', cartRoutes);
app.use('/buy-requests', buyRequestRoutes);
app.use('/borrow-requests', borrowRequestRoutes);

app.get('/', (req, res) => {
  res.json({"message":"The APi is working"});
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
