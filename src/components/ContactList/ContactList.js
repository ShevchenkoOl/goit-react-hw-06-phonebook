
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Button} from './ContactList.styled';
import { getContacts, getVisibleContacts } from 'redux/selectors';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { deleteContact } from 'redux/actions';

function ContactList () {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  const contacts = useSelector(getContacts);
  
  return (
   <>   
    <CSSTransition
        in={!contacts.length}
        timeout={250}
        mountOnEnter
        unmountOnExit
      >
        <p>Your phonebook is empty. Please add contact.</p>
      </CSSTransition>
      <List>
      <TransitionGroup component="ul">
        {visibleContacts.map(({ id, name, number }) => (
          <CSSTransition
            key={id}
            timeout={250}
            mountOnEnter
            unmountOnExit
          >
            <Item>
              <p>
                {name}: {number}
              </p>
              <Button
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </Button>
            </Item>
          </CSSTransition>
        ))}
      </TransitionGroup>
      </List>
      </>
    );
  }


export default ContactList;