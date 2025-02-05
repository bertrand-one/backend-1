const session = require('express-session');

const sessionSecret = process.env.SESSION_SECRET || 'a_very_strong_secret_key'; // Store securely!

const authMiddleware = session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false, // Adjust as needed
  cookie: { secure: false }, // Set to true in production if using HTTPS
});

const requireAuth = (req, res, next) => {
  if (req.session.userId) { // Check if user is logged in
    next(); // Proceed to the next middleware/route handler
  } else {
    res.status(401).json({ message: 'Unauthorized' }); // Or redirect to login
  }
};

module.exports = { authMiddleware, requireAuth };