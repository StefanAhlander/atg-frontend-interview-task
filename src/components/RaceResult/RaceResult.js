import React from 'react';
import './RaceResult.css';

const RaceResults = ({
  number,
  name,
  pools: { plats: { result: { winners } } }
}) => (
    <div className="RaceResults">
      <h3>
        <span className="startId">{number}. </span>
        <span className="startName">{name}</span>
      </h3>
      {winners.first[0] && <p>Första plats: {winners.first[0].number}</p>}
      {winners.second[0] && <p>Andra plats: {winners.second[0].number}</p>}
      {winners.third[0] && <p>Tredje plats: {winners.third[0].number}</p>}

    </div>
  );

export default RaceResults;
