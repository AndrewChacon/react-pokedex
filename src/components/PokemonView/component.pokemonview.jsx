import React, { Component } from 'react';

class PokemonView extends Component {
  constructor() {
    super();
    this.state = {
      pokemonData: {},
    };
  }

  async componentDidMount() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemonId}`
    );
    const pokemon = await response.json();
    this.setState({ pokemonData: pokemon });
    console.log(this.state.pokemonData);
  }

  render() {
    const { name, id, sprites } = this.state.pokemonData;
    return (
      <div>
        <h1>Pokemon View</h1>
        <h1>{name}</h1>
        {/* <img src={sprites.front_default} alt={name} /> */}
        <p>{`Entry #${id}`}</p>
      </div>
    );
  }
}

export default PokemonView;
