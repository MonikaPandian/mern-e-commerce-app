const express = require('express');
const { authController, getUserProfile, registerUser, updateUserProfile, forgotPassword, resetPassword } = require('../controllers/usersController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

//user registration
router.route('/register').post(registerUser);

//post email and password auth
router.post('/login', authController);

//forgot-password
router.post('/forgot-password', forgotPassword);

//reset-password
router.post('/reset-password/:id/:token', resetPassword);

//get user profile private route
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

module.exports = router;