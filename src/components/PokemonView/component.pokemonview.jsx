import React, { Component } from 'react';

class PokemonView extends Component {
  constructor() {
    super();
    this.state = {
      pokemonData: {},
      pokemonImage: '',
      pokemonTypes: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemonId}`
    );
    const pokemon = await response.json();
    this.setState({ pokemonData: pokemon });
    this.setState({ pokemonImage: pokemon.sprites.front_default });
    this.setState({ pokemonTypes: pokemon.types });
    console.log('sprites', this.state.pokemonData);
  }

  render() {
    const { name, id, types } = this.state.pokemonData;
    const { pokemonImage, pokemonTypes } = this.state;
    return (
      <div>
        <h1>Pokemon View</h1>
        <h1>{name}</h1>
        <img src={pokemonImage} alt={name} />
        <p>{`Entry #${id}`}</p>
        {pokemonTypes.map((types) => (
          <p key={types.type.name} className={`types-text ${types.type.name}`}>
            {types.type.name.toUpperCase()}
          </p>
        ))}
      </div>
    );
  }
}

export default PokemonView;
