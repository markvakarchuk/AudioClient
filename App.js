import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppNavigator from './app/nav/AppNavigator';
import color from './app/misc/color';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: color.APP_BG,
  },
};

export default function App() {
  return (
      <NavigationContainer theme={MyTheme}>
        <AppNavigator />
      </NavigationContainer>
  );
}