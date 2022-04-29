import React, { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { contactsContext } from "../../Context/ContactsContext";


const ContactList = () => {
  const { contacts, getContacts, deleteContact, editContact } = useContext(contactsContext)  

  useEffect (() =>{
    getContacts()
  },[])

  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {contacts.map((item) => (
        <Card style={{ width: '18rem' }} className="m-3" key={item.id}>
          <Card.Body>
            <Card.Title>Name {item.name}
            </Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
              number: {item.number}
            </Card.Subtitle>
            <Button variant="danger" onClick={() => deleteContact(item.id)}>Delete</Button>
            <Link to='/edit'>
            <Button variant="warning" onClick={() => editContact(item.id)}>Edit</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
);

};

export default ContactList;
