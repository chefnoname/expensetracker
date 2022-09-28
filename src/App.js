import { useState } from 'react';
import AddExpenseForm from './components/AddExpenseComponent/AddExpenseForm';
import { ExpenseContext } from './components/Context/ExpenseContext';
import GridComponent from './components/GridComponent/GridComponent';
import './App.css';
const App = () => {
  const [expenseFormData, setExpenseFormData] = useState({});
  return (
    <>
      <ExpenseContext.Provider value={{ expenseFormData, setExpenseFormData }}>
        <GridComponent />
        <AddExpenseForm />
      </ExpenseContext.Provider>
    </>
  );
};
export default App;
