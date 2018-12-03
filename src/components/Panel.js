import React from 'react';
import Rating from './common/Rating';
// import {fetchMovieDetails} from "../queries/movies";
// import api from '../utils/api';

const Panel = (props) => {
  if (!props.movie) {
    return null;
  }

  return (
    <div className="panel">
      <div className="panel-title">{props.movie.label}</div>
      <div className="panel-description">
        {props.movie.description}
      </div>

      <Rating
        amount={props.movie.rating}
        updateRating={val => props.updateRating(props.movie.id, val)} />

      <div
        className="panel-close"
        onClick={props.clearSelected}>
        close panel
      </div>
    </div>
  );
};

export default Panel;
