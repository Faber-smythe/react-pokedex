import React from 'react';
import {
  useParams,
} from "react-router-dom";
import DetailsHeader from '../components/DetailsHeader.js';
import DetailsBody from '../components/DetailsBody.js';
import DetailsFooter from '../components/DetailsFooter.js';
import blur from '../Tools/Blur.js';

export default function PokemonDetails(props) {


  let { name } = useParams();
  const pkmn = (props.findPkmn(props.data, name))[0];

  blur();
  return (
    <section id="details_section">
      <DetailsHeader pkmn={pkmn}/>
      <DetailsBody pkmn={pkmn}/>
      <DetailsFooter
        expected_length={props.expected_length}
        data={props.data}
        pkmn={pkmn}
        />
    </section>
  );
}
