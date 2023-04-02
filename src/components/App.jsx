
import ContactForm from "./ContactForm/ContactForm";
import { Container, Title } from "./ContactForm/ContactForm.styled";
import  ContactList  from "./ContactList/ContactList";
import { Filter } from "./Fiter/Filter";
import { GlobalStyle } from "./GlobalStyle";


export const App = () => {
    return (

      <Container>
            <ContactForm title="Phonebook"/>
         <Title>Contacts
            <Filter />
            <ContactList title="Contacts" />
          </Title>
          <GlobalStyle/>
      </Container>        
    );
}