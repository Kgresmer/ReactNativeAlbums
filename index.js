import { AppRegistry } from 'react-native';
import React from 'react';
import Header from "./components/header";

const App = () => {
  return (
      <Header />
  )
};

AppRegistry.registerComponent('albums', () => App);
