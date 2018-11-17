import React, { Component } from "react";
import TextArea from "../../components/Form/TextArea";
import API from "../../utils/API";

class Form extends Component {
  // Setting the component's initial state
  state = {
    fullName: "",
    review: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.fullName || !this.state.review) {
      alert("Fill out your full name name please!");
    } else {
      API.savePerson({
        fullName: this.state.fullName,
        review: this.state.review
      })
        // .then(res => this.loadPerson())
        .catch(err => console.log(err));
    }

    this.setState({
      fullName: "",
      review: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="nameForm container-fluid row">
        <p>Hello {this.state.fullName}</p>
        <form className="form">
          <div className="container-fluid row">
            <label htmlFor="fullName">
              Full Name
              <input
                id="fullName"
                className="col-sm-12 container-fluid well"
                value={this.state.fullName}
                name="fullName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Full Name"
              />
            </label>
          </div>
          {/* <input
            id="review"
              value={this.state.review}
              name="review"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Submit a Review Here"

            /> */}
          <div className="nameForm container-fluid row">
            <label htmlFor="review">
              Review
              <TextArea
                id="review"
                className="container-fluid col-sm-12 well"
                onChange={this.handleInputChange}
                type="text"
                value={this.state.review}
                name="review"
                placeholder="write something..."
              />
              <label />
            </label>
          </div>
          <button onClick={event => this.handleFormSubmit(event)}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
