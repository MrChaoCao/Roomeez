const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectID;

const User = mongoose.model('User');

// const checkAuth = require('../middleware/check-auth');

router.get('/:userName', function(req, res) {
  User.find({ "name": req.params.userName }).then(
    (users, err) => {
      if (users.length !== 0) {
        res.json(users);
      } else {
        res.status(404).send("No users with the exact queried name.");
      }
    }
  );
});

module.exports = router;
