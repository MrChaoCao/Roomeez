http://roommez.herokuapp.com/

# Roommez
Roommez is a web application designed to help users find roommates.

## Background and Overview
Finding roommates is an informal and daunting process, most people don't even know where to start. The fundamental problem is, it is impossible to know how someone is as a roommate before you've actually lived with them.

Roommez attempts to solve that problem by:
1. Allowing users to search for roommates based on housing needs and compatibility.
2. Users can rate past roommates to let others know how they are as a roommate.

## Product Design
Roommez was designed with ease of use and readability in mind. Users are presented with a survey to determine their roommate requirements and personal preferences.

Users can then select potential roommates based on their personal profiles and how well they match individual needs.

## Features
* New user sign up, sign in, and authentication using Facebook OAuth
* Splash page explaining the site concept
* Dashboard page clearly displays interface options to user
* Users fill out a survey to establish their needs and interests
* Users can view profiles of other users
* Users can view and create groups

## Technologies
Roommez was developed using MongoDB, Express.js, React, and Node.js. The MERN stack was selected because of

MongoDB was selected because of its scalability and its robustness in dealing with constantly evolving user input data. Without the rigid structure of SQL databases MongoDB can be rapidly adjusted changing datatypes.

Node and express were chosen to build this application because they are especially well suited to maintaining a persistent connection with the user from the server all the way to the browser. Any sort of concurrent user activity can benefit from the framework's ability to send updates in real time.

React was used in the front end to ensure that the complicated state is managed consistently and reliably. It is the premier framework for managing complicated front end states and the natural partner to an Express/Node back end.

## Plans for future functionality
- [ ] Users can search for individuals and groups
- [ ] Users can rate past roommates
- [ ] In app chat between users
- [ ] Users/Groups can be filtered by rating
- [ ] Users/Groups can be filtered by match percentage
