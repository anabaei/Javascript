import { StyleSheet, Text, View ,Button, FlatList } from 'react-native';
import React, {Component} from 'react';


class Operation extends Component {

    constructor(props) {
        super(props);
      
      }

    handleAddclick = () =>{
     //   this.props.navigation.navigate('Driling');
    }
    

    render(){
        return(
            <Text> 
               <Text style={{color: '#00CE6B'}} onPress={this.handleclick} >
                      Operation
                    </Text>
             </Text>
        )
    }
}
export default Operation;