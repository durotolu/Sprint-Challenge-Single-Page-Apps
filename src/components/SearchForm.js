import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function SearchForm(props) {
  const { onSubmit } = props;
 
  return (
    <Formik onSubmit={onSubmit}
        render={props => {
          return (
            <Form>
              <span>
                <Field name='name' type='text' placeholder='Search' />
                <ErrorMessage name='name' component='div' />
              </span>
              <button type='submit'>Submit</button>
            </Form>
          )
        }} />
  );
}
