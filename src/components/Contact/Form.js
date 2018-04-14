// Dependencies
import React, { Component } from 'react';
// Externals
import Field from './Field';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  handleSubmit() {

  }

  render() {
    return (
      <form>
        {/* Name field */}
        <Field
          label="Name"
          onChange={(event) => this.updateField('name', event.target.value)}
          value={this.state.name}
        />
        {/* Email field */}
        <Field
          label="Email"
          onChange={(event) => this.updateField('email', event.target.value)}
          value={this.state.email}
        />
        {/* Message textarea */}
        <Field
          label="Message"
          onChange={(event) => this.updateField('message', event.target.value)}
          /* This should be written like 'textarea' */
          textarea={true}
          value={this.state.message}
        />
        {/* Submit button */}
        <button
          email="jamkelley22@gmail.com"
          onClick={this.handleSubmit}
        >Send</button>
    </form>
    );
  }
}

export default Form;
