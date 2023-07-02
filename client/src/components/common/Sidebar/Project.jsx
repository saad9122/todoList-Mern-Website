import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

export const Project = ({project}) => {
  return (
    <div className='cursor-pointer flex justify-between'>
       
        <p>{project}</p>

        <div className='space-x-3'>
            <button><EditIcon/>  </button>
            <button><ClearIcon />  </button>
            
        </div>
    </div>
  )
}
