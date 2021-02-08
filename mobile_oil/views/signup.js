import React from 'react';
import {ImageBackground, Image, TextInput, AppRegistry, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
//import {createStackNavigator, createAppContainer} from 'react-navigation';
//import { Input } from 'react-native-elements';
import { Font } from 'expo';
import {styles} from '../assets/css/signup';
import {general} from '../assets/css/general';
class Signup extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null,
   
  };
 
  constructor(props) {
    super(props);
    this.state = { 
      isShowingText: "yes", 
      text: "" ,
      email: '', 
      FirstName: '',
      LastName: '',
      label: '',
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Light': require('../assets/fonts/OpenSans-Light.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
      'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
      'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    });
    
    this.setState({ fontLoaded: true });
  }
  
  handleFirstName = (text) => {
    this.setState({ FirstName: text, FirstName: "First Name" })
 }
 handleLaststName = (text) => {
  this.setState({ LaststName: text, LastName: "Last Name"  })
}
handleEmail = (text) => {
    
  this.setState({ email: text, email: "Email" })
}


  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
    console.log('email: ' + email + ' password: ' + pass)
 }

 handleAddEvent = () =>{
    
    this.props.navigation.navigate('TermsOfService');
 }

 handleCancel= () =>{
    
    this.props.navigation.navigate('CreateAccount');
 }

render() {
 

  return (
  
  
      <ImageBackground style={general.container_bg} source={require("../assets/img/white.jpg")}>
          <View flex style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Image style={general.img} 
            source={require('../assets/img/cornerRight.png')}
          />
  
          
            <Image style = {general.logo}
            source={require('../assets/img/logo.png')}
          />
      
  

       <Text style = {general.logo} 
      //  style={{marginTop: '30%',fontSize: 22, textAlign: 'center', fontFamily: 'Poppins-Bold' }}
       >
       Sign up for an </Text>
 
       
       <Text style={{fontSize: 21, textAlign: 'center', fontFamily: 'Poppins-Bold', marginBottom: '2%'  }}>Account </Text> 
   
       
        <Text style={styles.label}>{this.state.FirstName}</Text>
        
        <TextInput style = {general.input}
               
               placeholder = "First Name"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"
               onChangeText = {this.handleFirstName }
               />
        
        
         <Text style={styles.label}>{this.state.LastName}</Text>      
     
        <TextInput style = {general.input}
              
              placeholder = "Last Name"
              placeholderTextColor = "lightgrey"
              autoCapitalize = "none"
              onChangeText = {this.handleLaststName}
              />      
        <Text style={styles.label}>{this.state.email}</Text>  
        <TextInput style = {general.input}
              
              placeholder = "Email"
              placeholderTextColor = "lightgrey"
              autoCapitalize = "none"
              onChangeText = {this.handleEmail}
              />     
        
             {
               this.state.fontLoaded ? 
               <Text style={{textAlign: 'center', color: 'grey', marginLeft: '15%', marginRight: '15%', marginTop: 12, fontFamily: 'OpenSans-Light'}}>
               By Creating an account you agree to our  <Text style={{color: '#00CE6B'}}  onPress={this.handleAddEvent} > Terms of service </Text> and privacy policy
             </Text>
             :   <Text style={{textAlign: 'center', color: 'grey', marginLeft: '15%', marginRight: '15%', marginTop: '3%' }}>
             By Creating an account you agree to our  <Text style={{color: '#00CE6B'}}  onPress={this.handleAddEvent} > Terms of service </Text> and privacy policy
           </Text>
             }
         

            <TouchableOpacity
               style = {general.submitButton}
               onPress={this.handleCancel} >
                <Text style = {general.submitButtonText} > SIGN UP </Text>
          </TouchableOpacity>
                
            <View  >
              <Text style={{textAlign: 'center', fontFamily: 'Poppins-Medium'}} >
                Already have an account? 
                  <Text style={{color: 'grey'}} onPress={this.handleCancel}>
                  Log in 
                </Text>
              </Text>
              

            </View>
            <Image style={general.imgbottom}
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
      
//       height: '7%',
//       marginBottom: '0.5%',
//       borderColor: 'lightgrey',
//       borderWidth: 1,
//       paddingLeft: '2%'
//    },
 
//    submitButton: {
//     backgroundColor: '#00CE6B',
//     margin: '3%',
//     height: '7%',
//     borderRadius: 20,
//     marginLeft: '15%',
//     marginRight: '15%',
  
   
    
//    },
//    submitButtonText:{
//     color: 'white',
//     textAlign: 'center',
//     marginTop: '4%',
//     fontSize: 14,
//     fontFamily: 'Poppins-Bold'
//   },
  
//     container: {
//       flex: 1,  
//     },
//     img: { 
//       position: 'absolute',
//       top: 0,
//       right: 0, 
//     },
//     imgbottom: { 
//       position: 'absolute',
//       bottom: 0,
//       left: 0, 
//       //top: '107%',
//      // borderColor: 'blue',
//      // borderWidth: 3,
//     },
//     label: {
//       marginLeft: '15%',
//       marginTop: '1%',
//       fontFamily: 'Poppins-Medium'
//     }
//   });


export default Signup;