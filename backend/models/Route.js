const mongoose = require('mongoose');

// Define the Route schema
const routeSchema = new mongoose.Schema({
  routeId: {
    type: String,
    required: true,
    unique: true
  },
  startLocation: {
    type: String,
    required: true
  },
  endLocation: {
    type: String,
    required: true
  },
  stops: [{
    type: String // Array of stop locations
  }]
}, {
  timestamps: true
});

// Create the Route model
const Route = mongoose.model('Route', routeSchema);

module.exports = Route;