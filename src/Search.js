import React from 'react';
import { useParams } from 'react-router-dom';

const Search = ({match}) => {
  let topic = match.params.topic;

  return (
      <p>I want to see data here! Match Params Topic:<strong>{topic}</strong>!</p>
  );
}

export default Search;