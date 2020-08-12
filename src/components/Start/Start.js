import React, { useState } from 'react';
import './Start.css';

import { ReactComponent as DownArrow } from '../../img/down_arrow.svg';
import { ReactComponent as UpArrow } from '../../img/up_arrow.svg';

const Start = ({
  number,
  horse: {
    name,
    pedigree: { father: { name: fatherName } },
    trainer: { firstName: trainerFirstName, lastName: trainerLastName }
  },
  driver: { firstName: driverFirstName, lastName: driverLastName },
}) => {
  let [expanded, toggleExpanded] = useState(false);

  const handleToggle = () => {
    toggleExpanded(!expanded);
  };

  return (
    <div className="Start">
      <h3>
        <span className="startId">{number}. </span>
        <span className="startName">{name}</span>
        <span
          className="toggleExpanded"
          onClick={handleToggle}>{
            expanded ?
              <UpArrow className="arrow" /> :
              <DownArrow className="arrow" />}
        </span>
      </h3>
      <p className="driverName">Driver: {`${driverFirstName} ${driverLastName}`}</p>
      {expanded && (
        <>
          <p className="trainerName">Trainer: {`${trainerFirstName} ${trainerLastName}`}</p>
          <p className="horsesFather">Horses father: {fatherName}</p>
        </>
      )}
    </div>
  );
};

export default Start;