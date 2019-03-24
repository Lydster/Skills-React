import React from "react";

import { Input, Button } from "react-materialize";

class Contact extends React.Component {
  state = {
    contact: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  };

  changeHandler = e => {
    e.persist();
    this.setState({
      contact: { [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    this.props.addContact(e, this.state.contact);
    this.setState({
      contact: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="contact">
        <h4>Contact Us</h4>
        <Input
          s={6}
          label="Full Name"
          name="name"
          value={this.state.contact.name}
          onChange={this.changeHandler}
        />
        <Input
          s={6}
          label="Email"
          name="email"
          value={this.state.contact.email}
          onChange={this.changeHandler}
        />
        <Input
          s={6}
          label="Subject"
          name="subject"
          value={this.state.contact.subject}
          onChange={this.changeHandler}
        />
        <Input
          s={6}
          label="Message"
          name="message"
          value={this.state.contact.message}
          onChange={this.changeHandler}
        />
        <Button>Send</Button>
      </div>
    );
  }
}

export default Contact;
