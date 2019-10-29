
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pokedex from "./pages/Pokedex.js";
import PokemonDetails from "./containers/PokemonDetails.js";
import Abilities from "./pages/Abilities.js";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/abilities">
          <Abilities />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        <Route path="/">
          <Pokedex />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
