import React, { Component } from 'react';
import './App.css';

// Get All Pokemon Info - https://pokeapi.co/api/v2/pokemon/1
// Get Pokemon Form Info - https://pokeapi.co/api/v2/pokemon-form/1

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonData: [],
    };
  }

  componentDidMount() {
    for (let i = 1; i < 152; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json())
        .then((pokemon) => {
          this.setState({ pokemonData: [...this.state.pokemonData, pokemon] });
        });
    }
    this.setState({
      pokemonData: this.state.pokemonData.sort((a, b) =>
        a.id > b.id ? 1 : -1
      ),
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Pokedex Application</h1>
          {this.state.pokemonData.map((pokemon) => (
            <div className="card" key={pokemon.id}>
              <h2>{pokemon.name}</h2>
              <h5>{`Pokemon Entry #${pokemon.id}`}</h5>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <img
                src={pokemon.sprites.front_shiny}
                alt={`shiny ${pokemon.name}`}
              />
              {pokemon.types.map((types) => (
                <p
                  key={types.type.name}
                  className={`types-text ${types.type.name}`}
                >
                  {types.type.name.toUpperCase()}
                </p>
              ))}
            </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
