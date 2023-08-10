import React from 'react'

export const Error = ({errorMessage}) => {
  return (

    <div className='text-red-600 text-sm rounded-md'>
        {errorMessage}
    </div>
  )
}
