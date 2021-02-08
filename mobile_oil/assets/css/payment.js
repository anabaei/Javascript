import {StyleSheet } from 'react-native';


export const styles = {
 
    input: {
    
      marginLeft: '15%',
      marginRight: '15%',
      marginTop: '2%',
      height: '11%',
     
      borderColor: 'lightgrey',
      borderWidth: 1,
      borderRadius: 1
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
    imgbottom: { 
      position: 'absolute',
      bottom: 0,
      left: 0, 
    },
    imageContainer: {
      flexDirection: 'row',
      
    },
    inputSmall:{
        marginTop: 6,
      
        
        height: 40,
       
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 5
    },
    content: {
      marginTop: '23%',
      paddingTop: '11%',
     
      fontFamily: 'Poppins-Bold'
    },
    back: {
      color: '#00CE6B',
      top: 25,
      left: 9, 
      position: 'absolute',
    }
    
    

  }