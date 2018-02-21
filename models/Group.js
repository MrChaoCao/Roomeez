const mongoose = require('mongoose');
const { Schema } = mongoose;

const groupSchema = new Schema({
  admin_user_id: Number,
  image_url: String,
  members: Array,
  name: String
});

module.exports = mongoose.model('Group', groupSchema);
