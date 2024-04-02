import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image, ListGroup } from 'react-bootstrap';
import Note from './Note';
import AddNote from './AddNote';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Contact = ({ contact, notes }) => (
  <Card className="h-100">
    <Card.Header>
      <Image width={75} src={contact.image} />
      <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
      <Card.Subtitle>{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
      <Link to={`/edit/${contact._id}`}>Edit</Link>
    </Card.Body>
    <ListGroup variant="flush">
      {notes.map((note) => <Note key={note._id} note={note} />)}
    </ListGroup>
    <AddNote owner={contact.owner} contactId={contact._id} />
    <Link to={`/edit/${contact._id}`}>Edit</Link>
  </Card>
);

// Require a document to be passed to this component.
Contact.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  notes: PropTypes.arrayOf(PropTypes.shape({
    note: PropTypes.string,
    contactId: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    owner: PropTypes.string,
    _id: PropTypes.string,
  })).isRequired,
};

export default Contact;
