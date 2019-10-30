import React, {Component} from 'react';
import {
  Link,
} from "react-router-dom";
import {ReactComponent as Close} from '../img/close.svg';
import PkmnByEnName from '../Tools/PkmnByEnName';

export default class DetailsFooter extends Component {

  constructor(props){
    super(props);
  }


  render(){
    const {data, pkmn} = this.props;
    let evolves_from = '';
    let evolves_to = '';
    if(pkmn && pkmn.evolves_from){
       evolves_from = PkmnByEnName(data, pkmn.evolves_from)[0] ? PkmnByEnName(data, pkmn.evolves_from)[0].names[6].name : "";
    }
    if(pkmn && pkmn.evolves_to){
       evolves_to = PkmnByEnName(data, pkmn.evolves_to)[0] ? PkmnByEnName(data, pkmn.evolves_to)[0].names[6].name : "";
    }
    return (
      <div id="details_footer">
        {
          pkmn && <>
          <span>{evolves_from && <Link to={"/pokedex/"+evolves_from.toLowerCase()}>Evolue depuis : {evolves_from}</Link>}</span>
          <span>{evolves_to && <Link to={"/pokedex/"+evolves_to.toLowerCase()}>Evolue vers : {evolves_to}</Link>}</span>
        </>}
      </div>
    )
  }
}
