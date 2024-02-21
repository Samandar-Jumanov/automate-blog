
import React from 'react'

const Button = ( { btnName , btnFunction }) => {
  return (
    <div>
        <button onClick={btnFunction}> {btnName}</button>
    </div>
  )
}

export default Button