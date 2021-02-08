import React from 'react';
import {ImageBackground, Image, TextInput, AppRegistry, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import { Font } from 'expo';
import {styles} from '../../assets/css/createAccount';
import {general} from '../../assets/css/general';

class CreateAccount extends React.Component {
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
 
 
 handleCancel= () =>{
    
    this.props.navigation.navigate('Welcome1');
 }
 next= () =>{
    
  this.props.navigation.navigate('EmailConfirmed');
}

render() {
 

  return (
       
    <ImageBackground style={general.container_bg} source={require("../../assets/img/white.jpg")}>
          <View flex style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Image style={general.img} 
            source={require('../../assets/img/cornerRight.png')}
          />
    
   
    
     <View flex style={general.content}> 
           <View>
              <Text style={general.header}>
                  Your account has been created 
                </Text>  
                <View style={general.body}>  
                    <Text onPress = {this.next}>
                        Please verify your email consectur  solving heuristic of making the locally 
                        optimal choice at each stage[1] with the intent of finding a global optimum. 
                        In many problems, a greedy strategy does not usually produce an optimal solution     
                    </Text>
                </View> 
           </View>  
     </View>
         

            
            <Image style={general.imgbottom}
        source={require('../../assets/img/cornerLeft.png')}
      />
    </View>
</ImageBackground>
  );
}
}
// const styles = StyleSheet.create({
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
//     },
//     content: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginLeft: '17%', 
//       marginRight: '17%',
      
//     },
//     header: {
//      fontSize: 23,
//      textAlign: 'center',
//      justifyContent: 'center',
//      alignItems: 'center',
//      fontFamily: 'Poppins-Bold',
//      marginBottom: '2%',
//     },

//     body: {
//       marginLeft: '4%', 
//       marginRight: '4%',
//       fontSize: 12,
     
//     }
//   });


export default CreateAccount;