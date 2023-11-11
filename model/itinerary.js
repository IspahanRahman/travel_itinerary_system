const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  dates: {
    type: [Date],
    required: true,
    validate: {
      validator: function (datesArray) {
        return datesArray.length === 2;
      },
      message: 'Dates array must contain exactly two dates.',
    },
  },
  destinations: [{ city: String, country: String }],
  activities: [{ name: String, description: String }],
  transportation_details: [{
    type: { type: String, required: true },
    details: String,
  }],
  accommodation_details: [{ name: String, address: String, bookingConfirmation: String }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model("Itinerary", itinerarySchema);