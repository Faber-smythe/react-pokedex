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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.search_link = React.createRef();
  }

  handleSearchChange(e){
    let input = e.target.value;
    this.setState((prevState) => {
      let x = prevState.filters ? prevState.filters : {};
      x.search = input;
      return({filters: x})
    })
  }
  handleSubmit(e){
    e.preventDefault();
    this.search_link.current.click()
  }

  render(){
    const {filters} = this.state;
    const search_input = filters && filters.search ? filters.search : "";
    let search_target = search_input ? "/pokedex?search="+search_input : "/pokedex";

    return (
      <nav>
        <form onSubmit={(e)=>{this.handleSubmit(e)}}>
          <input type="text" value={search_input} onChange={(e) => {this.handleSearchChange(e)}}/>
          <Link ref={this.search_link} to={search_target}>Rechercher</Link>
          <input type="submit" style={{height: "1px", width: "1px", opacity:"0"}} />
        </form>
      </nav>
    );
  }
}
