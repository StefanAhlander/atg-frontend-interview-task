import React from 'react';
import './ListGames.css';

import Races from '../Races/Races';
import Results from '../Results/Results';

const ListGames = ({ upcoming, results, selectedGame, handleSelectGame }) => {
  const games = upcoming ? upcoming : results;

  return (
    <>
      <div className="ListGames">
        {games.map(game => (
          <div
            key={game.id}
            className={`gameItem ${selectedGame === game.id ? 'active' : ''}`}
            onClick={() => handleSelectGame(game.id)}
          >
            <h3>{game.id}</h3>
            <p><strong>Datum:</strong> {new Date(game.startTime).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      {selectedGame && upcoming && <Races gameId={selectedGame} />}

      {(selectedGame && !upcoming && results) && <Results gameId={selectedGame} />}
    </>
  );
};

export default ListGames;
