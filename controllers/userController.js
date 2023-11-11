const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/user');
const Itinerary = require('../model/itinerary');

exports.welcome = async(req,res)=>{
  try{
    res.status(200).send("Welcome");
  }
  catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal Server error"});
  }
}
exports.registration = async(req,res)=>{
  try{
    const { first_name, last_name, email, password } = req.body;

    if (!(email && password && first_name && last_name)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    user.token = token;

    res.status(201).json(user);

  }catch(error){
    console.log(error);
    return res.statu(500).json({message:"Internal Server Error"});
  }
}

exports.login=async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const user = await User.findOne({ email });

    if (user && (bcrypt.compare(password, user.password))) {

      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }

}


exports.getUserItineraries = async(req,res)=>{
  try{
    const { id } = req.params;
    console.log("id",id);

    const itinerary = await Itinerary.find({user:id}).populate("user",{ strictPopulate: false })
    if (!itinerary) {
      console.log("User not found.");
      return res.send({
        status: "fail",
        message: "User not found.",
        data: {},
      });
    }

    console.log(`Itinerary: ${itinerary}`);

    return res.send({
      status: "success",
      message: "User's itineraries retrieved successfully.",
      data: itinerary,
    });
    
  //  if(itinerary){
  //   return res.send({
  //     status:"success", 
  //     message: 'Itinerary created successfully',
  //     data: itinerary
  // });
  //  }
  //  else{
  //   return res.send({
  //     status:"fail", 
  //     message: 'Data not found',
  //     data: {}
  // });
  //  }
  }catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal Server Error"});
  }
}