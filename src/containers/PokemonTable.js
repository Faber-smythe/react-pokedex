import React from 'react';
import PokemonTableRow from '../components/PokemonTableRow.js'

export default function PokemonTable(props) {


  const {list} = props;
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>POKEMON</th>
          <th>VISUEL</th>
        </tr>
      </thead>
      <tbody>
        {list.map((pkmn, index)=>(
          <PokemonTableRow
            key={index}
            id={pkmn.id}
            name={pkmn.names[6].name}
            spriteSrc={pkmn.pkmn_sheet.sprites.front_default}
            pkmn={pkmn}
          />
        ))}
      </tbody>
    </table>
  );
}
