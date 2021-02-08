
import React, {Component} from 'react';
import { StyleSheet, Text, View ,Button, FlatList,Picker, Image } from 'react-native';

import Homecomponent from '../components/home/index'
import ImageHome  from '../components/ImageHome'
import Menu from '../components/Menu'
import {StackNavigator} from 'react-navigation';
import Driling from '../components/driling/index'

class Form extends Component {

    componentDidMount(){
        let {navigation} = this.props
        let a = navigation.getParam('type', 'NO-Email');
        console.log(a)
        console.log(this.props.navigation.state.params)
    }
    static navigationOptions = {
        title: 'Form'
    }  
    render(){
        const {navigation} = this.props
        const {navigate} = this.props.navigation;
        let formtype = navigation.getParam('type', 'NO-Email');
        let form = ''
        switch (formtype) {
            case 'drilling':
                form = <Driling navigate = {navigate}/>
                break;
            default:
                form = ''
                break;
        }
        return(
            <View style={{flex:1}}>  
               
              {form}
                
            </View>
        )
    }
}
export default Form;