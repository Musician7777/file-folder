const {validationResult} = require('express-validator');
const userModel = require('../models/user.model');
const userService = require('../services/user.service');



module.exports.registerUser = async (req,res,next)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const {name ,email ,password} = req.body;
    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        name,
        email,
        password: hashedPassword
    });
    const token = user.generateAuthToken();

    res.status(201).json({token, user});

}

module.exports.loginUser = async (req,res,next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const {email ,password} = req.body;

    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({errors: [{msg: 'Invalid email or password'}]});
    }

    const isMatch = await user.comparePassword(password, user.password);

    if(!isMatch){
        return res.status(401).json({errors: [{msg: 'Invalid email or password'}]});
    }

    const token = user.generateAuthToken();

    res.status(200).json({token, user});
}