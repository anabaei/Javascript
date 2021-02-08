import React from 'react';
import {ImageBackground, Image, TextInput, AppRegistry, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
//import {createStackNavigator, createAppContainer} from 'react-navigation';
//import { Input } from 'react-native-elements';
import {styles} from '../../assets/css/welcome';
import {general} from '../../assets/css/general';

class Welcome1 extends React.Component {
  static navigationOptions = {
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

 handleWelcome1 = () => {
    console.log("press!");
    this.props.navigation.navigate('Welcome1');
 }
 handleWelcome2 = () => {
  
    this.props.navigation.navigate('Welcome2');
 }
 handleWelcome3 = () => {
  
    this.props.navigation.navigate('Welcome3');
 }

 handleStart = () => {
  
    this.props.navigation.navigate('Singin');
 }

  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
    console.log('email: ' + email + ' password: ' + pass)
 }

render() {
 

  return (


    <ImageBackground style={general.container_bg} source={require("../../assets/img/white.jpg")}>
    <View flex style={{ justifyContent: 'center', alignItems: 'center'}}>
      <Image style={general.img} 
      source={require('../../assets/img/cornerRight.png')}
    />
    
     
           <View>
              <Text style={general.header}> Welcome  </Text>
                <Text style={general.body} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed eros lorem. Etiam non condimentum magna, eget sodales est. Maecenas id est diam. Suspendisse potenti.
                </Text>
                <Text style={{flexDirection: 'row', textAlign: 'center', fontSize: 34, color: 'lightgrey' }}>
                  <Text onPress={this.handleWelcome1}>  .   </Text>
                  <Text onPress={this.handleWelcome2}>   .   </Text>
                  <Text onPress={this.handleWelcome3}>   .   </Text>
                </Text>

                 
           </View>  
           <TouchableOpacity
                      style = {general.submitButton}
                      onPress = {
                          () => this.handleStart()
                      }>
                      <Text style = {general.submitButtonText} > LETS START </Text>

                </TouchableOpacity>  
    

            <Image style={styles.imgbottom}
        source={require('../../assets/img/cornerLeft.png')}
      />
  
   </View>
</ImageBackground>

  );
}
}


export default Welcome1;