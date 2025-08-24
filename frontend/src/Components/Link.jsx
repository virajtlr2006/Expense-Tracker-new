import React from 'react'

const Link = ({href,label}) => {
  return (
    <div>
      <a href={href} className='text-white hover:text-emerald-900 '>{label}</a>
    </div>
  )
}

export default Link
