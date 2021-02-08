import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Signin from './signin'
import Signup from './signup'


const MainNavigator = createStackNavigator({
  Signin: {screen: Signin},
  Signup: {screen: Signup},
});

const Home = createAppContainer(MainNavigator);
export default Home;
