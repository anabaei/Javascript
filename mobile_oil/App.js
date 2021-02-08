import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Singin from './views/signin'

import Signup from './views/signup'
import Thankyou from './views/thankyou'
import TermsOfService from './views/termsOfService'
import Welcome1 from './views/welcome/welcome1'
import Welcome2 from './views/welcome/welcome2'
import Welcome3 from './views/welcome/welcome3'
import SelectPlan from './views/selectPlan'
import Payment from './views/payment'
import PaymentThankyou from './views/Thankyou/paymentThankyou'
import CheckCode from './views/checkCode'
import EnterPhone from './views/enterPhone'
import CreateAccount from './views/welcome/createAccount'
import EmailConfirmed from './views/welcome/emailConfirmed'
import Facescan from './views/welcome/facescan'

const App = createStackNavigator({
  Singin: {screen: Singin},
  Signup: {screen: Signup},
  Thankyou: {screen: Thankyou},
  TermsOfService: {screen: TermsOfService},
  SelectPlan: {screen: SelectPlan},
  Payment: {screen: Payment},
  
  PaymentThankyou: {screen: PaymentThankyou},
  CheckCode: {screen: CheckCode},
  EnterPhone: {screen: EnterPhone},

  Welcome1: {screen: Welcome1},
  Welcome2: {screen: Welcome2},
  Welcome3: {screen: Welcome3},

  CreateAccount: {screen: CreateAccount},
  EmailConfirmed: {screen: EmailConfirmed},
  Facescan: {screen: Facescan},

  // defaultNavigationOptions: {
  //   header: null
  // },

});

export default createAppContainer(App);
// const App = createAppContainer(MainNavigator);
// export default App;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text> up App.js to start working on your app!</Text>
//         <Signup />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
