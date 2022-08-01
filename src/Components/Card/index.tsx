import React from 'react';

import PokemonCard from './components/PokemonCard';
import * as S from './styles';

const Card = (props: any) => {
  const {data} = props;
  return (
    <S.PokemonList
      keyExtractor={item => item.key}
      data={data}
      renderItem={({item, index}) => <PokemonCard data={item} />}
    />
  );
};

export default Card;
