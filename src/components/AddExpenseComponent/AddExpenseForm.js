import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import CustomSelect from './CustomSelect/CustomSelect';

const SignupForm = () => {
  const [data, setData] = useState({});
  const onSubmit = values => {
    setData(values);
  };
  console.log(data);
  return (
    <Formik initialValues={{ month: '' }} onSubmit={onSubmit}>
      <Form>
        <CustomSelect
          label='Months'
          name='month'
          placeholder='Please select month'
        >
          <option value=''>Please select a job type</option>
          <option value='January'>January</option>
          <option value='February'>February</option>
          <option value='March'>March</option>
        </CustomSelect>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
