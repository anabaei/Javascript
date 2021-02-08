
import React from 'react';
import {ImageBackground, Image, TextInput, AppRegistry, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import { Font } from 'expo';
import {styles} from '../../assets/css/emailconfirmed';
import {general} from '../../assets/css/general';

class EmailConfirmed extends React.Component {
  static navigationOptions = {
    header: null
  };
 
  constructor(props) {
    super(props);
    this.state = { 
    
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Light': require('../../assets/fonts/OpenSans-Light.ttf'),
      'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
      'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
      'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    });
    
    this.setState({ fontLoaded: true });
  }
 
 
  handleCancel= () =>
  { 
      this.props.navigation.navigate('Welcome1');
  }
  
  facescan = () =>
  {
    this.props.navigation.navigate('Facescan');
  }

render() {
 

  return (
       
    <ImageBackground style={general.container_bg} source={require("../../assets/img/white.jpg")}>
    <View flex style={{ justifyContent: 'center', alignItems: 'center'}}>
      <Image style={general.img} 
      source={require('../../assets/img/cornerRight.png')}
    />
    
   
    <Text style={general.header}>
        Thank you
      </Text>  
            
    <Text style={general.body}>
        Your email has been confirmed
    </Text>
               
           
    <TouchableOpacity
               style = {general.submitButton}
               onPress={this.facescan}
               >
               <Text style = {general.submitButtonText}> Next </Text>

    </TouchableOpacity>
     

            <Image style={general.imgbottom}
        source={require('../../assets/img/cornerLeft.png')}
      />
  
</View>

</ImageBackground>
  );
}
}


export default EmailConfirmed;