const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  fullName: { type: String, required: true },
  review: {  type: String, required: true  }
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
