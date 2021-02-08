
 import React, { Component } from 'react';
 import {Image, TouchableOpacity, TextInput, View, ImageBackground, Text, StyleSheet } from 'react-native';

 import { Font } from 'expo';
 import { Users } from '../utilities/Users';
//  import {styles} from '../assets/css/signin';
 import {general} from '../assets/css/general';
 import {PickerExample} from './PickerExample';

export default class HomeActivity extends Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Italic': require('../assets/fonts/OpenSans-Italic.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
      'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
      'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    });
    
    this.setState({ fontLoaded: true });
  }

  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
  handleEmail = (text) => {
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }
 handleAddEvent = () =>{
   this.props.navigation.navigate('Signup');
}

handleLogin = () =>{
  // handleSubmit(event) {
  // event.preventDefault();
    // const attr = {
    //   sex: this.state.resultstate.sex,
    //   age: this.state.resultstate.age,
    //   evidence: this.state.resultstate.evidence
    // };
   // Diagnose.postdiag(attr)
   Users.Test()
  // .then((res) => this.props.history.push('/components/results', res));
   .then((res)=> console.log(res));
    
  this.props.navigation.navigate('SelectPlan');
}

  render() {
    return (
    <ImageBackground style={general.container_bg} source={require("../assets/img/login-bg.jpg")}>
        <View flex style={{ justifyContent: 'center', alignItems: 'center'}}>
          <Image style={general.img} 
          source={require('../assets/img/cornerRight.png')}
        />

         
          <Image style = {general.logo}
          source={require('../assets/img/logo.png')}
        />
        
        
        <TextInput style = {general.input}
               
               placeholder = "  Email"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
               />
        <TouchableOpacity
               style = {general.submitButton}
               onPress = {this.handleLogin}>
               <Text style = {general.submitButtonText} > LOG IN </Text>
          </TouchableOpacity>
          <View >
               {
               this.state.fontLoaded ? (
                  <Text style={{textAlign: 'center', color: 'grey', fontFamily: 'Poppins-Medium'}}>
                    No Account yet? 
                    <Text style={{color: '#00CE6B'}} onPress={this.handleAddEvent} >
                      Sign up now
                    </Text>
                  </Text>
                ) : null
              }
           </View>         
           </View>
    </ImageBackground>
    );
  }
}
