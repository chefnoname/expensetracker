import { useContext } from 'react';
import { Form, Formik } from 'formik';
import CustomSelect from './CustomSelect/CustomSelect';
import CustomInput from './CustomInput/CustomInput';
import { ExpenseContext } from '../Context/ExpenseContext';
import DatePicker from './DatePicker/DatePickerComponent';
import * as Yup from 'yup';

const ExpenseFormSchema = Yup.object().shape({
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  date: Yup.string().min(10).required('Required'),
  category: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  method: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  amount: Yup.number().required('Required'),
});

const padTo2Digits = num => {
  return num.toString().padStart(2, '0');
};

const formatDate = date => {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
};

const AddExpenseForm = () => {
  const { setExpenseFormData } = useContext(ExpenseContext);
  const onSubmit = (values, actions) => {
    const newExpenseVal = {};

    Object.entries(values)
      .map(([key, val]) =>
        Number(val) && typeof val !== 'object' ? [key, Number(val)] : [key, val]
      )
      .forEach(val => (newExpenseVal[val[0]] = val[1]));

    newExpenseVal.date = formatDate(newExpenseVal.date);

    console.log(newExpenseVal);
    setExpenseFormData(newExpenseVal);
    actions.resetForm();
  };

  const intialExpense = {
    date: '',
    description: '',
    category: '',
    method: '',
    amount: '',
  };
  return (
    <Formik
      initialValues={intialExpense}
      onSubmit={onSubmit}
      validationSchema={ExpenseFormSchema}
    >
      <Form>
        <DatePicker name='date' />

        <CustomInput name='description' placeholder='Description' />
        <CustomInput name='category' placeholder='Category' />

        <CustomSelect name='method' placeholder='Please select method'>
          <option value=''>Method</option>
          <option value='Debit Card'>Debit Card</option>
          <option value='Cash'>Cash</option>
          <option value='Cheque'>Cheque</option>
          <option value='Credit Card'>Credit Card</option>
        </CustomSelect>

        <CustomInput name='amount' placeholder='Amount' />

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default AddExpenseForm;
