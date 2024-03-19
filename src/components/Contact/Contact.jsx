import { IoPersonSharp } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
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
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
