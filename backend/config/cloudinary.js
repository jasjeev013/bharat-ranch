const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'CLOUDNAME',
  api_key: 'CLOUDAPIKEY',
  api_secret: 'CLOUDAPISECRET'
});



module.exports = cloudinary;
