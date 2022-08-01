import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.background.modal};
  width: 100%;
  height: 50px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.white};
  font-size: 16px;
`;
