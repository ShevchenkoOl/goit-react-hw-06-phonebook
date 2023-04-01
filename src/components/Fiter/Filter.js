import { CSSTransition } from 'react-transition-group';
import { Input, Label } from '../ContactForm/ContactForm.styled';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { filterContact } from 'redux/actions';

export function Filter () {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

    return(
<CSSTransition
      in={contacts.length > 0}
      timeout={250}
      mountOnEnter
      unmountOnExit
    >
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          placeholder="Search ..."
          onChange={e => dispatch(filterContact(e.target.value))}
        />
      </Label>
    </CSSTransition>

    //       <Label>Find contacts by name
    //         <Input
    //             type="text"
    //             value={value}
    //             onChange={onChange}
    //             placeholder="Search ..."
    //             />
    //         </Label>
     );
  }

  Filter.propTypes={
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };