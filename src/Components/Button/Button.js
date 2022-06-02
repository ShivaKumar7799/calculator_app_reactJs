import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <div>
      <button className={props.class} onClick={props.handler} > {props.text} </button>
    </div>
  )
}

export default Button