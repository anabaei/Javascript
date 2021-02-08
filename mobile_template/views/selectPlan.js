import React from 'react';
import {ImageBackground , Image, TextInput, AppRegistry, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
//import {createStackNavigator, createAppContainer} from 'react-navigation';
//import { Input } from 'react-native-elements';
import { Font } from 'expo';
import {styles} from '../assets/css/selectPlan';
import {general} from '../assets/css/general';

class SelectPlan extends React.Component {

  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { isShowingText: "yes", text: "" ,email: '', password: '', fontLoaded: false};
  }

  async componentDidMount() {
    await Font.loadAsync({
 
      'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  
  handleEmail = (text) => {
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }

 handleStandard = () => {
  
    this.props.navigation.navigate('Payment');
 }

 handleAdvance = () => {
    this.props.navigation.navigate('Payment');
 }


render() {
 

  return (
       
 
    <ImageBackground style={general.container_bg} source={require("../assets/img/white.jpg")}>
          <View flex style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Image style={general.img} 
            source={require('../assets/img/cornerRight.png')}
          />
   
        

        
        <Text style={{fontSize: 23, marginTop: '23%', marginBottom: '4%'}} > SELECT PLAN </Text>
       
        <View 
         flex style={{ width: '60%', borderColor: 'lightgrey', borderWidth: 1, marginTop: 7,justifyContent: 'center', alignItems: 'center'}}>
       
           <Text onPress={this.handleStandard}  style={{fontSize: 14}}>
               BASIC
           </Text>
        
        </View>
        <View 
        flex style={{ width: '60%', borderColor: 'lightgrey', borderWidth: 1, marginTop: 7,justifyContent: 'center', alignItems: 'center'}}>
        
        <Text onPress={this.handleAdvance}  style={{justifyContent: 'center', fontSize: 14}}>
               PRO
           </Text>
           
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
//       flex: 1,  
//     },  
//     img: { 
//       position: 'absolute',
//       top: 0,
//       right: 0, 
//     },
//     imageContainer: {
//       flexDirection: 'row',
      
//     },
//     imgbottom: { 
//       position: 'absolute',
//       bottom: 0,
//       left: 0, 
//     },
//     content: {
//       paddingTop: '11%',
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontFamily: 'Poppins-Bold'
      
      
//     },
    
    

//   });


export default SelectPlan;