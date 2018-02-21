const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  facebookId: String,
  name: String
});

module.exports = mongoose.model('User', userSchema);
