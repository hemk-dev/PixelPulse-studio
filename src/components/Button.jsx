import React from 'react'

const Button = ({content}) => {
  return (
    <>
      <div>
        <button className='bg-[#1c1c1c] text-white py-1 px-3 rounded-full text-xs hover:bg-gray-800'>
          {content}
        </button>
      </div>
    </>
  )
}

export default Button