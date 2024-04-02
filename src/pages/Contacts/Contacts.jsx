import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import { selectUser } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from './Contacts.module.css'

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const user = useSelector(selectUser);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <p className={css.username}>Welcome, {user.name}!</p>
          <h1 className={css.title}>Your tasks</h1>
          <ContactForm />
          <SearchBox/>
      <div>{isLoading && <Loader/>}</div>
      <ContactList />
    </>
  );
}