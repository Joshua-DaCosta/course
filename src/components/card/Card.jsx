import React from 'react'
import './Card.css';

const card = (props) => {
console.log(props);

      const classes = 'card '+ props.className;
  return <div className={classes}>{props.children}</div>;
}

export default card