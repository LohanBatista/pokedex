import styled from 'styled-components/native';

interface PokemonTypeProps {
  type: string;
}

export const PokemonCard = styled.TouchableOpacity<PokemonTypeProps>`
  border-radius: 10px;
  margin-top: 30px;
  flex-direction: row;
  padding: 20px;
  background-color: ${({theme, type}) => theme.colors.backgroundTypes[type]};
`;

export const LeftSide = styled.View`
  width: 50%;
  position: relative;
`;
export const RightSide = styled.View`
  flex: 1;
  backgroundcolor: ${({theme}) => theme.colors.background};
`;
export const PokemonId = styled.Text`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: ${({theme}) => theme.colors.text.dark};
`;
export const PokemonName = styled.Text`
  font-weight: bold;
  font-size: 25px;
  line-height: 31px;
  text-transform: capitalize;
  color: ${({theme}) => theme.colors.text.white};
`;
export const ImageCardDetailLeftSide = styled.Image`
  position: absolute;
  left: 90px;
  top: -10px;
`;

export const PokemonContentType = styled.View`
  flex-direction: row;
`;
export const PokemonType = styled.Image`
  margin-left: 5px;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
`;
