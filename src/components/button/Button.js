import React from 'react';

import './Styles.scss';

const Button = (props) => {

  const buttonClass = props.label ==="Submit" ? ("submitButton " + (props.active ? "submitButton--loading" : "submitButton--inactive" )) 
  : "submitButton " ;


  return (
    <div className={buttonClass} onClick={props.handleSubmit} >
      {props.label}
    </div>
  )
}

export default Button;