import React from 'react';
import {Image, TextInput, AppRegistry, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
//import {createStackNavigator, createAppContainer} from 'react-navigation';
//import { Input } from 'react-native-elements';


class Signin extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isShowingText: "yes", text: "" ,email: '', password: ''};
  }
  
  handleEmail = (text) => {
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }
 handleAddEvent = () =>{
   this.props.navigation.navigate('Signup');
}

  login = (email, pass) => {

  //  const formData = new FormData();
  //  const attr = {
  
  //    password: formData.get('pass'),
  //    email: formData.get('email')
  // }
  //  console.log('email: ' + email + ' password: ' + pass)

  //   return fetch('https://kayamspa.herokuapp.com/users', {
  //   method: 'POST',
  //   headers:{'Content-Type': 'application/json'},
  //   body: JSON.stringify(attr)}).then(res=> res.json())

    // fetch(url)
    // .then(response => response.json())
    // .then(events => events.map(e => ({ ...e, date: new Date(e.date)})));
    //alert('email: ' + email + ' password: ' + pass)
   
 }

render() {
 

  return (
  
  <View>
 
   
    <View style={styles.container}>
   
    <Image style={styles.bgimg}
        source={require('../assets/img/login-bg.jpg')}
      />  

    {/* <Image style={styles.img} 
        source={require('../assets/img/logo.png')}
      />   */}
     
        <Text style={{textAlign: 'center', fontWeight: 'bold', marginBottom: 10, fontSize: 16 }}> 
          Login to Your Account 
        </Text>
      
       <TextInput style = {styles.input}
               
               placeholder = "  Email"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
               />
         <TextInput style = {styles.input}
           
               placeholder = "  Password"
               placeholderTextColor = "lightgrey"
               
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}
               />      
          <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> LOG IN </Text>

            </TouchableOpacity>     
            <View  >
              <Text style={{textAlign: 'center', color: 'grey'}}>
                 No Account yet? 
                 <Text style={{color: '#00CE6B'}} onPress={this.handleAddEvent} >
                     Sign up now

                  </Text>
               </Text>
               <Text style={{textAlign: 'center', color: 'lightgrey', margin: 6}}>
                Forgotpassword? 
               </Text>

            </View>
    </View>      
  </View>
      
    
  );
}
}
const styles = StyleSheet.create({
  container_bg: {
    flex: 1,
    width: '100%',
    height: '100%'
},

    input: {
      marginTop: 6,
      marginLeft: 45,
      marginRight: 45,
      
      height: 40,
     
      borderColor: 'lightgrey',
      borderWidth: 2,
      borderRadius: 5
   },
   submitButton: {
    backgroundColor: '#00CE6B',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 14,
    marginLeft: 65,
      marginRight: 65,
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center',
      
    },
    container: {
          display: 'flex',
          backgroundColor: '#fff',
          // borderColor: 'red',
          // borderWidth: 3,
          justifyContent: 'center',
          marginTop: 10,
          
          
        }, 
    bgimg: {
       width: '100%',
       flex: 1,
    },    
    img: {  
     // borderColor: 'blue',
     // borderWidth: 3,
     height: 100,
      
    },
    imageContainer: {
      flexDirection: 'row',
      
    }
  

    
    

  });


export default Signin;