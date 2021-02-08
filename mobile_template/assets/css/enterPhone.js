import {StyleSheet } from 'react-native';


export const styles = {
 
    input: {
      marginLeft: '15%',
      marginRight: '15%',
      width: '80%',
      height: '19%',
     
      borderColor: 'lightgrey',
      borderWidth: 2,
      borderRadius: 5
   },
   submitButton: {
    backgroundColor: '#00CE6B',
    margin: '3%',
    width: '80%',
    justifyContent: 'center',
    height: '17%',
    borderRadius: 20,
    marginLeft: '15%',
    marginRight: '15%',
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
    content: {
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Poppins-Medium'
    },
    
    imageContainer: {
      flexDirection: 'row',
      
    }
}