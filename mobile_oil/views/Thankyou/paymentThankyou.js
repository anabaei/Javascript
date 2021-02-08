import React from 'react';
import {Image, TextInput, AppRegistry, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
//import {createStackNavigator, createAppContainer} from 'react-navigation';
//import { Input } from 'react-native-elements';
import { Font } from 'expo';

class PaymentThankyou extends React.Component {

  static navigationOptions = {
    //To hide the NavigationBar from current Screen
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

 sendCode = () => {
    this.props.navigation.navigate('EnterPhone');
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

render() {
 

  return (
       
<View style={styles.container}>
   
      <Image style={styles.img} 
        source={require('../../assets/img/cornerRight.png')}
      />
 
    <View style={{height: '25%'}}>
        
    </View>

    <View style={styles.content}>
        
        <Text style={{textAlign: 'center',fontSize: 23, marginLeft: '24%', marginRight: '24%'}}>
         Thank you for you payment!
          </Text>
          
        <Text style={{fontSize: 13, textAlign: 'center', marginLeft: '20%', marginRight: '20%', marginTop: '2%', marginBottom: '5%'}}
>
         We will now validate your phone number 
        </Text>
        <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.sendCode()
               }>
               <Text style = {styles.submitButtonText} > SEND VALIDATION CODE </Text>

        </TouchableOpacity>  
    </View>
    
      <Image style={styles.imgbottom} 
        source={require('../../assets/img/cornerLeft.png')}
      />
        
</View>
      
    
  );
}
}
const styles = StyleSheet.create({
 
    input: {
      marginTop: 6,
      marginLeft: 45,
      marginRight: 45,
      
      height: 40,
     
      borderColor: 'lightgrey',
      borderWidth: 1,
      borderRadius: 5
   },
    header: {
        
        marginLeft: 45,
        marginRight: 45,
        fontSize: 33,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Helvetica',
       
    },
   submitButton: {
    backgroundColor: '#00CE6B',
    justifyContent: 'center',
    height: '19%',
    borderRadius: 30,
    width: '90%',
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center',
    },
    container: {
      flex: 1,
      },   
      img: { 
        position: 'absolute',
        top: 0,
        right: 0, 
      },
    imgbottom: { 
      position: 'absolute',
      bottom: 0,
      left: 0, 
    },
    imageContainer: {
      flexDirection: 'row',
    
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Bold'
  }
    

  });


export default PaymentThankyou;