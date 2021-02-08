import React from 'react';
import {Image, TextInput, AppRegistry, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import { Font } from 'expo';

import {styles} from '../assets/css/enterPhone';

class EnterPhoneNumber extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { isShowingText: "yes", text: "" ,email: '', password: '', fontLoaded: false};
  }
  
  handleEmail = (text) => {
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }
 handleAddEvent = () =>{
   this.props.navigation.navigate('Signup');
}

  checkCode = () => {
   this.props.navigation.navigate("CheckCode");
 }
 async componentDidMount() {
  await Font.loadAsync({
   
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
 
  });
  
  this.setState({ fontLoaded: true });
}

render() {
 

  return (
    
    
  <View style={styles.container}>
   

  
      <Image style={styles.img} flex right 
        source={require('../assets/img/cornerRight.png')}
      />
     <View style={{height: '25%'}}></View>
   
    <View style={styles.content}>
   
    
     
        <Text style={{textAlign: 'center', marginBottom: 10, fontSize: 16, marginLeft: '25%', marginRight: '25%' }}> 
          Please Enter Your Phone Number
        </Text>
      
       <TextInput style = {styles.input}
               
               placeholder = "  777 777 2777"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
               />
           
          <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.checkCode()
               }>
               <Text style = {styles.submitButtonText}> SEND VALIDATION CODE </Text>

            </TouchableOpacity>     
        
    </View> 
  
      <Image style={styles.imgbottom}
        source={require('../assets/img/cornerLeft.png')}
      />
      
  </View>
      
    
  );
}
}
// const styles = StyleSheet.create({
 
//     input: {
//       marginLeft: '15%',
//       marginRight: '15%',
//       width: '80%',
//       height: '19%',
     
//       borderColor: 'lightgrey',
//       borderWidth: 2,
//       borderRadius: 5
//    },
//    submitButton: {
//     backgroundColor: '#00CE6B',
//     margin: '3%',
//     width: '80%',
//     justifyContent: 'center',
//     height: '17%',
//     borderRadius: 20,
//     marginLeft: '15%',
//     marginRight: '15%',
//    },
//    submitButtonText:{
//       color: 'white',
//       textAlign: 'center',
      
//     },
//     container: {
//       flex: 1,
//       },   
//       img: { 
//         position: 'absolute',
//         top: 0,
//         right: 0, 
//       },
//     imgbottom: { 
//       position: 'absolute',
//       bottom: 0,
//       left: 0, 
//     },
//     content: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontFamily: 'Poppins-Medium'
//     },
    
//     imageContainer: {
//       flexDirection: 'row',
      
//     }
    
  

    
    

//   });


export default EnterPhoneNumber;