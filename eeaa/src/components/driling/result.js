import React, {Component} from 'react';
import { StyleSheet, Text, View ,Button, FlatList, List, Picker, Dimensions } from 'react-native';
// import {styles} from '../../../assets/styles';
import cal_drilling from './cal_drilling'


class Result extends Component {

    renderItem = ({item, index}) => {
        return(
            <View style= {styles.item}>
                <Text style= {styles.itemKey}>{item.key}:</Text>
                <Text style= {styles.itemValue}>{item.value}</Text>
            </View>
        )
    }
  

   constructor(props){

     
       super(props)
       this.state = {
        isLogginin: props.navigation.state.params.name,
        email: ''
      };
      // this.setState({isLogginin: false})
      
   }



   componentDidMount(){
    const { navigation } = this.props;
    
    let O3 = navigation.getParam('O3', 'NO-O3')
    let Q =  navigation.getParam('Q', 'NO-Q')
    let D = navigation.getParam('D', 'NO-D')
    let D1 =  navigation.getParam('D1', 'NO-D1')
    let D2 = navigation.getParam('D2', 'NO-D2')
    let MW= navigation.getParam('MW', 'NO-MW')
    let PV= navigation.getParam('PV', 'NO-PV')
    let YP= navigation.getParam('YP', 'NO-YP')



    const data = cal_drilling(O3,Q,D,D1,D2,MW,PV,YP)

    this.setState({
        O3: navigation.getParam('O3', 'NO-O3'),
        Q: navigation.getParam('Q', 'NO-Q'),
        D: navigation.getParam('D', 'NO-D'),
        D1: navigation.getParam('D1', 'NO-D1'),
        D2: navigation.getParam('D2', 'NO-D2'),
        MW: navigation.getParam('MW', 'NO-MW'),
        PV: navigation.getParam('PV', 'NO-PV'),
        YP: navigation.getParam('YP', 'NO-YP'),
        data: data 
    })

    // calculate funciton
  
    console.log("email= "+ JSON.stringify(navigation))
   }

    render(){
    return(
                <FlatList
                    data =   {this.state.data}
                    style = {styles.container}
                    renderItem = {this.renderItem}
                />
    )
    }
}


const styles = StyleSheet.create({
    container: {
       flex: 1,
       marginVertical: 20,
       padding: 2
    //    borderColor: 'green',
    //    borderWidth: 1
    },
    item: {
        //backgroundColor: '#4D24CD',
        borderColor: 'lightgrey',
        borderWidth: 1,
        // alignItems: 'center',
        //justifyContent: 'center',
        flex: 11,
        margin: 4,
        flexDirection: 'row'
        //height: '180%' //Dimensions.get('window').width
    },
    itemKey: {
        fontSize: 20,
        padding: 15,
        alignItems: 'flex-start',
        color: 'blue'
    },
    itemValue: {
        fontSize: 21,
        padding: 15,
        position: 'absolute', 
        right: 0
    },
    itemText: {
        fontSize: 12,
        padding: 15
    }
})

export default Result;