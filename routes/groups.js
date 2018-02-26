const express = require('express');
const mongoose = require('mongoose');
// const router = express.Router();
const Group = require('../models/Group');
// const GroupsController = require('../controllers/GroupsController');
// const User = mongoose.model('User');

// const checkAuth = require(‘../middleware/check-auth’);

// const GroupsController = require(‘../controllers/groups’);
module.export = app => {

app.get('/:groupId', function(req, res) {
  console.log(req.params);
  console.log(req.user);
  Group.findById(req.params.groupId, (err, group) => {
    if (err) {
      return res.status(404).send("Not found");
    } else {
      // do group logic
      return res.send(group);
    }
  });
});

// need to get all based on match
app.get('', function(req, res) {
  Group.find().exec((err, groups) => {
    if (err) {
      return res.status(404).send("Not found");
    } else {
      let newObj = {};
      groups.forEach(group => {
        newObj[group._id] = group;
      });
      return res.json(newObj);
    }
  });
});

app.post('', function(req, res) {
  let newGroup = new Group(req.body);
  // newGroup.admin_user_id = current_user.id // need a current user helper here
  console.log("req.user !!!", req.user);
  newGroup.admin_user_id = req.user.id;
  newGroup.save((err, user)=> {
    if (err) {
      return res.status(400).send({
        errors: err
      });
    } else {
      return res.json(newGroup);
    }
  });
});

app.delete('/:groupId', function(req, res) {
  Group.findByIdAndRemove(req.params.groupId, (err, group) => {
    if (err) {
      return res.send({ errors: err });
    } else {
      return res.json(group);
    }
  });
});

app.patch('/:groupId', function(req, res) {
  Group.findByIdAndUpdate(req.params.groupId, { $set: req.body }, (err, group) => {
    if (err) {
      return res.send({ errors: err });
    } else {
      return res.json(group);
    }
  });
});
};

// router.get(“/api/groups”, function(){console.log(“MW”);}, GroupsController.get_all_based_on_match);

// Handle incoming GET requests to /groups
// router.get("/api/groups/:groupId", GroupsController.get_group);
// router.get(“/api/groups”, function(){console.log(“MW”);}, GroupsController.get_all_based_on_match);
// router.post("/api/groups", GroupsController.create_group);
// router.patch(“/api/groups/:groupId”, GroupsController.update_group);
// router.delete(“/api/groups/:groupId”, GroupsController.delete_group);

// router.post(“/”, checkAuth, GroupsController.groups_create_group);

// module.exports = router;
