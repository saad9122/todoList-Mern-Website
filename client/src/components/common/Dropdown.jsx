import React, { useState } from 'react'

export const Dropdown = ({data,handleChange}) => {


return (
  <div className=''>
    <select id="selectOption" onChange={handleChange} 
    className='w-full p-2 border-2 rounded-md cursor-pointer'
    >
        {
            data.map((c,index) => <option value={`${c}`}>{c}</option>)
        }

    </select>
  </div>
);
        
}
