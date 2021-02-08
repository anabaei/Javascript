import {StyleSheet } from 'react-native';
export const styles = {
 
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
    height: '10%',
    borderRadius: 20,
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
        //top: '107%',
       // borderColor: 'blue',
       // borderWidth: 3,
      },
    imageContainer: {
      flexDirection: 'row',
      
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '17%', 
      marginRight: '17%',   
    },
  }