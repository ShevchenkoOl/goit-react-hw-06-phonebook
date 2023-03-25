import { PropTypes } from 'prop-types';
import React from 'react';
import { List, Item, Button} from './ContactList.styled';


export const ContactList = ({ contacts, onDeleteContact })=>{
    return (
      
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <Button
              type="button"
              onClick={() => onDeleteContact(id)}>Delete</Button>
          </Item>
        ))}
      </List>
    );
  }


  ContactList.propTypes={
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };

