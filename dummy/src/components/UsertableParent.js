import React, { useState } from 'react'
//import UserTable from './UserTable';
import FilterTable from './FilterTable';
import { Link } from 'react-router-dom';


const UsertableParent = () => {
    const [users, setUsers] = useState([]);
  
    const addUser = (newUser) => {
        setUsers([...users, newUser]); 
      // Add new user logic
    };
  
    const deleteUser = (userId) => {
      setUsers(users.filter(user => user.id !== userId));
    };
  
    const changeStatus = (userId) => {
    
       setUsers(users.map((user) =>user.id === userId ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' } : user));
       
       
     
      // Change user status logic
    };
  return (
    <div>
        <Link to="/homepage"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" >Homepage</button></Link>
        <FilterTable users={users} addUser={addUser} deleteUser={deleteUser} changeStatus={changeStatus} />
    </div>
  )
}

export default UsertableParent