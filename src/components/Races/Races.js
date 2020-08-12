import React from 'react';
import './Races.css';

import Race from '../Race/Race';

import { useFetch } from '../../hooks/useFetch';

const Races = (gameId = "V75_2020-08-15_23_5") => {
  const { races } = useFetch(
    `https://www.atg.se/services/racinginfo/v1/api/games/${gameId}`
  );

  return (
    <div className="Races">
      {races && races.length > 0 && races.map(race => (
        <Race key={race.id} {...race} />
      ))}
    </div>
  );
};

Races.defaultProps = {};

export default Races;
