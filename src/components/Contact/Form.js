// Dependencies
import React, { Component } from 'react';
// Externals
import Field from './Field';
import firebase from 'firebase';
import Notifications, {notify} from 'react-notify-toast';
import Recaptcha from 'react-recaptcha';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAidhjt2l_dd0hCmxZWUX6fmBBcgFSQVkY",
  authDomain: "jameel-website.firebaseapp.com",
  databaseURL: "https://jameel-website.firebaseio.com",
  projectId: "jameel-website",
  storageBucket: "jameel-website.appspot.com",
  messagingSenderId: "667484368249"
};
firebase.initializeApp(config);

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      messagesRef: null,
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveMessage = this.saveMessage.bind(this);
    this.showNotification = this.showNotification.bind(this);
    this.sendEmail = this.sendEmail.bind(this);

    this.verifyCallback = this.verifyCallback.bind(this);
    this.callback = this.callback.bind(this);
  }

  componentWillMount() {
    this.setState({
      messagesRef: firebase.database().ref('messages')
    });
  }

/*
  componentDidMount() {
    this.showNotification('Message Sent!\nThanks for reaching out, i\'ll try to get back to you shortly :)',"success");
  }
*/

  verifyCallback(response) {
    console.log("Response: " + response);
    console.log(response.success);
  }

  callback() {
    console.log("done");
  }

  sendEmail(showNotification) {
    // parameters: service_id, template_id, template_parameters
    window.emailjs.send("gmail","jameel_website",{name: this.state.name, message: this.state.message, email: this.state.email})
    .then(function(response) {
       console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
       showNotification('Message Sent!\nThanks for reaching out, i\'ll try to get back to you shortly :)',"success");
    }, function(err) {
       console.log("FAILED. error=", err);
       showNotification('Message Failed to Send\nPlease Try Again, Sorry :(',"error");
    });
  }

  showNotification(content,type) {
    notify.show(content,type);
  }

  saveMessage() {
    let newMessageRef = this.state.messagesRef.push();
    newMessageRef.set({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    });
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  handleSubmit(e) {
    console.log("Name: " + this.state.name);
    console.log("Email: " + this.state.email);
    console.log("Message: " + this.state.message);

    this.saveMessage();
    this.sendEmail(this.showNotification);

    /*
    fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      secret: "6LeNgVMUAAAAACRl4RVaHQu8gl5VywfUMJ1sO5ud"
    }).then(function(response) {
      console.log(response.success);
      if(response.success) {
        this.saveMessage();
        this.sendEmail(this.showNotification);
      }
    });

    */

    this.setState({
      name: '',
      email: '',
      message: '',
    });
    e.preventDefault();
  }

  render() {
    return (
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
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
            <button type="submit" email="jamkelley22@gmail.com">
              Send
            </button>
        </form>

      </React.Fragment>
    );
  }
}

export default Form;
