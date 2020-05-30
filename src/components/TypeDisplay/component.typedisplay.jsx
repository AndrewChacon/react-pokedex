import React from 'react';
import './styles.typedisplay.scss';

let TypeDisplay = ({ typeData }) => {
  const { name } = typeData.type;
  return (
    <div key={name} className={`types-text ${name}`}>
      {name.toUpperCase()}
    </div>
  );
};

export default TypeDisplay;
