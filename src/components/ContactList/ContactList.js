import { PropTypes } from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Button} from './ContactList.styled';
import { getContacts, getVisibleContacts } from 'redux/selectors';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { deleteContact } from 'redux/actions';

function ContactList ( { onDeleteContact }) {
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
  //     <List>
  //       {visibleContacts.map(({ id, name, number }) => (
  //         <Item key={id}>
  //           <p>
  //             {name}: {number}
  //           </p>
  //           <Button
  //             type="button"
  //             onClick={() => dispatch(onDeleteContact(id))}>Delete</Button>
  //         </Item>
  //       ))}
  //     </List>
  //    );
  // }


  ContactList.propTypes={
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };

export default ContactList;