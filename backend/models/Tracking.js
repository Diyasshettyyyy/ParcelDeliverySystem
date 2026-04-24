const mongoose = require('mongoose');

// Define the Tracking schema
const trackingSchema = new mongoose.Schema({
  parcelId: {
    type: String,
    required: true
  },
  driverId: {
    type: String,
    required: true
  },
  locationName: {
    type: String,
    default: null
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create the Tracking model
const Tracking = mongoose.model('Tracking', trackingSchema);

module.exports = Tracking;