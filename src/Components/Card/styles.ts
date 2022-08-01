import styled from 'styled-components/native';

interface PokemonTypeProps {
  type: string;
}

export const PokemonList = styled.FlatList``;

export const PokemonCard = styled.TouchableOpacity<PokemonTypeProps>`
  border-radius: 10px;
  margin-top: 30px;
  flex-direction: row;
  padding: 20px;
  background-color: ${({theme, type}) => theme.colors.background[type]};
`;

export const LeftSide = styled.View`
  flex: 1;
  backgroundcolor: ${({theme}) => theme.colors.background};
`;
export const RightSide = styled.View`
  flex: 1;
  backgroundcolor: ${({theme}) => theme.colors.background};
`;
export const PokemonId = styled.Text``;
export const PokemonName = styled.Text``;
export const ImageCardDetailLeftSide = styled.Image`
  resize-mode: contain;
`;

export const PokemonContentType = styled.View``;
export const PokemonType = styled.Image``;
