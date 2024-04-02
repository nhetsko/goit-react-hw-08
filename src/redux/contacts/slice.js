import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts, changeContact } from './operations';
// import toast from 'react-hot-toast';

const phoneContacts = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: phoneContacts,
  extraReducers: (builder) => builder
    .addCase(fetchContacts.pending, (state) => {
      state.error = false;
      state.loading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(addContacts.pending, (state) => {
      state.error = false;
      state.loading = true;
    })
    .addCase(addContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
    })
    .addCase(addContacts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(deleteContacts.pending, (state) => {
      state.error = false;
      state.loading = true;
    })
    .addCase(deleteContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    })
    .addCase(deleteContacts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
  .addCase(changeContact.fulfilled, (state, action) => {
      const updatedContact = action.payload;
      state.items = state.items.map(item =>
        item.id === updatedContact.id ? updatedContact : item
      );
    })
});

export const contactsReducer = contactsSlice.reducer;
