import React from "react";
import './Button.css';

const Button = (props) => {
    return  <button className ={props.info ? "buttonStyleBottom" : "buttonStyleMiddle"} info={props.info ? "true" : "false"} onClick={props.onClick}>{props.text}</button>
}

export default Button