import React, { Component } from 'react';

import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';
import Finder from './components/Finder';

class App extends Component {
  render() {
    return (
      <>
        <h1>Phonebook </h1>
        <ContactEditor />
        <h2>Contacts</h2>
        <Finder />
        <ContactList />
      </>
    );
  }
}

export default App;

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
