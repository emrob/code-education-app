import React from 'react';

const ScoreBoard = (props) => {
  return(
    <React.Fragment>
      <h2>Current score: {props.currentScore} out of 5</h2>
    </React.Fragment>
  )
}

export default ScoreBoard;
