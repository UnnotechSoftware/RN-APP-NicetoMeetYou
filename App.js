import React from 'react';
import Navigation from './navigation/Navigation';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

export default function App() {
  return (   
    <Navigation/>
  );
}

AppRegistry.registerComponent(appName, () => App);