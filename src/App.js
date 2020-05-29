import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList/component.pokemonlist';
import PokemonView from './components/PokemonView/component.pokemonview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Switch>
            <Route path="/pokemon/:pokemonId" exact component={PokemonView} />
            <Route path="/" exact component={PokemonList} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
