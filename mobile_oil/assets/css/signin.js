import {StyleSheet } from 'react-native';


export const styles = {
    container_bg: {
        flex: 1,
        width: '100%',
        height: '100%',
        
    },
    input: {
     
      marginLeft: '15%',
      marginRight: '15%',
      width: '80%',
      height: '9%',
     
      borderColor: 'lightgrey',
      borderWidth: 2,
      borderRadius: 5
   },

   submitButton: {
    backgroundColor: '#00CE6B',
    margin: '3%',
    width: '80%',
    justifyContent: 'center',
    height: '8%',
    borderRadius: 20,
    marginLeft: '15%',
    marginRight: '15%',
    },
    
   logo:{
     marginBottom: '4%'
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center',
      marginTop: '3%', //TODO , not be safe margin, has be auto centered horizentally
      fontSize: 20,
    },
    img: { 
      position: 'absolute',
      top: 0,
      right: 0, 
    },
}