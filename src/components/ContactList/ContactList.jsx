import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { getContacts } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsSlice';
import { IoPersonSharp } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './ContactList.module.css';

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

  return (
    <div>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <div className={css.container}>
              <div className={css.containerItem}>
                <div className={css.item}>
                  <IoPersonSharp className={css.icon} />
                  <p>{contact.name}</p>
                </div>
                <div className={css.item}>
                  <BsFillTelephoneFill className={css.icon} />
                  <p>{contact.number}</p>
                </div>
              </div>
              <button
                className={css.button}
                onClick={() => {
                  dispatch(deleteContact({ id: contact.id })); 
                }}
              >Delete </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
