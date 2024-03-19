// import React from 'react';
// import { changeFilter } from '../../redux/filtersSlice';
// import { nanoid } from '@reduxjs/toolkit';
// import { useSelector, useDispatch } from 'react-redux';
// import { getFilter } from '../../redux/filtersSlice';

// import css from './SearchBox.module.css'

// const filterInputId = nanoid();

// export default function SearchBox() {
  
//   const value = useSelector(getFilter);

//   const dispatch = useDispatch();

//   const onChangeFilter = event => {
//     const normalizedValue = event.target.value.toLowerCase();

//     dispatch(changeFilter(normalizedValue));
//   };

//   return (
//       <div className={css.container }>
//       <p>Find contacts by name</p>
//       <input
//           type="text"
//           value={value}
//           onChange={onChangeFilter}
//           id={filterInputId}
//       />
//     </div>
//   );
// }


import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/filtersSlice';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';
const filterInputId = nanoid();

function SearchBox() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <div className={css.container}>
      <p> Find contacts by name</p>
        <input
          type="text"
          value={value}
          onChange={onChangeFilter}
          id={filterInputId}
        />
    </div>
  );
}

export default SearchBox;