import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="contact">
      <ul>
        <li>{props.name}</li>
        <li>{props.email}</li>
        <li>{props.phone}</li>
        <a href={props.website}>{props.website}</a>
      </ul>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  website: PropTypes.string.isRequired
};

export default Contact;