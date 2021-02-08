
import React from 'react';

import Home from './src/views/Home'
import Form from './src/views/Form'
import Operation from './src/components/operation/index'
//import Driling from './src/components/driling/index'
import DrillingResult from './src/components/driling/result' 
import {createStackNavigator, createAppContainer} from 'react-navigation';



const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Form: {screen: Form},
  // Driling: {screen: Driling},
  Profile: {screen: Operation},
  DrillingResult: {screen: DrillingResult}
   },
  {
    initialRouteName: 'Home'
  }
);

const App = createAppContainer(MainNavigator);
export default App;

