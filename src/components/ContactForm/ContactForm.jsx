import { nanoid } from 'nanoid';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contacts/operations';
import { IoPersonAdd } from "react-icons/io5";

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
    dispatch(addContacts({ name: values.name, number: values.number }));
    actions.resetForm();
  };

  return (
    <div className={css.container}>
<Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
      >
         <Form className={css.form}>
        <div className={css.inputContainer}>
           <label className={css.label} htmlFor={nameFieldId}>Name
            <Field type="text" name="name" id={nameFieldId} /> 
          </label>    
          <ErrorMessage className={css.error} name="name" component="div" /> 
        </div>
           
          <div>
         <label className={css.label} htmlFor={numberFieldId}>Number    
            <Field type="number" name="number" id={numberFieldId} /> 
          </label> 
          <ErrorMessage className={css.error} name="number" component="div" />   
       </div>
        
            
                
        <button className={css.button} type='submit'>Add contact <IoPersonAdd className={css.icon} /> </button>           
      </Form>
      </Formik>
      <div className={css.img}></div>
    </div>
    
  );
}
