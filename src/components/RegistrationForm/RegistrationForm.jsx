import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './RegistrationForm.module.css';

const contactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
   email: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Required"),
  password: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Required")
});
export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

    return (
        <div className={css.container}>
            <div className={css.img}>
                <h2 className={css.title}>Register your account</h2>
                <p className={css.text}>Create your account. It is free and only takes a minute.</p>
            </div>
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
    onSubmit={handleSubmit}
    validationSchema={contactSchema}   
      >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
                    </label>
        <ErrorMessage className={css.error} name="name" component="div" /> 
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
        <button type="submit">Register</button>
      </Form>
            </Formik>
    </div>
  );
}