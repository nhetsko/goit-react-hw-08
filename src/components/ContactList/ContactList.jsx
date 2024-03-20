import { useSelector } from 'react-redux';
import { getVisibleContactsSelector } from '../../redux/selectors';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList() {
  const contacts = useSelector(getVisibleContactsSelector);

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
