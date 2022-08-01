import {
  BADGE_TYPE_BUG,
  BADGE_TYPE_DARK,
  BADGE_TYPE_DRAGON,
  BADGE_TYPE_ELECTRIC,
  BADGE_TYPE_FAIRY,
  BADGE_TYPE_FIGHTING,
  BADGE_TYPE_FIRE,
  BADGE_TYPE_FLYING,
  BADGE_TYPE_GHOST,
  BADGE_TYPE_GRASS,
  BADGE_TYPE_GROUND,
  BADGE_TYPE_ICE,
  BADGE_TYPE_NORMAL,
  BADGE_TYPE_POISON,
  BADGE_TYPE_PSYCHIC,
  BADGE_TYPE_ROCK,
  BADGE_TYPE_STEEL,
  BADGE_TYPE_WATER,
} from '../../../../../assets/img';

export const badgeType = (type: string) => {
  switch (type) {
    case 'bug':
      return BADGE_TYPE_BUG;

    case 'dark':
      return BADGE_TYPE_DARK;

    case 'dragon':
      return BADGE_TYPE_DRAGON;

    case 'electric':
      return BADGE_TYPE_ELECTRIC;

    case 'fairy':
      return BADGE_TYPE_FAIRY;

    case 'fighting':
      return BADGE_TYPE_FIGHTING;

    case 'fire':
      return BADGE_TYPE_FIRE;

    case 'flying':
      return BADGE_TYPE_FLYING;

    case 'ghost':
      return BADGE_TYPE_GHOST;

    case 'grass':
      return BADGE_TYPE_GRASS;

    case 'ground':
      return BADGE_TYPE_GROUND;

    case 'ice':
      return BADGE_TYPE_ICE;

    case 'normal':
      return BADGE_TYPE_NORMAL;

    case 'poison':
      return BADGE_TYPE_POISON;

    case 'psychic':
      return BADGE_TYPE_PSYCHIC;

    case 'rock':
      return BADGE_TYPE_ROCK;

    case 'steel':
      return BADGE_TYPE_STEEL;

    case 'water':
      return BADGE_TYPE_WATER;

    default:
      break;
  }
};
