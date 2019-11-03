import React from 'react';
import {
  Link,
} from "react-router-dom";
import {ReactComponent as Close} from '../img/close.svg';
import types from '../Tools/Types.js';

export default function DetailsBody(props) {
  const { pkmn } = props;
  return (
      <div id="details_body">
        {pkmn && <div id="illustration"><img src={pkmn.pkmn_sheet.sprites.front_default}/></div>}
        <div id="details_data">
        {/* deux possibilités pour l'index, la structure de l'API n'est pas parfaite */}
          {pkmn && pkmn.flavor_text_entries[5].language.name == "fr" && <p>{pkmn.flavor_text_entries[5].flavor_text}</p>}
          {pkmn && pkmn.flavor_text_entries[6].language.name == "fr" && <p>{pkmn.flavor_text_entries[6].flavor_text}</p>}
          {pkmn && <ul>
            <li>hauteur: {(pkmn.pkmn_sheet.height)*10}.00 cm</li>
            <li>poids: {(pkmn.pkmn_sheet.weight)/10} kg</li>
            <li>types:
              {pkmn.pkmn_sheet.types.map((elem, index) => <img key= {index} src={types('en')[elem.type.name].src}/>)}
            </li>
          </ul>}
        </div>
      </div>
  );
}
