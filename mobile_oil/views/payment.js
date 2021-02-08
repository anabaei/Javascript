import React from 'react';
import {ImageBackground, Image, TextInput, AppRegistry, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
//import {createStackNavigator, createAppContainer} from 'react-navigation';
//import { Input } from 'react-native-elements';
import { Font } from 'expo';
import {styles} from '../assets/css/payment';
import {general} from '../assets/css/general';

class Payment extends React.Component {

  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };

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

 handleAddEvent = () =>{
    
    this.props.navigation.navigate('TermsOfService');
 }

 handleCancel= () =>{
    
    this.props.navigation.navigate('Welcome1');
 }

 back= () =>{
   this.props.navigation.navigate('SelectPlan');
  
}

 pay = (info1, info2) => {
    this.props.navigation.navigate('PaymentThankyou');
 }

render() {
 

  return (

    <ImageBackground style={general.container_bg} source={require("../assets/img/white.jpg")}>
   

    <View flex style={{ justifyContent: 'center', alignItems: 'center'}}>
    <Text style={styles.back} 
    onPress = {
      () => this.back()
   }
    >
     {"<"} Back
     </Text>
      <Image style={general.img} 
      source={require('../assets/img/cornerRight.png')}
    />
       
   

    <View style={styles.content}>
        
      <TextInput style = {styles.input}
               
               placeholder = "  NAME ON CARD"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
               />
      <TextInput style = {styles.input}
              
              placeholder = "  Input"
              placeholderTextColor = "lightgrey"
              autoCapitalize = "none"
              onChangeText = {this.handleEmail}
              />        
        <View style={{flexDirection: 'row',marginLeft: '15%',marginRight: '15%', marginTop: '2%', marginBottom: '3%' }} row>
            <TextInput style={{ 
             marginTop: '1%',
            
             height: '130%',
             width: '48%',
             marginRight: '2%',
             
             borderColor: 'lightgrey',
             borderWidth: 1,
             borderRadius: 1
            }} 
               placeholder = "  inp"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
               />
               <TextInput style={{ 
                 marginTop: '1%',
                 height: '130%',
                 width: '49%',
                
                 borderColor: 'lightgrey',
                 borderWidth: 1,
                 borderRadius: 1
                }} 
               
               placeholder = "  Input"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
               />
        </View >
        
       
        <TextInput style = {styles.input}
               
               placeholder = "  Input"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
               />
        <TextInput style = {styles.input}
                
                placeholder = "  Input"
                placeholderTextColor = "lightgrey"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}
                />
        
       <TextInput style = {styles.input}
               
               placeholder = "  Input"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
               />
         <TextInput style = {styles.input}
           
               placeholder = "  Input"
               placeholderTextColor = "lightgrey"
               
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}
               /> 
             
                    
          <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.pay(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText} > PAY </Text>

            </TouchableOpacity>     
            <View  >
              <Text style={{textAlign: 'center', color: 'grey'}} onPress={this.handleCancel}>
                 Cancel
               </Text>

            </View>
    </View>
   
    <Image style={styles.imgbottom}
        source={require('../assets/img/cornerLeft.png')}
      />   
       
</View>
     </ImageBackground> 
    
  );
}
}
// const styles = StyleSheet.create({
 
//     input: {
    
//       marginLeft: '15%',
//       marginRight: '15%',
//       marginTop: '2%',
//       height: '11%',
     
//       borderColor: 'lightgrey',
//       borderWidth: 1,
//       borderRadius: 1
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
//     imageContainer: {
//       flexDirection: 'row',
      
//     },
//     inputSmall:{
//         marginTop: 6,
      
        
//         height: 40,
       
//         borderColor: 'lightgrey',
//         borderWidth: 1,
//         borderRadius: 5
//     },
//     content: {
//       marginTop: '23%',
//       paddingTop: '11%',
     
//       fontFamily: 'Poppins-Bold'
//     },
//     back: {
//       color: '#00CE6B',
//       marginTop: '7%',
//       marginLeft: '2%'
//     }
    
    

//   });


export default Payment;