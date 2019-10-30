
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

export default function types(language){
  return {
    // english index
    en: {bug,
    dragon,
    electric,
    fighting,
    fire,
    flying,
    ghost,
    grass,
    ground,
    ice,
    normal,
    poison,
    psychic,
    rock,
    water},
    // french index if different
    fr: {insecte: bug,
    dragon,
    électrique: electric,
    combat: fighting,
    feu: fire,
    vol: flying,
    spectre: ghost,
    plante: grass,
    sol: ground,
    glace: ice,
    normal,
    poison,
    psy: psychic,
    roche: rock,
    eau: water},
  }[language]
}
