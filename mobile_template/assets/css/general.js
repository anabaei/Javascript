import {StyleSheet } from 'react-native';


export const general = {
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
        marginBottom: '2%',
       },
   
       body: {
         marginLeft: '4%', 
         marginRight: '4%',
         fontSize: 12,
        
       },
       back: {
        color: '#00CE6B',
        marginTop: '7%',
        marginLeft: '2%',
      
        // alignContent: 'left',
        // justifyContent: 'left'

      }

}