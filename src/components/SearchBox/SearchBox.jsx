import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsFilter} from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

import css from './SearchBox.module.css';

const filterInputId = nanoid();

function SearchBox() {
  const value = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    const normalizedValue = event.target.value.toLowerCase();
    dispatch(changeFilter(normalizedValue));
  };

  return (
    <div className={css.container}>
    <p className={css.text}>Find contacts by name: </p>
    <div className={css.inputContainer}>
        <input
            type="text"
            value={value}
            onChange={onChangeFilter}
            id={filterInputId}
          className={css.input}
        />
    </div>
</div>
  );
}

export default SearchBox;