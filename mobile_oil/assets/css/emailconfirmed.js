
import {StyleSheet } from 'react-native';

export const styles = {
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
    content: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '17%', 
      marginRight: '17%',   
    },
    header: {
     fontSize: 23,
     textAlign: 'center',
     justifyContent: 'center',
     alignItems: 'center',
     fontFamily: 'Poppins-Bold',
     
    },
    body: {
      marginLeft: '4%', 
      marginRight: '4%',
      fontSize: 12,
      fontFamily: 'Poppins-Medium'
    },
    submitButton: {
      backgroundColor: '#00CE6B',
      justifyContent: 'center',
      height: '10%',
      borderRadius: 20,
      width: '90%',
     },
     submitButtonText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
      }
  }