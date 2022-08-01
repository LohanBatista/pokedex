import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from './global/styles/theme';

import {translate} from './locales';
import HomePage from './pages/Home';
import WelcomePage from './pages/Welcome';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background.modal}
      />
      {/* <WelcomePage /> */}
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
