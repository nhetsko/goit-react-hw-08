import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    changeFilter(_, action) {
      return action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
export const getFilter = state => state.filter;