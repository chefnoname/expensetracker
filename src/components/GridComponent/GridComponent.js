import React, { useCallback, useState } from 'react';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const data = [
  {
    month: 'January',
    bills: 1000,
    subscriptions: 90,
    food: 100,
    groceries: 400,
    shopping: 500,
    transport: 300,
    dummy: '',
  },
  {
    month: 'February',
    bills: 1000,
    subscriptions: 100,
    food: 200,
    groceries: 200,
    shopping: 600,
    transport: 900,
    dummy: '',
  },
  {
    month: 'March',
    bills: 4000,
    subscriptions: 100,
    food: 500,
    groceries: 600,
    shopping: 100,
    transport: 400,
    dummy: '',
  },
];

const formatterFactory = params => {
  if (typeof params.value === 'number') {
    return '£ ' + (Math.round(params.value * 100) / 100).toLocaleString();
  }
};

const totalExp = params => {
  if (params.data) {
    const { bills, subscriptions, food, groceries, shopping, transport } =
      params.data;

    const total =
      bills + subscriptions + food + groceries + shopping + transport;
    return total;
  }
};

const GridComponent = () => {
  const [rowData, setRowData] = useState(data);

  const [columnDefs] = useState([
    { field: 'month', editable: false },
    {
      headerName: 'Total Expenditure',
      field: 'totalExpenditure',
      valueGetter: totalExp,
      valueFormatter: formatterFactory,
      editable: false,
    },
    {
      field: 'bills',
    },
    { field: 'subscriptions' },
    { field: 'food', headerName: 'Food & Drink' },
    { field: 'groceries' },
    // { field: 'shopping' },
    // { field: 'transport' },
    { field: 'dummy', hide: true, rowGroup: true },
  ]);

  const defaultColDef = {
    valueFormatter: formatterFactory,
    aggFunc: 'sum',
    editable: true,
    valueSetter: params => {
      params.data[params.colDef.field] = Number(params.newValue);
      return true;
    },
  };

  return (
    <div className='ag-theme-alpine' style={{ height: 400, width: '80%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        groupDefaultExpanded={-1}
      ></AgGridReact>
    </div>
  );
};
export default GridComponent;
