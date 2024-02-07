
// UserTable.js
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import { Link } from 'react-router-dom';

const UserTable = ({ users, addUser, deleteUser, changeStatus }) => {
  const [newUsername, setNewUsername] = useState('');
  useEffect(()=>{
      handleAddUser()
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
   if(!users)
   return;

  return (
    <div>
      <Link to="/homepage"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" >Homepage</button></Link>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">Username</th>
            <th className="border border-gray-200 px-4 py-2">Added Date</th>
            <th className="border border-gray-200 px-4 py-2">Status</th>
            <th className="border border-gray-200 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="bg-white" key={user.id}>
              <td className="border border-gray-200 px-4 py-2">{user.username}</td>
              <td className="border border-gray-200 px-4 py-2">{user.addedDate}</td>
              <td className="border border-gray-200 px-4 py-2">{user.status}</td>
              <td>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => deleteUser(user.id)}>Delete</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => changeStatus(user.id)}>Change Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center">
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          className="py-2 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter new username"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"  onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
};

export default UserTable;