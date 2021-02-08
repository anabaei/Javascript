import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import EventList from './EventList'


import {createStackNavigator, createAppContainer} from 'react-navigation';
import EventForm from './EventForm';

const MainNavigator = createStackNavigator({
  EventList: {screen: EventList},
  EventForm: {screen: EventForm},
});

const App = createAppContainer(MainNavigator);

export default App;

// export default class App extends React.Component {
//   render() {
   


//     return (
//       <View style={styles.container}>
//         <EventList />
//       </View>
//     );
//   }
// }

// export default StackNavigator({
//   list: {
//     screen: EventList,
//     navigationOptions: () => ({
//       title: 'Your events',
//     })
//   }
// }); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
