import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import {
  getVisibleContacts,
  getContacts,
} from '../../redux/contacts/contacts-selectors';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import s from './ContactList.module.css';


function ContactList() {
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
      <TransitionGroup component="ul" className={s.list}>
        {visibleContacts.map(({ id, name, number }) => (
          <CSSTransition
            key={id}
            timeout={250}
            mountOnEnter
            unmountOnExit
          >
            <li className={s.item}>
              <p className={s.info}>
                <b>{name}</b>
                <em>{number}</em>
              </p>
              <button
                className={s.btn}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}

export default ContactList;
