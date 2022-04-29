import React, { useContext, useState } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { contactsContext } from "../../Context/ContactsContext";


const AddContact = () => {
  const {addContact} = useContext(contactsContext)
  const [person, setPerson] = useState({name: '', phone: '', email: '', image: ''})
  const handleInp = (e) =>{
    let obj={
      ...person,
      [e.target.name]: e.target.value,
    }
    setPerson(obj)
  }
  console.log(person);
  return (

  <InputGroup className="w-50">
    <FormControl 
    value={person.name} 
    name='name' 
    placeholder="enter name" 
    onChange={handleInp} 
    />
    <FormControl 
    value={person.phone} 
    name='Phone' 
    placeholder="enter number" 
    onChange={handleInp} 
    />

<FormControl 
    value={person.email} 
    name='Email' 
    placeholder="enter email" 
    onChange={handleInp} 
    />

<FormControl 
    value={person.image} 
    name='Image' 
    placeholder="img" 
    onChange={handleInp} 
    />

    <Button onClick={() => {
      addContact(person)
    setPerson({name: '', number: '', email: '', image: ''})
  }}
  >
    ADD</Button>
   
    </InputGroup>
  )
};

export default AddContact;
