import React from 'react';

import './Styles.scss';

const Button = (props) => {
  const [animationStatus, setAnimationStatus] = React.useState(null)

  return (
    <div className={"submitButton " + (props.inactive ? "submitButton--inactive" : "submitButton--active")} onClick={() => {
    setAnimationStatus('start')
    return props.handleSubmit()
  }} >
      {props.label}{animationStatus === 'start' && <span className="icon" style={{"--animation": "spin"}} onAnimationEnd={() => setAnimationStatus('end')}>{props.icon}</span>}
    </div>
  )
}

export default Button;
