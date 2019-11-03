import React, {Component} from 'react'
import {ReactComponent as Pokeball} from '../img/pokeball_cover.svg';
import PokemonTable from '../containers/PokemonTable.js';
import PokemonDetails from '../containers/PokemonDetails.js';
import PokedexNav from '../containers/PokedexNav.js';
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

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      pokemon_data: [],
      requestLength: 151,
      showDetails: null,
      goHome: false,
    }
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
      (raw_data.results).forEach(async (pkmn, index) =>{
        // Get the response from pokemon-species endpoint (for french language option)
        const specie_res = await fetch(pkmn.url);
        let data = await specie_res.json()

        // but also the response from pokemon endpoint (much useful info, like sprites)
        // that response will be sub-added under "pkmn_sheet" property
        const sheet_res = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.id}`);
        if(sheet_res.status == 404){ console.log(`l'api a renvoyé une erreur #404 pour l'id ${data.id} à: ${sheet_res.url}`) }
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
        if(index+1 == this.state.requestLength){
          this.setState({  pokemon_data: this.sortById(pokemon_data), loading: false })
        }
      })
      // Now fill in the STATE !
    }catch(err){
      console.log(err);
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
  filterPokemonData(data, filters){
    let filtered_data = data;
    if(filters && filters.search){
      if(filters.search){filtered_data = filtered_data.filter(elem => (elem.names[6].name.toLowerCase()).includes(filters.search))}
    }
    if(filters && filters.types && filters.types.length){
      let type_matching_data = [];

      filters.types.forEach(type=>{

        filtered_data.forEach(elem => {
          elem.pkmn_sheet.types.forEach(subelem=>{
            if(subelem.type.name === types('fr')[type].en_label && !type_matching_data.includes(elem)){
              type_matching_data.push(elem)
            }
          })
        });
      })



      filtered_data = type_matching_data;
    }
    return filtered_data;
  }
  render(){
    const expected_length = (this.state.requestLength)-1;
    const {queryParams} = this.props;
    // DEBUG:
    if((this.state.pokemon_data)[expected_length]){
      //console.log(this.state.pokemon_data[5]);
    }

    return(<>
      {/* still loading ? */}
      {this.state.loading && <Pokeball className="pokeball_cover"/>}

      {/* finished loading ? */}
      {!this.state.loading &&
      <>
      <section id="page_content">
        <PokedexNav pokemon_data={this.state.pokemon_data} filters={queryParams}/>
        <h1>pokédex {!this.filterPokemonData(this.state.pokemon_data, queryParams).length ? <span style={{fontSize: "0.4em"}}>(pas de résultat...)</span> : ''}</h1>
        {/* Display Pokemon Table */}
        <PokemonTable
          list={this.filterPokemonData(this.state.pokemon_data, queryParams)}
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
          />
        } />
      </section>
      </>}

    </>);
  }
}
