import { useState } from "react";
import initialContact from '../data.json';
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import css from './App.module.css'

export default function App() {
  const [contacts, setContacts] = useState(initialContact);
  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()) ||
    contact.number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
       <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
