import { Input, Label } from '../ContactForm/ContactForm.styled';
import { PropTypes } from 'prop-types';

export function Filter ({value, onChange}) {
  
    return(
          <Label>Find contacts by name
            <Input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Search ..."
                />
            </Label>
    );
  }

  Filter.propTypes={
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };