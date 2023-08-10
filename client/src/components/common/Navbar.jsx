import React, { useState } from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

export const Navbar = () => {

    const [showDropdownContent,setShowDropdownContent] = useState(false)
    const [filterValue,setFIlterValue] = useState(null)
    const {sortValue,setSortValue} = useState(null)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const handleDropdown = () => {
    //     setShowDropdownContent(!showDropdownContent)

    // }

    const handleLogout = () => {

        localStorage.removeItem("userInfo")
        dispatch(logout())

        navigate("/login")
        
    }

  return (
    <div className='bg-blue-700 text-white px-4 py-4 flex justify-between items-center'>
        <div className='flex items-center'>
            <EditNoteIcon fontSize="large" />
            <p className='text-4xl'>TodoList</p>
        </div> 

        <div className='flex space-x-1 relative cursor-pointer'
        >

            <button
            onClick={handleLogout}
            >Log out  <LogoutIcon /></button>
            {/* <p> Dropdown </p>
            <p className={`${showDropdownContent ? 'rotate-180' : ''} transition-all`}><KeyboardArrowDownIcon /></p>

           { showDropdownContent && <div 
           className='absolute top-10 -left-2 text-white bg-blue-600 px-4 py-2 w-[6.5rem] space-y-2'>
                <p>Profile</p>
                <p>Log out</p>

            </div>} */}


        </div>
    </div>
  )
}
