import React from 'react';
import {
  Link,
} from "react-router-dom";
import {ReactComponent as Close} from '../img/close.svg';
import unblur from '../Tools/Unblur.js';

export default function DetailsHeader(props) {
  const { pkmn } = props
  return (
    <div id="details_header">

    {pkmn && <h2>#{pkmn.id} {pkmn.names[6].name}</h2>}
    {pkmn && <h3>{pkmn.genera[6].genus} —</h3>}


      <Link
        onClick={(event) => unblur()}
        id="close_link"
        to="/pokedex">
        <Close/>
      </Link>
    </div>
  );
}
