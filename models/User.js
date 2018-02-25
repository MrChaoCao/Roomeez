const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  about: {
    type: String,
    default: ""
  },
  admin: {
    type: Boolean,
    default: false
  },
  dealbreakers: Object,
  email: {
    type: String,
    default: ""
  },
  facebookId: {
    type: String,
    required: [true, 'Must signup by logging in to Facebook']
  },
  group_id: {
    type: String,
    default: null
  },
  image_url: {
    type: String,
    default: ""
  },
  interests: Object,
  name: {
    type: String,
    required: [true, 'Must have a name']
  },
  past_roommates: {
    type: Array,
    default: null
  },
  thingsIDo: Object
});

module.exports = mongoose.model('User', userSchema);
