import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import CustomSelect from './CustomSelect/CustomSelect';
import CustomInput from './CustomInput/CustomInput';

const SignupForm = () => {
  const [data, setData] = useState({});
  const onSubmit = values => {
    setData(values);
  };
  console.log(data, 'data from the form');

  const intialExpense = {
    month: '',
    bills: '',
    subs: '',
    food: '',
    groceries: '',
  };
  return (
    <Formik initialValues={intialExpense} onSubmit={onSubmit}>
      <Form>
        <CustomSelect name='month' placeholder='Please select month'>
          <option value=''>Please select a month</option>
          <option value='January'>January</option>
          <option value='February'>February</option>
          <option value='March'>March</option>
        </CustomSelect>

        <CustomInput name='bills' placeholder='Bills'></CustomInput>
        <CustomInput name='subs' placeholder='Subscriptions'></CustomInput>
        <CustomInput name='food' placeholder='Food & Drink'></CustomInput>
        <CustomInput name='groceries' placeholder='Groceries'></CustomInput>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
