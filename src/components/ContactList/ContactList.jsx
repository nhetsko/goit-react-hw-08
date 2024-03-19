import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { getContacts } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList() {
  const dispatch = useDispatch();

  const getVisibleContacts = createSelector(
    [getContacts, state => state.filters.name], 
    (contacts, filter) => {
      if (!filter) return contacts;

      const normalizedFilter = filter.toLowerCase();

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  );

  const contacts = useSelector(getVisibleContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact({ id }));
  };

  return (
    <div>
      <ul className={css.list}>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}
