import { useState } from 'react';
//import shortid from 'shortid';
import { Button, Input, Label, Sector, Title } from './ContactForm.styled';

export const ContactForm = ({handleSubmit}) => {
  //const [id, setId] = useState(0);
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
  
  const submitForm = e => {
    e.preventDefault()
    handleSubmit(name, number);
    resetInput();
  }

  const resetInput = () =>{
    setName('');
    setNumber('');
  }

    return (
      <Title>
             Phonebook
             <Sector>
                   <form>
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
                       <Button value="Submit" onClick={submitForm}>Add contact</Button>
                    </form>
                </Sector>
      </Title>
    );
  }