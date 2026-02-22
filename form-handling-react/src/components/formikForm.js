import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Must be 6 characters').required('Required'),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <Field name="username" />
        <ErrorMessage name="username" component="span" />
        
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="span" />
        
        <Field name="password" type="password" />
        <ErrorMessage name="password" component="span" />
        
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
