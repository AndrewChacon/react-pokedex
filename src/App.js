import React, { Component } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard/component.pokemoncard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonData: [],
    };
  }

  async componentWillMount() {
    for (let i = 1; i < 152; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const pokemon = await response.json();
      this.setState({ pokemonData: [...this.state.pokemonData, pokemon] });
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Pokedex Application</h1>
          {this.state.pokemonData.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
