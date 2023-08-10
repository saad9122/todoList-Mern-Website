import React from 'react'

export const Dropdown = ({data,handleChange,currentValue}) => {


return (
  <div className=''>
    <select id="selectOption" onChange={handleChange} defaultValue={currentValue}
    className='w-full p-2 border-2 rounded-md cursor-pointer'
    >

        {
            data.map((c,index) => <option value={`${c}`} 
            key={c}>{c}</option>)
        }

    </select>
  </div>
);
        
}
