import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! Thank you.");
    this.setState({ name: "", email: "", message: "" });
  };

  render() {
    return (
      <section className="contact-section">
        <h2>Contact Me</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={this.state.message}
            onChange={this.handleChange}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    );
  }
}

export default Contact;
