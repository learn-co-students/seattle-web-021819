import React from 'react';

const Movie = (props) => {
  console.log('movie props:', props)
  return <div>
    ({props.movie.year}){' '}
    {props.movie.title}
  </div>
}

export default Movie;
