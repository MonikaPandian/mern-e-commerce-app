const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../utils/generateToken');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodeMailer = require('nodemailer');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email })
    if (userExist) {
        res.status(400)
        throw new Error('User Already Exists!!');
    }

    const user = await User.create({ name, email, password })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(404)
        throw new Error('User cannot be created')
    }
})

const authController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});

const forgotPassword = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email })

    if (!user) {
        res.status(400).send({ message: "Invalid Email" })
        return;
    }

    try {
        const secret = process.env.JWT_KEY + user.password
        const payload = {
            email: user.email,
            id: user._id
        }
        //User exist and now create a one time link valid for 15 minutes
        const token = jwt.sign(payload, secret, { expiresIn: '15m' });
        const link = `http://localhost:3000/reset-password/${user._id}/${token}`;
        var transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'panmonikmm@gmail.com',
                pass: process.env.EMAIL_APP_PASSWORD
            }
        });
        var mailOptions = {
            from: 'panmonikmm@gmail.com',
            to: `${user.email}`,
            subject: 'Password reset link from E-Shop spot application',
            html: `We have received your request for reset password. Click this link to reset your password.<br>
                  <a href = ${link}>Click Here</a><br>
                  <p>This link is valid for 15 minutes from your request initiation for password recovery.</p>`
        };

        await transporter.sendMail(mailOptions).then((response) => console.log(response)).catch((error) => console.log(error));
        res.send({ message: "Email sent successfully", id: user._id, token: token })
    }
    catch (error) {
        res.send({ status: "error", data: error })
    }
});

const resetPassword = asyncHandler(async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;

    //check if this id exist in database
    const user = await User.findById(id)

    if (!user) {
        res.status(400).send({ message: "User not exists!!" })
        return;
    }
    const secret = process.env.JWT_KEY + user.password;
    try {
        const verify = jwt.verify(token, secret)
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt)
        await User.findByIdAndUpdate({ _id: id }, { $set: { password: encryptedPassword } })
        res.send({ message: "Password updated" })
    }
    catch (error) {
        res.send({ message: "Something went wrong" })
    }
});

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error("User Not Found");
    }
});

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        user.name = req.body.name || req.name
        user.email = req.body.email || req.email
        if (req.body.password) {
            user.password = req.body.password
        }
        const updateUser = await user.save()
        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
            token: generateToken(updateUser._id),
        })
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

module.exports = { authController, getUserProfile, forgotPassword, resetPassword, registerUser, updateUserProfile }