import React, {Component} from 'react'
import {ReactComponent as Pokeball} from '../img/pokeball_cover.svg';
import PokemonTable from '../containers/PokemonTable.js';
import PokemonDetails from '../containers/PokemonDetails.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams
} from "react-router-dom";
import types from '../Tools/Types.js';
import PkmnByEnName from '../Tools/PkmnByEnName';

export default class Pokedex extends Component {

  constructor(){
    super();
    this.state = {
      loading: false,
      pokemon_data: [],
      requestLength: 151,
      showDetails: null,
      goHome: false,
      loading_details: true
    }
    this.checkLoading = this.checkLoading.bind(this);
  }
  componentDidMount(){
    this.setState({loading: true});
    this.buildWholeData();
  }
  // Aysnchronously build the whole client data for easy access
  async buildWholeData(){

    let pokemon_data = [];
    try{
      // get the list for pokemon-species
      const package_res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/?limit=${this.state.requestLength}`);
      const raw_data = await package_res.json();
      // Loop through that list
      (raw_data.results).forEach(async (pkmn) =>{
        // Get the response from pokemon-species endpoint (for french language option)
        const specie_res = await fetch(pkmn.url);
        let data = await specie_res.json()
        // but also the response from pokemon endpoint (much useful info, like sprites)
        // that response will be sub-added under "pkmn_sheet" property
        const sheet_res = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.id}`);
        data.pkmn_sheet = await sheet_res.json();

        //Then also get the evolution before and after, if they exist (by english name /!\)
        if(data.evolves_from_species){data.evolves_from = data.evolves_from_species.name;}

        let evolves_to = '';
        const evo_res = await fetch(data.evolution_chain.url);
        const evo_data = await evo_res.json();
        if(data.name == evo_data.chain.species.name && evo_data.chain.evolves_to[0]){
          evolves_to = evo_data.chain.evolves_to[0].species.name;
        };
        if(evolves_to == '' && evo_data.chain.evolves_to[0] && data.name == evo_data.chain.evolves_to[0].species.name && evo_data.chain.evolves_to[0].evolves_to[0]){
          evolves_to = evo_data.chain.evolves_to[0].evolves_to[0].species.name;
        };
        data.evolves_to = evolves_to;


        pokemon_data.push(data);
        if(pokemon_data.length == 151){
          this.setState({  pokemon_data: this.sortById(pokemon_data)  })
        }
      })
      // Now fill in the STATE !
    }catch(err){
      console.log(err);
      throw err;
    }
  }

  sortById(incoming){
    let sortedList = incoming;
    sortedList.sort(function(a, b) {
      return a.id - b.id;
    });
    return sortedList;
  }

  findPkmnByFrenchName(data, name){
    return (data).filter((pkmn)=>{
      if((pkmn.names[6].name).toLowerCase() == name.toLowerCase()) return true
    })
  }
  checkLoading(loading){
    console.log(loading);
  }

  render(){
    const expected_length = (this.state.requestLength)-1;

    if((this.state.pokemon_data)[expected_length]){
      console.log(this.state.pokemon_data[5]);
    }

    return(<>
      <h1>pokédex</h1>
      {/* Display Pokemon Table */}
      <PokemonTable
        list={this.state.pokemon_data}
        expected_length={expected_length}
        sortById={this.sortById}
      />

      {/*Display details if row was clicked*/}
      <Route exact path="/pokedex/:name" children={
        <PokemonDetails
        expected_length={expected_length}
        data={this.state.pokemon_data}
        loading_details={this.state.loading_details}
        findPkmn={this.findPkmnByFrenchName}
        checkLoading={this.checkLoading}
        />
      } />
    </>);
  }
}
