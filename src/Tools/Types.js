
import bug from '../img/types/bug.png';
import dark from '../img/types/dark.png';
import dragon from '../img/types/dragon.png';
import electric from '../img/types/electric.png';
import fairy from '../img/types/fairy.png';
import fire from '../img/types/fire.png';
import fighting from '../img/types/fighting.png';
import flying from '../img/types/flying.png';
import ghost from '../img/types/ghost.png';
import grass from '../img/types/grass.png';
import ground from '../img/types/ground.png';
import ice from '../img/types/ice.png';
import normal from '../img/types/normal.png';
import poison from '../img/types/poison.png';
import psychic from '../img/types/psychic.png';
import rock from '../img/types/rock.png';
import steel from '../img/types/steel.png';
import unknown from '../img/types/unknown.png';
import water from '../img/types/water.png';

// following parameters, return either an object or an array of french or english types with both labels and png sources
export default function types(language, type='obj'){
  return type=='array' ?
  { // AS ARRAYS
    en: [
      {fr_label:'insecte', en_label:'bug', src: bug},
      {fr_label:'dragon', en_label:'dragon', src: dragon},
      {fr_label:'électrique', en_label:'electric', src: electric},
      {fr_label:'combat', en_label:'fighting', src: fighting},
      {fr_label:'feu', en_label:'fire', src: fire},
      {fr_label:'vol', en_label:'flying', src: flying},
      {fr_label:'spectre', en_label:'ghost', src: ghost},
      {fr_label:'plante', en_label:'grass', src: grass},
      {fr_label:'sol', en_label:'ground', src: ground},
      {fr_label:'glace', en_label:'ice', src: ice},
      {fr_label:'normal', en_label:'normal', src: normal},
      {fr_label:'poison', en_label:'poison', src: poison},
      {fr_label:'psy', en_label:'psychic', src: psychic},
      {fr_label:'roche', en_label:'rock', src: rock},
      {fr_label:'eau', en_label:'water', src: water},
    ],
    // french index if different
    fr: [
      {fr_label:'insecte', en_label:'bug', src: bug},
      {fr_label:'dragon', en_label:'dragon', src: dragon},
      {fr_label:'électrique', en_label:'electric', src: electric},
      {fr_label:'combat', en_label:'fighting', src: fighting},
      {fr_label:'feu', en_label:'fire', src: fire},
      {fr_label:'vol', en_label:'flying', src: flying},
      {fr_label:'spectre', en_label:'ghost', src: ghost},
      {fr_label:'plante', en_label:'grass', src: grass},
      {fr_label:'sol', en_label:'ground', src: ground},
      {fr_label:'glace', en_label:'ice', src: ice},
      {fr_label:'normal', en_label:'normal', src: normal},
      {fr_label:'poison', en_label:'poison', src: poison},
      {fr_label:'psy', en_label:'psychic', src: psychic},
      {fr_label:'roche', en_label:'rock', src: rock},
      {fr_label:'eau', en_label:'water', src: water},
  ]}[language]
  : { // AS OBJECTS (DEFAULT CASE)
    // english index
    en: {
      bug:{fr_label:'insecte', en_label:'bug', src: bug},
      dragon:{fr_label:'dragon', en_label:'dragon', src: dragon},
      electric:{fr_label:'électrique', en_label:'electric', src: electric},
      fighting:{fr_label:'combat', en_label:'fighting', src: fighting},
      fire:{fr_label:'feu', en_label:'fire', src: fire},
      flying:{fr_label:'vol', en_label:'flying', src: flying},
      ghost:{fr_label:'spectre', en_label:'ghost', src: ghost},
      grass:{fr_label:'plante', en_label:'grass', src: grass},
      ground:{fr_label:'sol', en_label:'ground', src: ground},
      ice:{fr_label:'glace', en_label:'ice', src: ice},
      normal:{fr_label:'normal', en_label:'normal', src: normal},
      poison:{fr_label:'poison', en_label:'poison', src: poison},
      psychic:{fr_label:'psy', en_label:'psychic', src: psychic},
      rock:{fr_label:'roche', en_label:'rock', src: rock},
      water:{fr_label:'eau', en_label:'water', src: water},
    },
    // french index if different
    fr: {
      insecte:{fr_label:'insecte', en_label:'bug', src: bug},
      dragon:{fr_label:'dragon', en_label:'dragon', src: dragon},
      électrique:{fr_label:'électrique', en_label:'electric', src: electric},
      combat:{fr_label:'combat', en_label:'fighting', src: fighting},
      feu:{fr_label:'feu', en_label:'fire', src: fire},
      vol:{fr_label:'vol', en_label:'flying', src: flying},
      spectre:{fr_label:'spectre', en_label:'ghost', src: ghost},
      plante:{fr_label:'plante', en_label:'grass', src: grass},
      sol:{fr_label:'sol', en_label:'ground', src: ground},
      glace:{fr_label:'glace', en_label:'ice', src: ice},
      normal:{fr_label:'normal', en_label:'normal', src: normal},
      poison:{fr_label:'poison', en_label:'poison', src: poison},
      psy:{fr_label:'psy', en_label:'psychic', src: psychic},
      roche:{fr_label:'roche', en_label:'rock', src: rock},
      eau:{fr_label:'eau', en_label:'water', src: water},
  }}[language]
}
