import { useContext } from 'react';
import { Form, Formik } from 'formik';
import CustomSelect from './CustomSelect/CustomSelect';
import CustomInput from './CustomInput/CustomInput';
import { ExpenseContext } from '../Context/ExpenseContext';
import DatePicker from './DatePicker/DatePickerComponent';

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

const AddExpenseForm = () => {
  const { setExpenseFormData } = useContext(ExpenseContext);
  const onSubmit = values => {
    const newExpenseVal = {};

    Object.entries(values)
      .map(([key, val]) =>
        Number(val) && typeof val !== 'object' ? [key, Number(val)] : [key, val]
      )
      .forEach(val => (newExpenseVal[val[0]] = val[1]));

    newExpenseVal.date = formatDate(newExpenseVal.date);

    console.log(newExpenseVal);
    setExpenseFormData(newExpenseVal);
  };

  const intialExpense = {
    date: '',
    description: '',
    category: '',
    method: '',
    amount: '',
  };
  return (
    <Formik initialValues={intialExpense} onSubmit={onSubmit}>
      <Form>
        <DatePicker name='date' />

        <CustomInput name='description' placeholder='Description'></CustomInput>
        <CustomInput name='category' placeholder='Category'></CustomInput>

        <CustomSelect name='method' placeholder='Please select method'>
          <option value=''>Method</option>
          <option value='Debit Card'>Debit Card</option>
          <option value='Cash'>Cash</option>
          <option value='Cheque'>Cheque</option>
          <option value='Credit Card'>Credit Card</option>
        </CustomSelect>

        <CustomInput name='amount' placeholder='amount'></CustomInput>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default AddExpenseForm;
