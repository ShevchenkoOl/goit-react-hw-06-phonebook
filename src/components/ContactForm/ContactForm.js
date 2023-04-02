import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Label, Sector, Title } from './ContactForm.styled';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/actions';

function ContactForm(){
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name': setName(value);
      break;

      case 'number': setNumber(value);
      break;

      default: return;
    }
      
  }
  const checkRepeatName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const checkRepeatNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const checkEmptyQuery = (name, number) => {
    return name.trim() === '' || number.trim() === '';
  };

  const checkValidNumber = number => {
    return !/\d{3}[-]\d{2}[-]\d{2}/g.test(number);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkRepeatName(name)) {
      alert(`${name} is already in contacts.`);
    } else if (checkRepeatNumber(number)) {
      alert(`${name} is already in contacts.`);
    } else if (checkEmptyQuery(name, number)) {
      alert.info("Enter the contact's name and number phone!");
    } else if (checkValidNumber(number)) {
      alert.error('Enter the correct number phone!');
    } else {
      dispatch(addContact(name, number));
    }
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

    return (
      <Title>
             Phonebook
             <Sector>
                   <form onSubmit={handleSubmit}>
                        <Label>Name
                            <Input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={handleChange}
                            placeholder="Ivan Ivanov"
                            />
                       </Label>
                       <Label>Number
                            <Input
                            type="tel"
                            name="number"
                            id="number"
                            value={number}
                            onChange={handleChange}
                            placeholder="123-45-67"
                            />
                       </Label>
                       <Button value="Submit">Add contact</Button>
                    </form>
                </Sector>
      </Title>
    );
  }

  export default ContactForm;