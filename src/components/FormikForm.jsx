import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('User Registered (Formik):', values);
    resetForm();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div style={{ marginBottom: '10px' }}>
            <label>Username:</label>
            <Field name="username" type="text" style={{ width: '100%', padding: '8px' }} />
            <div style={{ color: 'red', fontSize: '12px' }}>
              <ErrorMessage name="username" />
            </div>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Email:</label>
            <Field name="email" type="email" style={{ width: '100%', padding: '8px' }} />
            <div style={{ color: 'red', fontSize: '12px' }}>
              <ErrorMessage name="email" />
            </div>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Password:</label>
            <Field name="password" type="password" style={{ width: '100%', padding: '8px' }} />
            <div style={{ color: 'red', fontSize: '12px' }}>
              <ErrorMessage name="password" />
            </div>
          </div>

          <button type="submit" style={{ padding: '10px 20px' }}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
