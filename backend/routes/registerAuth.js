const router = require('express').Router();
const userSchema = require('../models/userModel');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const checkUser = new userSchema({ email, password: hashedPassword });
        const savedUser = await checkUser.save();
        console.log(savedUser);
        res.status(200).json({
            message: 'User added successfully!!!',
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error while saving user',
            error: err.message,
        });
    }
});

module.exports = router;
