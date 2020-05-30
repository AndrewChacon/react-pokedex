import React from 'react';
import './styles.pokemoncard.scss';
import { Link } from 'react-router-dom';
import TypeDisplay from '../TypeDisplay/component.typedisplay';

const PokemonCard = ({ pokemon }) => {
  const { id, name, types, sprites } = pokemon;
  return (
    <Link to={`/pokemon/${id}`}>
      <div className="card" key={id}>
        <h2 className="card__name">{name.toUpperCase()}</h2>
        <img className="card__img" src={sprites.front_default} alt={name} />
        <h5 className="card__entry">{`Pokemon Entry #${id}`}</h5>
        {types.map((typeData) => (
          <TypeDisplay key={typeData.type.name} typeData={typeData} />
        ))}
      </div>
    </Link>
  );
};

export default PokemonCard;
