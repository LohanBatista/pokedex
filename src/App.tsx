/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from './global/styles/theme';

import {translate} from './locales';
import WelcomePage from './pages/Welcome';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background.modal}
      />
      <WelcomePage />
    </ThemeProvider>
  );
};

export default App;
