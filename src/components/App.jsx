import { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { Container, Title } from "./ContactForm/ContactForm.styled";
import  ContactList  from "./ContactList/ContactList";
import { Filter } from "./Fiter/Filter";
import { GlobalStyle } from "./GlobalStyle";
import shortid from 'shortid';


export const App = () => {
  

  const [contacts, setContacts] = useState(() =>{
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

useEffect(()=>{
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ( name, number ) => {
    const contact = {
      name,
      number,
      id: shortid.generate(),
    };

          if (
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase(),
        )
      ) {
        alert(`${name} is already in contacts.`);
      } else if (contacts.find(contact => contact.number === number)) {
        alert(`${number} is already in contacts.`);
      } else if (name.trim() === '' || number.trim() === '') {
        alert("Enter the contact's name and number phone!");
      } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
        alert('Enter the correct number phone!');
      } else {
        setContacts(prevContacts =>
          [contact, ...prevContacts]
        )}
      };
  
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(({id})=> id !== contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  

    return (
      <Container>
            <ContactForm title="Phonebook" handleSubmit={addContact}/>
            
            {contacts.length>0 ? (
            <Title>Contacts
            <Filter value={filter} onChange={changeFilter}/>
            <ContactList title="Contacts"
                         contacts={getVisibleContacts()}
                         onDeleteContact={deleteContact}
            />
            </Title>
            ):(<Title>Your phonebook is empty. Please add contact.</Title>)}
           
            <GlobalStyle/>
      </Container>         
    );
}