import React, {Component} from 'react';
import {
  Link,
} from "react-router-dom";

export default class PokedexNav extends Component {
constructor(props){
  super(props);
  this.state = {
    filters: props.filters,
    input_value : '',
  }
}
handleSearchChange(e){
  let input = e.target.value;
  this.setState((prevState) => {
    let x = prevState.filters ? prevState.filters : {};
    x.search = input;
    return({filters: x})
  })
}
render(){
  const {filters} = this.state;
  const search_input = filters && filters.search ? filters.search : "";
  let search_target = search_input ? "/pokedex?search="+search_input : "/pokedex"

  return (
    <nav>
      <input type="text" value={search_input} onChange={(e) => {this.handleSearchChange(e)}}/>
      <Link to={search_target}>Rechercher</Link>
    </nav>
  );
}
}
