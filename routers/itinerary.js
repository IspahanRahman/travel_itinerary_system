const express = require('express');
const itineraryRouter = express.Router();
const auth = require("../middleware/auth");

const { itinerary,getItineraryById,deleteItineraryById,updateItineraryById } = require('../controllers/itineraryController');



itineraryRouter.post('/itinerary',auth,itinerary);
itineraryRouter.get('/getItineraryById/:id',auth,getItineraryById);
itineraryRouter.delete('/deleteItineraryById/:id',auth,deleteItineraryById);
itineraryRouter.put('/updateItineraryById/:id',auth,updateItineraryById);


module.exports = itineraryRouter;