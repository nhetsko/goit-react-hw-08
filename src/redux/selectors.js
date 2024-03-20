import { createSelector } from '@reduxjs/toolkit';
import { getContacts } from './contactsSlice';

export const getVisibleContactsSelector = createSelector(
  [getContacts, state => state.filters.name], 
  (contacts, filter) => {
    if (!filter) return contacts;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
