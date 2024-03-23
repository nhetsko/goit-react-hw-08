import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <ul className={css.list}>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
