import React from 'react';
const Button = (props) => {
    return(
        <button onClick={(e) => props.clickEvent(e)}>{props.name}</button>
    );
}
export default Button;