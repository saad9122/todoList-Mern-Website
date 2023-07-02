import React from 'react'

export const SubmitButton = ({button, handleSubmit}) => {
  return (
    <button className='w-full text-center bg-blue-700 hover:bg-green-600 p-2 text-white text-lg transition'
          type="Submit"
          onClick={handleSubmit}
          >
          {button} Task </button>

  )
}
