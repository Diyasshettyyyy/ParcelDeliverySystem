const mongoose = require('mongoose');

// Define the Driver schema
const driverSchema = new mongoose.Schema({
  driverId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  vehicleNumber: {
    type: String,
    required: true
  },
  routeId: {
    type: String,
    default: null
  },
  locationName: {
    type: String,
    default: null
  },
  latitude: {
    type: Number,
    default: null
  },
  longitude: {
    type: Number,
    default: null
  }
}, {
  timestamps: true
});

// Create the Driver model
const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;