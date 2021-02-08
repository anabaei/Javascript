
import React, {Component} from 'react';
import {View, Text, Image, Alert, TouchableOpacity, TouchableHighlight  , StyleSheet } from 'react-native';


class Menu extends Component {   
    
    handlePress = (form= 'notselected') =>{
        Alert.alert(form)
      // this.props.navigate('Driling')
    }
    
    handlePress2 = (e = null,formtype = 'under process') =>{
       // Alert.alert('form '+formtype)
        if(formtype !== 'under process')
             this.props.navigate('Form',{ 'type':formtype})
        else 
             Alert.alert('form under process')
    }

    render(){
        return(
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                                                             
                <TouchableOpacity style={styles.buttonStyles} onPress={((e)=> this.handlePress2(e,'drilling'))        } >
                            <Text style={styles.buttonText}>Driling</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyles} onPress={((e)=> this.handlePress2()) }>
                            <Text style={styles.buttonText}>Workover</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
               <TouchableOpacity style={styles.buttonStyles} onPress={((e)=> this.handlePress2()) }>
                        <Text style={styles.buttonText}>Completion</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.buttonStyles} onPress={((e)=> this.handlePress2()) }>
                        <Text style={styles.buttonText}>TBD</Text>
               </TouchableOpacity>
            </View>
            
            
        </View>   
        )
    }
}

const styles = StyleSheet.create({
    container:{
       flex: 7,
       backgroundColor: '#35605a',
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1
    },
    buttonStyles: {
        backgroundColor: '#35605a',
        height: '50%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18
    }
})
export default Menu;


