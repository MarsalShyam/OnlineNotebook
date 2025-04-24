import React,{useState} from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import {useNavigate} from "react-router-dom"
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  const [serchQuery,setSearchQuery]=useState("");
  const navigate=useNavigate;

  const handleSearch=()=>{};
  const onClearSearch=()=>{
    setSearchQuery("");
  }

  const onLogout=()=>{
    navigate('/login');
  };

  return (
   
      <div className='flex items-center justify-between bg-white px-6 py-2 drop-shadow'>
        <h2 className="text-xl font-medium text-black py-2">Notes</h2>
        <SearchBar value={serchQuery} 
        onChange={({target})=>{
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
        />
        <ProfileInfo onLogout={onLogout}/>
      </div>
  )
}

export default Navbar
