const Itinerary = require('../model/itinerary');

exports.itinerary = async(req,res)=>{
  try{
    const { name, dates, destinations, activities, transportation_details, accommodation_details } = req.body;
    const user = req.user;
    console.log("the user is",user.user_id);

    const newItinerary = new Itinerary({
      name,
      dates,
      destinations,
      activities,
      transportation_details,
      accommodation_details,
      user: user.user_id,
    });
    
   const data = await newItinerary.save();
   if(data){
    return res.status(201).json({ message: 'Itinerary created successfully' });
   }
   else{
    return res.status(500).json({ message: 'Data is not insert' });
   }
  }catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal Server Error"});
  }
}


exports.getItineraryById = async(req,res)=>{
  try{
    const { id } = req.params;
    console.log("id",id);

    const itinerary = await Itinerary.findById(id);
    
   if(itinerary){
    return res.send({
      status:"success", 
      message: 'Itinerary data found',
      data: itinerary
  });
   }
   else{
    return res.send({
      status:"fail", 
      message: 'Data not found',
      data: {}
  });
   }
  }catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal Server Error"});
  }
}

exports.updateItineraryById = async(req,res)=>{
  try{
    const { id } = req.params;
    const updatedData = req.body;

    const itinerary = await Itinerary.findByIdAndUpdate(id,updatedData,{new:true});
    
   if(itinerary){
    return res.send({
      status:"success", 
      message: 'Itinerary data updated',
      data: itinerary
  });
   }
   else{
    return res.send({
      status:"fail", 
      message: 'Data not updated',
      data: {}
  });
   }
  }catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal Server Error"});
  }
}

exports.deleteItineraryById = async(req,res)=>{
  try{
    const { id } = req.params;
    console.log("id",id);

    const itinerary = await Itinerary.findByIdAndDelete(id);
    
   if(itinerary){
    return res.send({
      status:"success", 
      message: 'Itinerary data deleted',
      data: {}
  });
   }
   else{
    return res.send({
      status:"fail", 
      message: 'Data not deleted',
      data: {}
  });
   }
  }catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal Server Error"});
  }
}