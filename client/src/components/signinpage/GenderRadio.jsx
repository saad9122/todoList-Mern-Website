import React from 'react'

export const GenderRadio = ({data,selectedGender,handleGender}) => {


  return (
    <div className='basis-1/3 border-2 flex justify-between p-2 cursor-pointer'
    onClick={() => handleGender(data)}
    >
         <label>                
            {data}
        </label>    

        <input
            type="radio"
            value={data}
            checked= {selectedGender === `${data}`}
            className='ml-4 '
            />
    </div>
  )
}
