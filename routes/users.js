const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectID;

const User = mongoose.model('User');

// const checkAuth = require('../middleware/check-auth');
// const UsersController = require('../controllers/users');

// This works
router.get('/:userId', function(req, res) {
  User.findById(req.params.userId).then(
    (user, err) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).send("Not found");
      }
    }
  );
});

// User index
router.get('', function(req, res) {
  User.find().exec((err, users) => {
    if (err) {
      return res.status(404).send("Not found");
    } else {
      return res.json(users);
    }
  });
});

// User index filtered by dealbreakers
// router.get('/findcompatibleusers/:groupId', function(req, res) {
//   User.find().exec((err, users) => {
//     if (err) {
//       return res.status(404).send("Not found");
//     } else {
//       return res.json(users);
//     }
//   });
//   Find all users in group :groupId
//   Figure out group dealbreakers
//   Find users who meet group dealbreakers
//
//   Grab members of group :groupId from db
//   console.log("Step 1");
//   console.log(req.params.groupId);
//   mongoose.model('Group').findById(req.params.groupId).select('members').exec((err1, group) => {
//     if (err1) {
//       return res.status(404).send("Not found");
//     } else {
//       console.log("Step 2");
//       console.log(group);
//       // Find group's users
//       let memberIds = [];
//       group.members.forEach((userId) => {
//         memberIds.push(ObjectId(userId));
//       });
//
//       // Grab each group member's dealbreakers from db
//       User.find({
//         '_id': { $in: memberIds }
//       }).select('name dealbreakers').exec(function (err2, members) {
//         if (err2) {
//           return res.status(404).send("Not found");
//         } else {
//           console.log("Step 3");
//           console.log(members);
//           // members = {member1, member2, ...}
//           // We have grabbed all members dealbreakers
//           // Calculate group's composite dealbreakers
//
//           // let groupDealbreakers = []; // Array of composite dealbreakers that are true
//           let groupDealbreakerQuery = {};
//
//           members.forEach((member) => {
//             Object.keys(member.dealbreakers).forEach((key) => {
//               // If any group member has a dealbreaker,
//               // it becomes dealbreaker for the whole group
//               if (member.dealbreakers[key]) {
//                 groupDealbreakerQuery[key] = false;
//               }
//             });
//           });
//           console.log(groupDealbreakerQuery);
//
//
//           // Now that we have the group's composite dealbreakers,
//           // search for users that whose values for thingsIDo
//           // matches dealbreakerQuery
//           console.log("3.5", { 'thingsIDo': groupDealbreakerQuery });
//
//           User.find({ 'thingsIDo': groupDealbreakerQuery }).exec(
//             function(err, users) {
//               if (err) {
//                 return res.status(404).send("Not found");
//               } else {
//                 console.log("Step 4");
//                 console.log(users);
//                 return res.json(users);
//               }
//             }
//           );
//         }
//       });
//     }
//   });
// });
//
//   // This route returns all other users that match a group's survey results.
//   // This is the user output from the hard filter.
//   console.log("Can't work on this yet.");
//   res.send("Each user needs to have a filled out survey before we can finish this.");
// });

router.patch('/:userId', function(req, res) {
  User.findByIdAndUpdate(req.params.userId, {$set: req.body}).then(
    (user, err) => {
      if (user) {
        // you send back the body of the request:
        res.send(req.body);
        // this is sending the actual old user:
        // res.json(user);
      } else {
        res.status(404).send("Not found");
      }
    }
  );
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
