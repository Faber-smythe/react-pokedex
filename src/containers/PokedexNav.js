import React, {Component} from 'react';
import {
  Link,
} from "react-router-dom";
import types from '../Tools/Types.js';
import TypeFilter from '../components/TypeFilter.js';


export default class PokedexNav extends Component {

  constructor(props){
    super(props);
    let stateFilters
    this.state = {
      filters: props.filters,
      input_value : '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleType = this.toggleType.bind(this);
    this.search_link = React.createRef();
  }

  handleSearchChange(e){
    let input = e.target.value;
    // only allow letters
    const rule = new  RegExp('[A-Za-z]');
    let formated_input = '';
    Array.from(input).forEach(char =>{
      formated_input += rule.test(char) ? char : '';
    })
    // set the State
    this.setState((prevState) => {
      let edited_filters = prevState.filters ? prevState.filters : {};
      edited_filters.search = formated_input;
      return({filters: edited_filters})
    })
  }
  toggleType(type){
    this.setState(prevState=>{
      let edited_filters = prevState.filters ? prevState.filters : {search:"", types:[]};
      if(!edited_filters.types){edited_filters.types = [];}
      // add type
      // console.log(edited_filters.types);
      if(!edited_filters.types.includes(type)){edited_filters.types.push(type)}
      // remove type
      else{edited_filters.types = edited_filters.types.filter(elem=>{return elem!=type})};
      // console.log(edited_filters.types);
      return({filters: edited_filters});
    })
  }

  handleSubmit(e){
    e.preventDefault();
    // simulate a click on the link (this allows to submit the no-reload form via Entry key)
    this.search_link.current.click();
  }
  buildSearchTarget(){
    let search_target = '/pokedex';
    if(!this.state.filters || (this.state.filters.search && !this.state.filters.search.length && !this.state.types)){
      return search_target;
    }
    search_target += '?';
    search_target += this.state.filters.search ? ('search='+this.state.filters.search) : "";
    if(this.state.filters.types){
      search_target += this.state.filters.search ? '&' : '';
      this.state.filters.types.forEach((type, index)=>{
        search_target += index > 0 ? '&' : '';
        search_target += `type${index+1}=${type}`;
      })
    }
    return search_target;
  }

  render(){
    const {filters} = this.state;
    const search_input = filters && filters.search ? filters.search : "";
    const currentFilters = filters && filters.types ? filters.types : null;


    return (
      <nav>
        <form onSubmit={(e)=>{this.handleSubmit(e)}}>
          <div id="type_inputs">
            {types('fr', 'array').map((type, index)=>(
              <TypeFilter currentFilters={currentFilters} type={type} key={index} toggleType={this.toggleType}/>
            ))}
          </div>
          <input type="text" value={search_input} onChange={(e) => {this.handleSearchChange(e)}}/>
          <Link ref={this.search_link} to={this.buildSearchTarget()}>Rechercher</Link>
          <input type="submit" style={{height: "1px", width: "1px", opacity:"0"}} />
        </form>
      </nav>
    );
  }
}
