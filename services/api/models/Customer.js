const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

// Create Schema
const CustomerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  ip: {
    type: String,
    trim: true
  },
  latitude: {
    type: Number,
    trim: true
  },
  longitude: {
    type: Number,
    trim: true
  }
});

CustomerSchema.plugin(timestamp);
module.exports = Item = mongoose.model('customer', CustomerSchema);
