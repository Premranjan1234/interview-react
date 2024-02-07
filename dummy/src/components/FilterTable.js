// UserTable.js

import React,{useEffect,useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTable, useFilters, useSortBy } from 'react-table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextFilter from './TextFilter';

const FilterTable = ({ users, addUser, deleteUser, changeStatus }) => {
    const [newUsername, setNewUsername] = useState('roshan');
     useEffect(()=>{
        handleAddUser();
     },[])

  const handleAddUser = () => {
    if (newUsername.trim() !== '') {
      const newUser = {
        id: uuidv4(), // Generate a unique ID for the new user (you'll need to import uuidv4)
        username: newUsername,
        addedDate: new Date().toISOString(), // Set the added date to the current date
        status: 'active', // Set the initial status to 'active' or any default status
      };
      addUser(newUser);
      setNewUsername('');
    }
  };
   
  
  // Define columns for the table
  const columns = React.useMemo(
    () => [
      {
        Header: 'Username',
        accessor: 'username',
        Filter: TextFilter,
      },
      {
        Header: 'Added Date',
        accessor: 'addedDate',
        Filter: TextFilter,
      },
      {
        Header: 'Status',
        accessor: 'status',
        Filter: TextFilter,
      },
      {
        Header: 'Actions',
        accessor: 'id',
        Filter: TextFilter,
        disableFilters:true,
        Cell: ({ row }) => (
          <div>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"   
              onClick={() => deleteUser(row.original.id)}>Delete</button>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"  
              onClick={() => changeStatus(row.original.id)}>Change Status</button>
          </div>
        ),
      },
    ],
    [deleteUser, changeStatus]
  );

  // Initialize react-table hooks
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: users }, useFilters, useSortBy);
  if(!users)
   return;

  return (
    <div>
      {/* Date picker */}
      <DatePicker />

      {/* Table */}
      <table {...getTableProps()} className="w-full border-collapse border border-gray-200">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="border border-gray-200 px-4 py-2">
                  {column.render('Header')}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                  {/* Add filter input */}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="bg-white">
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()} className="border border-gray-200 px-4 py-2">{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Input field for adding new user */}
      <div className="flex items-center">
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          className="py-2 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter new username"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
};

export default FilterTable;
