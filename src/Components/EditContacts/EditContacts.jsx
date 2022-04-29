import React, { useContext, useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { contactsContext } from "../../Context/ContactsContext";

const EditContact = () => {
const {contactToEdit, saveContact} = useContext(contactsContext)
const [editContact, setEditContact] =useState(contactToEdit)


const navigate = useNavigate()


useEffect(() => {
  setEditContact(contactToEdit)
},[contactToEdit])


const handleInput = (e) => {
  let obj = {
    ...editContact,
    [e.target.name]: e.target.value,
  }
  setEditContact(obj)
}

const goBack = () => navigate(-1)
return (
    <>

    <Button onClick={goBack}>BACK</Button>


    { editContact ? (
      <InputGroup className="w-50">
      <FormControl 
      value={editContact.name} 
      name='name' 
      placeholder="enter name" 
      onChange={handleInput} 
      />
      <FormControl 
      value={editContact.phone} 
      name='Phone' 
      placeholder="enter number" 
      onChange={handleInput} 
      />
  
  <FormControl 
      value={editContact.email} 
      name='Email' 
      placeholder="enter email" 
      onChange={handleInput} 
      />
  
  <FormControl 
      value={editContact.image} 
      name='Image' 
      placeholder="img" 
      onChange={handleInput} 
      />
  
      <Button 
      onClick={() => {
      saveContact(editContact);
        navigate('/')
    }}
      >ADD</Button>
      </InputGroup>
    ) : (
      <h2>Loading...</h2>
    )}
    
    </>
  )
};

export default EditContact;
