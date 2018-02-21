const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  about: String,
  admin: Boolean,
  dealbreakers: Object,
  email: String,
  facebookId: String,
  group_id: Number,
  image_url: String,
  interests: Object,
  name: String,
  past_roommates: Array,
  thingsIDo: Object
});

module.exports = mongoose.model('User', userSchema);
