import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background.modal};
`;

export const WrapperAnimation = styled.View`
  width: 125;
  height: 125px;
  justify-content: center;
  border-radius: 100px;
  align-items: center;
`;

export const Content = styled.View`
  height: 70%;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  height: 30%;
  background-color: ${({theme}) => theme.colors.types.psychic};
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colors.text.white};
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.colors.text.white};
`;
