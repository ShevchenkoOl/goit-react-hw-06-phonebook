import { Title } from "components/ContactForm/ContactForm.styled"
import { PropTypes } from 'prop-types';

export const Section =({title, children}) =>{
    <Title> {children}
        <div>{title}</div>
    </Title>
}

Section.propTypes={
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
};