import React from 'react';
import {Image, TextInput, AppRegistry, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import { Font } from 'expo';
import {styles} from '../../assets/css/facescan';

class Facescan extends React.Component {
  static navigationOptions = {
    header: null
  };
 
  constructor(props) {
    super(props);
    this.state = { 
    
      fontLoaded: false,
    };
  }
  welcome = () =>
  {
    this.props.navigation.navigate('Welcome1');
  }

render() {
return (     
<View style={styles.container}>
     <View flex style={styles.content}> 
           <View>
              <Text style={styles.header} onPress={this.welcome} > 
                  Face Scan
              </Text>  
           </View> 
     </View>
</View>
  );
  }
}
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,  
//       backgroundColor: 'darkgrey',
//       color: 'black'
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
     
//     },
//     body: {
//       marginLeft: '4%', 
//       marginRight: '4%',
//       fontSize: 12,
//       fontFamily: 'Poppins-Medium'
//     },
//     submitButton: {
//       backgroundColor: '#00CE6B',
//       justifyContent: 'center',
//       height: '10%',
//       borderRadius: 20,
//       width: '90%',
//      },
//      submitButtonText:{
//         color: 'white',
//         textAlign: 'center',
//         fontSize: 20,
//       }
//   });


export default  Facescan;