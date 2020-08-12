import React, { useState } from 'react';
import './Race.css';

import Start from '../Start/Start';

import { ReactComponent as DownArrow } from '../../img/down_arrow.svg';
import { ReactComponent as UpArrow } from '../../img/up_arrow.svg';

const Race = ({ number, name, scheduledStartTime, starts }) => {
  let [expanded, toggleExpanded] = useState(false);

  const handleToggle = () => {
    toggleExpanded(!expanded);
  };

  return (
    <div className="Race">
      <header className="header">
        <h2 className="raceNumber">Race number: {number}</h2>
        <h3 className="raceName">{name}</h3>
      </header>
      <p>
        <strong className="raceStartTime">Starts at: {
          new Date(scheduledStartTime)
            .toLocaleTimeString()
            .substring(0, 5)}
        </strong>
        <span
          className="toggleExpanded"
          onClick={handleToggle}>{
            expanded ?
              <UpArrow className="arrow" /> :
              <DownArrow className="arrow" />}
        </span>
      </p>
      {expanded && starts.length > 0 && starts.map(start => (
        <Start key={start.number} {...start}></Start>
      ))}
    </div>
  );
};

export default Race;
