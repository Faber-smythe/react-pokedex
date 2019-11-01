
import React from 'react';
import qs from 'qs';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pokedex from "./pages/Pokedex.js";
import PokemonDetails from "./containers/PokemonDetails.js";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/pokedex" component={QueryToPokedex}>
        </Route>
        <Route path="/" component={QueryToPokedex}>
        </Route>
      </Switch>
    </Router>
  );
}
const QueryToPokedex = ({match, location}) => {
  const params = location.search ? (qs.parse(location.search.slice(1, location.search.length))) : null;
  return(
    <Pokedex queryParams={params}/>
  )
}
export default App;
