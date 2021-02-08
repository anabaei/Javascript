import React from 'react';
import {Image, TextInput, AppRegistry, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
//import {createStackNavigator, createAppContainer} from 'react-navigation';
//import { Input } from 'react-native-elements';
import {styles} from '../assets/css/termsofService';

class TermsOfService extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isShowingText: "yes", text: "" ,email: '', password: ''};
  }
  
  handleEmail = (text) => {
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }

  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
    console.log('email: ' + email + ' password: ' + pass)
 }

render() {
 

  return (
       
<View>
    <View  style={styles.imageContainer}>
      <Image style={styles.img} flex right 
        source={require('../assets/img/cornerRight.png')}
      />
   </View>

    <View style={styles.container}>
        
        <Text style={{fontSize: 44, textAlign: 'center'}}> Terms of Service  </Text>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed eros lorem. Etiam non condimentum magna, eget sodales est. Maecenas id est diam. Suspendisse potenti.
        </Text>
    </View>
    <View  style={styles.imageContainer}>
      <Image style={{height: 140, marginBottom: 0}} flex left 
        source={require('../assets/img/cornerLeft.png')}
      />
   </View>      
</View>
      
    
  );
}
}
// const styles = StyleSheet.create({
 
//     input: {
//       marginTop: 6,
//       marginLeft: 45,
//       marginRight: 45,
      
//       height: 40,
     
//       borderColor: 'lightgrey',
//       borderWidth: 1,
//       borderRadius: 5
//    },
//     header: {
        
//         marginLeft: 45,
//         marginRight: 45,
//         fontSize: 33,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         fontFamily: 'Helvetica',
       
//     },
//    submitButton: {
//     backgroundColor: '#00CE6B',
//     padding: 10,
//     margin: 15,
//     height: 40,
//     marginLeft: 65,
//     marginRight: 65,
//     borderRadius: 14
//    },
//    submitButtonText:{
//       color: 'white',
//       textAlign: 'center',
//     },
//     container: {
//         display: 'flex',
//         backgroundColor: '#fff',
//         marginLeft: 30,
//         marginRight: 30, 
//         height: 500,
//         justifyContent: 'center',
//         // borderColor: 'red',
//         //   borderWidth: 2
//       },   
//     img: {  
//      // borderColor: 'blue',
//      // borderWidth: 3,
//      height: 100,
//     },
//     imageContainer: {
//       flexDirection: 'row',
      
//     }
    
    

//   });


export default TermsOfService;