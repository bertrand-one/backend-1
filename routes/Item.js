const express = require('express');
const router = express.Router();
const { authMiddleware, requireAuth } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const {
  notification,
  postFoundItem,
  postLostItem,
  getFoundItem,
  getLostItem,
  updateItemStatus,
  updateFoundItem,  // Corrected name for consistency
  deleteFoundItem,
} = require('../controllers/itemController'); // Assuming your controller is named itemController.js


// Use the authMiddleware for all routes that require authentication
router.use(authMiddleware);


// Notification Routes (adjust as needed)
router.get('/notifications', notification); // Example: Get notifications

// Found Item Routes
router.post('/found', requireAuth, upload.single('image'), postFoundItem); 
router.get('/found', requireAuth, getFoundItem);
router.put('/found/:id', requireAuth, updateFoundItem); // Use PUT for updates, include item ID in URL
router.delete('/found/:id', requireAuth, deleteFoundItem); // Include item ID for deletion

// Lost Item Routes
router.post('/lost', requireAuth, postLostItem);
router.get('/lost', requireAuth, getLostItem);

// General Item Routes (for status updates, if applicable)
router.patch('/items/:id/status', requireAuth, updateItemStatus); // PATCH is often used for partial updates

module.exports = router;