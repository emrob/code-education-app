import React from 'react';
import './Result.css';

const Result = (props) => {
  return(
    <h2
      id="question-result"
      className={props.class}>
      {props.text}
    </h2>
  )
}

export default Result;
