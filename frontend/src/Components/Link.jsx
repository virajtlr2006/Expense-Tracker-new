import React from 'react'

const Link = ({href,label}) => {
  return (
    <div>
      <a href={href} className='text-gray-600 hover:text-black underline'>{label}</a>
    </div>
  )
}

export default Link
