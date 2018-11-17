import React, { Component } from "react";
import API from "../../utils/API";
import { Person } from '../../components/Person'
// import Jumbotron from "../../components/Jumbotron";
import { H1, H3 } from '../../components/Headings';
import { Container} from "../../components/Grid";



export default class SavedPersons extends Component {
  state = {
    savedPersons: []// Saved persons go here
  };

  //Saved persons get loaded from here
  componentWillMount() {
    this.loadPersons();
  };

  //This function retrieves the persons
  loadPersons = () => {
    API
      .getPersons()
      .then(results => {
        this.setState({savedPersons: results.data})
      })
  };

  // This function finds persons and deletes them
  deletePerson = id => {
    API
      .deletePerson(id)
      .then(results => {// Persons are re-rendered after the deletion with this
        let savedPersons = this.state.savedPersons.filter(person => person._id !== id)
        this.setState({savedPersons: savedPersons})
        this.loadPersons();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>


                <H3>See what other users thought of their results:</H3>

                { this.state.savedPersons.length > 0 ?
                  (this.state.savedPersons.map((person, i) => (
                    <Person
                      key={i}
                      fullName={person.fullName}
                      review={person.review}
                      type='Delete'
                      onClick={() => this.deletePerson(person._id)}
                    />
                    )
                  )) : <H1>You have no saved persons.</H1>
                }


      </Container>
    );
  };
};
