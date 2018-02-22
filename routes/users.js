const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectID;

const User = mongoose.model('User');

// const checkAuth = require('../middleware/check-auth');

// const UsersController = require('../controllers/users');


console.log("2: user routes");

router.get('/:userId', function(req, res) {
  // res.send("WIP");
  // res.json({userId: req.params.userId});

  // User.findOne({_id: "Gary"}).then(user1 => {
  //   console.log("----------------------");
  //   console.log(user1);
  //   console.log("Reading...");
  //   res.send(user1.name);
  // });
  // "_id": {
  //       "$oid": "5a8da9f7891c97d407b759f8"
  //   },
  //   "facebookId": "1882678195375668",
  //   "name": "M Adrian Horning",
  // let query = {
  //   _id: req.params.userId
  // };

  console.log(req.params.userId);

  // let query = {
  //   _id: ObjectId(req.params.userId)
  // };
  //
  // console.log(query);

  User.create({ facebookId: "123", name: "junk" });

  // User.findOne({name: "M Adrian Horning"}, function(err, user) {
  //   console.log(user);
  //   console.log(err);
  //   // res.json(user);
  // });

  // User.findById(req.params.userId).exec(function(err, user) {
  //   console.log(user);
  //   console.log(err);
  //   // res.json(user);
  // });
});

router.get('', function(req, res) {
  res.send("We haven't finished this part yet.");
});

router.post('', function(req, res) {
  console.log("<<<PARAMS>>>");
  console.log(req.body);
  console.log(req.params);
  // res.json(req);
  // res.send("We haven't finished this part yet.");
  User.findOne({name: "Gary"}).then(user1 => {
    // console.log("----------------------");
    // console.log(user1);
    // console.log("Reading...");
  });
});

// router.get("/api/users", function(){console.log("MW");}, UsersController.get_all_based_on_match);

// Handle incoming GET requests to /users
// router.get("/api/users/:userId", UsersController.get_user);
// router.get("/api/users", function(){console.log("MW");}, UsersController.get_all_based_on_match);
// router.post("/api/users", UsersController.create_user);
// router.patch("/api/users/:userId", UsersController.update_user);
// router.delete("/api/users/:userId", UsersController.delete_user);

// router.post("/", checkAuth, UsersController.users_create_user);

module.exports = router;
