import React from 'react';
import * as S from './styles';

interface ButtonProps {
  onPress: () => void;
  title: string;
}

const Button = (props: ButtonProps) => {
  const {onPress, title} = props;
  return (
    <S.Container onPress={onPress}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Button;
