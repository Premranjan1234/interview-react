import React, { useEffect } from 'react'
import { auth } from '../Utils/firebase';
import { signOut } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import {  onAuthStateChanged } from "firebase/auth";




const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user);
  
  
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,Email:email,name:displayName}));
        navigate("/homepage");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        
        // User is signed out
        // ...
      }
      
    });
    return ()=>unsubscribe();
  },[])
  const handleSignOut=()=>{
    
   signOut(auth).then(() => {
    
  // Sign-out successful.
   }).catch((error) => {
  // An error happened.
  });
  
  
}





  return (
    <div className=" flex justify-between shadow-lg">
        <h1 className=' font-bold text-2xl m-2  '>Weather App</h1>
      {user && <div className='flex p-2'>
        <Link to="/usertable">  <button  className=" text-black bg-purple-500 rounded-lg m-2 p-2 font-bold">UserTable</button></Link>
        <button onClick={handleSignOut} className=" text-black bg-purple-500 rounded-lg m-2 p-2 font-bold">Sign Out</button>
      </div>}
      
    </div>
  )
}

export default Header