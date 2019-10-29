
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
        <nav>
          <ul>
            <li>
              <Link to="/pokedex">Pokedex</Link>
            </li>
            <li>
              <Link to="/abilities">Abilities</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <section id="page_content">
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
        </section>
    </Router>
  );
}

export default App;
