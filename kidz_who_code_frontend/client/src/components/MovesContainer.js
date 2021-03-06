import React from 'react';
import MovesList from './MovesList';
import MoveBoard from './MoveBoard';
import './MovesContainer.css';

const MovesContainer = (props) => {
  return (
    <section className="moves-container">
      <MovesList
        squaredSize={props.squaredSize}
        handleMoveClick={props.handleMoveListClick}
      />
      <MoveBoard
        moves={props.moveList}
        handleGoFromMoveBoard={props.handleGoFromMoveContainer}
       />

    </section>
  )
}

export default MovesContainer;
