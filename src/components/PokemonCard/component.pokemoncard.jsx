import React from 'react';

const PokemonCard = ({ pokemon }) => {
  const { id, name, types, sprites } = pokemon;
  return (
    <div className="card" key={id}>
      <h2>{name}</h2>
      <h5>{`Pokemon Entry #${id}`}</h5>
      <img src={sprites.front_default} alt={name} />
      <img src={sprites.front_shiny} alt={`shiny ${name}`} />
      {types.map((types) => (
        <p key={types.type.name} className={`types-text ${types.type.name}`}>
          {types.type.name.toUpperCase()}
        </p>
      ))}
    </div>
  );
};

export default PokemonCard;
