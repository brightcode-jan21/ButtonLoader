import React from 'react';

import './Styles.scss';

const Button = (props) => {
  console.log(props.loading)

  const buttonStyle = () => {
    if(props.loading)
    {
      return "loading"
    }
    else 
    {
      return "submitButton " + (props.inactive ? "submitButton--inactive" : "")
    }
  }

  return (
    <div className={buttonStyle()}
          //  style={props.loading? {padding: '0 3em'}:{padding: '0 4em'}} 
           onClick={props.handleSubmit}
    >
     {props.label}
      <div className="submitButton--loader">{props.loading? 
        <i class="fa fa-refresh fa-spin"></i>:""}
      </div> 
    </div>
  )
}

export default Button;