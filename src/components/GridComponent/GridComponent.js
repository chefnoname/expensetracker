import React, { useCallback, useState, useContext } from 'react';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ExpenseContext } from '../Context/ExpenseContext';
import { useEffect } from 'react';
import { useRef } from 'react';

const data = [
  {
    date: '26/09/2022',
    description: 'Sandwhich',
    category: 'Food',
    method: 'Cash',
    amount: 4,
  },
  {
    date: '10/09/2022',
    description: 'Train',
    category: 'Transport',
    method: 'Debit Card',
    amount: 20,
  },
  {
    date: '13/09/2022',
    description: 'Jeans',
    category: 'Miscellanous',
    method: 'Credit Card',
    amount: 60,
  },
];

const formatterFactory = params =>
  '£ ' + (Math.round(params.value * 100) / 100).toLocaleString();

const GridComponent = () => {
  const [rowData, setRowData] = useState(data);
  const { expenseFormData } = useContext(ExpenseContext);
  const gridRef = useRef();
  const [columnDefs] = useState([
    { field: 'date' },
    { field: 'description' },
    { field: 'category' },
    { field: 'method' },
    { field: 'amount', valueFormatter: formatterFactory },
  ]);

  useEffect(() => {
    if (Object.entries(expenseFormData).length > 0)
      setRowData(current => [...current, expenseFormData]);

    setTimeout(() => {
      gridRef.current.api.redrawRows();
    }, 100);
  }, [expenseFormData]);

  return (
    <div className='ag-theme-alpine' style={{ height: 400, width: '80%' }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
      ></AgGridReact>
    </div>
  );
};
export default GridComponent;
