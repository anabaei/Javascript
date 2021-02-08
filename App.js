import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, TouchableHighlight } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { startTime: null, timeDisplay: '0' };
  }

  startTimer = () => {

      this.setState({ startTime: new Date() });
      clearInterval(this.intervalid);
      this.intervalid= setInterval( () => {
       this.setState({ timeDisplay: new Date() - this.state.startTime })
     }, 10);  // every 10 mili second check it out that is what the
   }

   stopTimer = () => {
    clearInterval(this.intervalid);
    }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
      <Text style={styles.title}>Hello world!</Text>
        <TouchableHighlight onPress={this._onPressButton}  >
      <Image source={pic} style={{width: 193, height: 110}} />
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonContainer}
                            underlayColor='red'
                            onPress={this.startTimer} >
          <Text style={styles.button}>Start</Text>

        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonContainer}
                              underlayColor='red'
                              onPress={this.stopTimer} >
            <Text style={styles.button}>Stop</Text>

          </TouchableHighlight>

        <Text style={styles.timeDisplay}>{this.state.timeDisplay}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  title: {
    fontSize: 30,
  },
  buttonContainer: {
    backgroundColor: '#ff4d4d',
    borderRadius: 10,
    justifyContent: 'center',
  },
  timeDisplay: {
    fontSize: 25
  },

});
