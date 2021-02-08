
import React, {Component} from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import EventCard from './EventCard'
import EventForm from './EventForm';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
    list: {
      flex: 1,
      paddingTop: 5,
      backgroundColor: 'lightgrey',
    },
  });

class EventList extends Component {
    static navigationOptions = {
        title: 'Welcome',
      };

state = {
    events:[]
    }

componentDidMount() 
{
/////// make countdown /////
setInterval(() => {
    this.setState({
      events: this.state.events.map(evt => ({
        ...evt,
        timer: Date.now(),
      })),
    });
  }, 1000);
///////             ////////
    const events= require('./db.json').events
    this.setState({events})
}

handleAddEvent = () =>{
    this.props.navigation.navigate('EventForm');
}

    render(){
        const {navigate} = this.props.navigation;
        return[
           
            <FlatList
                style={styles.list}
                key="flatlist"
                //\\//\\//\\//\\
               // data={[{key: 'a'}, {key: 'b'}]}
                data ={this.state.events}
                renderItem={({item}) =>  <EventCard event={item} />} //  <Text>{item.title}</Text>}
                keyExtractor={ item => item.id }
                />,
                <ActionButton 
                   key="feb"
                   onPress={this.handleAddEvent}
                   buttonColor="rgba(231,76,60,1)"
                />
        ]
    }
}

export default EventList;