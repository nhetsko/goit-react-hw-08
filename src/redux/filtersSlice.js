import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {name: ''};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
 reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const getFilter = state => state.filters.name;




