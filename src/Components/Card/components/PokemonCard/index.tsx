import React from 'react';

import {CARD_DOTS} from '../../../../assets/img';
import {badgeType} from './helpers/bagesTypes';
import * as S from './styles';
import Pokemon from '../../../../interfaces/index';

interface PokemonCardProps {
  data: Pokemon;
}

const PokemonCard = ({data, ...rest}: Props) => {
  return (
    <S.PokemonCard type="dragon" {...rest}>
      <S.LeftSide>
        <S.PokemonId>{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ImageCardDetailLeftSide source={CARD_DOTS} />
        <S.PokemonContentType>
          <S.PokemonType source={badgeType('ghost')} />
        </S.PokemonContentType>
      </S.LeftSide>
      <S.RightSide></S.RightSide>
    </S.PokemonCard>
  );
};

export default PokemonCard;
