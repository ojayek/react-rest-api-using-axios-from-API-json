import React from "react";
import PropTypes from "prop-types";

// import the Contact component
import Contact from "./Contact";

function ContactList(props) {
  return (
    <div>{props.contacts.map(c => 
    <Contact 
    key={c.id} 
    name={c.name} 
    email={c.email}
    phone={c.phone}
    website={c.website}
    />)}</div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactList;