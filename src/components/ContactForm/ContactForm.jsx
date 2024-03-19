import { nanoid } from 'nanoid';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
    
  const initialValues = {
    name: "",
    number: ""
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>   
        <Field type="text" name="name" id={nameFieldId} />    
        <ErrorMessage className={css.error} name="name" component="div" />           

        <label htmlFor={numberFieldId}>Number</label>     
        <Field type="number" name="number" id={numberFieldId} /> 
        <ErrorMessage className={css.error} name="number" component="div" />     
                
        <button className={css.button} type='submit'>Add contact</button>           
      </Form>
    </Formik>
  );
}
