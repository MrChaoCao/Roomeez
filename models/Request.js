const mongoose = require('mongoose');
const { Schema } = mongoose;

const requestSchema = new Schema({
  requester_user_id: Number,
  requested_user_id: Number,
  group_id: Number
});

module.exports = mongoose.model('Request', requestSchema);
