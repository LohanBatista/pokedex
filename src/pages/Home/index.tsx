import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text} from 'react-native';
import Card from '../../Components/Card';

import {getAllPokemon} from './callbacks';

import * as S from './styles';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const response = getAllPokemon();
    response.then(data => {
      setPokemons(data);
    });
  }, []);

  console.log(pokemons);
  return (
    <S.Container>
      <Card data={pokemons} />
      {/* <FlatList
        data={pokemons}
        renderItem={({item}) => <Text>{item.name}</Text>}
      /> */}
    </S.Container>
  );
};

export default HomePage;
