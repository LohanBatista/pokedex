import React from 'react';
import * as S from './styles';
import AnimatedLottieView from 'lottie-react-native';
import pokeLoading from './pokeballLoading.json';
import {translate} from '../../locales';
import Button from '../../Components/Button';

const WelcomePage = () => {
  return (
    <S.Container>
      <S.Content>
        <S.WrapperAnimation>
          <AnimatedLottieView
            style={{width: 80}}
            source={pokeLoading}
            autoPlay
          />
        </S.WrapperAnimation>
        <S.Title>{translate('WelcomePage.title')}</S.Title>
        <S.Subtitle>{translate('WelcomePage.subtitle')}</S.Subtitle>
      </S.Content>
      <S.Footer>
        <Button onPress={() => {}} title="Iniciar" />
      </S.Footer>
    </S.Container>
  );
};

export default WelcomePage;
