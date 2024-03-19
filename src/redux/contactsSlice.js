import { createSlice, nanoid } from '@reduxjs/toolkit';

const phoneContacts = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: phoneContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(newContact) {
        return {
          payload: { id: nanoid(), ...newContact },
        };
      },
    },
    deleteContact(state, action) {
      const updatedContacts = state.items.filter(
        contact => contact.id !== action.payload.id
      );
      state.items = updatedContacts;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const getContacts = state => state.contacts.items;
