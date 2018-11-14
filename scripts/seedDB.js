const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collections and inserts the stuff below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/persons"
);

const personSeed = [
  {
    firstName: "Bob",
    lastName: "Smith",
    date: new Date(Date.now())
  }
];


db.Person
  .remove({})
  .then(() => db.Person.collection.insertMany(personSeed))
  .then(data => {
    console.log(data.result.n + " persons inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/colors"
  );

