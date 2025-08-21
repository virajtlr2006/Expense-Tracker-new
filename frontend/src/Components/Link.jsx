import React from 'react'

const Link = ({href,label}) => {
  return (
    <div>
      <a href={href} >{label}</a>
    </div>
  )
}

export default Link
