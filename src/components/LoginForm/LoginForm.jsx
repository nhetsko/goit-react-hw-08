import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from './LoginForm.module.css';

import {  NavLink } from "react-router-dom";

const contactSchema = Yup.object().shape({
   email: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Required"),
  password: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Required")
});
export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

    return (
      <div className={css.container}>
            <div className={css.img}>
                <h2 className={css.title}>Login</h2>
                <p  className={css.text}>Welcome back! Please login to your account.</p>
            </div>
            <div className={css.formContainer}>
 <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}            
      >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <ErrorMessage className={css.error} name="email" component="div" /> 
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <ErrorMessage className={css.error} name="password" component="div" /> 
        <button type="submit">Log In</button>
      </Form>
            </Formik>
            <p className={css.register}> New User?
                 <NavLink className={css.link} to="/register">
        Signup
      </NavLink>
      </p>
    </div>
            </div>
   
  );
}