import axios from "axios";


export default {
  // Gets all Persons
  getPersons: function() {
    return axios.get("/api/persons");
  },
  // Gets the person with the given id
  getPerson: function(id) {
    return axios.get("/api/persons/" + id);
  },
  // Deletes the person with the given id
  deletePerson: function(id) {
    return axios.delete("/api/persons/" + id);
  },
  // Saves a person to the database
  savePerson: function(personData) {
    return axios.post("/api/persons", personData);
  }
};