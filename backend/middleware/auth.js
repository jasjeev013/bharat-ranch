const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'bharatRanchisthebest';

function auth(req, res, next) {
  console.log(req)
  // const token = req.header('access_token');
  const token = req.cookies.token;
  // const authHeader = req.headers['authorization'];
  // const token = authHeader.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  } 

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    console.log(req.user)
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}

function authorize(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ msg: 'Access denied' });
    }
    next();
  };
}

module.exports = { auth, authorize };