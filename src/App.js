import { Component } from 'react';
import { nanoid } from 'nanoid';
import styled, { createGlobalStyle } from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const Global = createGlobalStyle`
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}

h1, h2{ 
margin: 10px;
}
`;

const PhoneBookContainer = styled.div`
   {
    width: 100%;
  }
`;

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  updateStateContact = param => {
    const nameToFind = param.name.toLowerCase();

    const result = this.state.contacts.some(
      contact => contact.name.toLowerCase() === nameToFind,
    );

    if (result) {
      toast.error('This Name is already exists !');
      return;
    }

    const newContact = { id: nanoid(5), ...param };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  updateStateFilter = filter => {
    this.setState({ filter });

    this.getFilteredContacts();
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContactById = id => {
    const { id: idToDel } = id;
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== idToDel),
      };
    });
  };

  render() {
    const FilteredContacts = this.getFilteredContacts();

    return (
      <>
        <Global />
        <PhoneBookContainer>
          <Toaster />
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.updateStateContact} />
          <h2>Contacts</h2>

          {this.state.contacts.length > 0 && (
            <Filter
              value={this.state.filter}
              onChangeFilter={this.updateStateFilter}
            />
          )}

          <ContactList
            contacts={FilteredContacts}
            onDeleteButtonClick={this.deleteContactById}
          />
        </PhoneBookContainer>
      </>
    );
  }
}
