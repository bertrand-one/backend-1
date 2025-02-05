const multer = require('multer');
const path = require('path'); // Import path for file path manipulation

// Configure storage
const storage = multer.diskStorage({
  destination: './uploads', // Where to store the images
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Use original extension
  },
});

const upload = multer({ storage: storage }); // Create the multer instance

module.exports = upload;