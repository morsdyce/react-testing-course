import React from 'react';

const Movie = (props) => (
  <li onClick={() => props.selectMovie(props.movie.id)}>
    <div>{props.movie.label}</div>
    <div
      className="remove"
      onClick={() => props.removeMovie(props.movie.id)}>
      remove
    </div>
  </li>
);

export default Movie;
