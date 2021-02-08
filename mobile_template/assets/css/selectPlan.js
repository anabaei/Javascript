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
    padding: 10,
    margin: 15,
    height: 40,
    marginLeft: 65,
    marginRight: 65,
    borderRadius: 14
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
    imageContainer: {
      flexDirection: 'row',
      
    },
    imgbottom: { 
      position: 'absolute',
      bottom: 0,
      left: 0, 
    },
    content: {
      paddingTop: '11%',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Poppins-Bold'
      
      
    },
  }