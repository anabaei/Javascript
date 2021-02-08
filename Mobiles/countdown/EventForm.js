import React, { Component } from 'react';
import { StyleSheet, TextInput ,View, Text, TouchableHighlight, } from 'react-native';

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  text:
  {
   height: 40,
   margin: 0,
   marginRight: 17,
   marginLeft: 17,
   paddingLeft: 10,
   backgroundColor: 'white'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
})

class EventForm extends Component {
  state = { title: null , date: '', };

  handleAddPress = () => { this.props.navigation.navigate('EventList'); }
  handleSubmitTitle = (value) =>
  {
    console.log(value);
    this.setState({title: value})

  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'lightgrey'}}>
        
        <TextInput style={styles.text}  
        placeholder="Event Title"
        value = {this.state.title}
        onChangeText={this.handleSubmitTitle}
        />

        <TouchableHighlight
          onPress={this.handleAddPress}
          
          >
          <Text style={[styles.button, styles.buttonText]}>Add</Text>
        </TouchableHighlight>
       
      </View>
    );
  }
}

export default EventForm;