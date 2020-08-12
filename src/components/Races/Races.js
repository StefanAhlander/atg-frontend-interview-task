import React from 'react';
import './Races.css';

import Race from '../Race/Race';

import { useFetch } from '../../hooks/useFetch';

const Races = ({ gameId }) => {
  let races;

  const { response, error, isLoading } = useFetch(
    `https://www.atg.se/services/racinginfo/v1/api/games/${gameId}`
  );

  if (response) {
    races = response.races;
  }

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      <div className="Races">
        {races && races.length > 0 && races.map(race => (
          <Race key={race.id} {...race} />
        ))}
      </div>
      <div className="Error">
        {error && <h3>Something went wrong. Please try again.</h3>}
      </div>
    </>
  );
};

Races.defaultProps = {};

export default Races;
