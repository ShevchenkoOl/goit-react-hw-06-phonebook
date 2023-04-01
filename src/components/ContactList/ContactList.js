import { PropTypes } from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Button} from './ContactList.styled';
import { getContacts, getVisibleContacts } from 'redux/selectors';

function ContactList ( { onDeleteContact }) {
  // const dispatch = useDispatch();
  // const visibleContacts = useSelector(getVisibleContacts);
  const contacts = useSelector(getContacts);
  
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

export default ContactList;