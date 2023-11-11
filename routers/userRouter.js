const express = require('express');
const userRouter = express.Router();
const auth = require("../middleware/auth");

const { welcome,registration,login } = require('../controllers/userController');


userRouter.get('/welcome',auth,welcome);
userRouter.post('/registration',registration);
userRouter.post('/login',login);


module.exports = userRouter;