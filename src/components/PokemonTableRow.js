import React from 'react';
import {Link} from "react-router-dom";

export default function PokemonTableRow(props){
  const {id, name, spriteSrc, pkmn} = props;
  return(
    <tr>
      <td>
        <Link className="expand_link" to={"/pokedex/" + name.toLowerCase()}>#{id}</Link>
      </td>
      <td>
        <Link className="expand_link" to={"/pokedex/" + name.toLowerCase()}>{name}</Link></td>
      <td>
        <Link to={"/pokedex/" + name.toLowerCase()}><img src={spriteSrc}/></Link>
      </td>
    </tr>
  )
}
