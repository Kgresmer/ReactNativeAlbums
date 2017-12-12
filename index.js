import { AppRegistry } from 'react-native';
import React from 'react';
import Header from "./components/header";

const App = () => {
  return (
      <Header headerText={'Albums'} />
  )
};

AppRegistry.registerComponent('albums', () => App);
