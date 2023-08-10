import React from 'react'

export const GenderRadio = ({data,selectedGender,handleGender}) => {


  return (
         <label  className='basis-1/3 border-2 flex justify-between p-2 cursor-pointer'
         
         htmlFor={data}>                
            {data}

            <input
            type="radio"
            value={data}
            checked= {selectedGender === `${data}`}
            onChange={() => handleGender(data)}
            className='ml-4'
            id={data}
            />



        </label>    
  )
}
