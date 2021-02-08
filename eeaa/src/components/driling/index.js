import { StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    Button, 
    FlatList,
    Picker,
    TextInput,
    TouchableHighlight,
    Alert  
} from 'react-native';
import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

class Driling extends Component {
    // static navigationOptions = {
    //     header: null
    // } 

    constructor(props) {
        super(props);
        this.state = { 
            language: "en",
            name: "temp user",
            email: "email",
            msg: "driling",
            O3: '',
            Q: '',
            D: '',
            D1: '',
            D2: '',
            MW: '',
            PV: '',
            YP: ''
        }
      }

    clearFields = () => this.setState({
        O3: '1',
        Q: '2',
        D: '3',
        D1: '1',
        D2: '2',
        MW: '3',
        PV: '1',
        YP: '2'
        // O3: '',
        // Q: '',
        // D: '',
        // D1: '',
        // D2: '',
        // MW: '',
        // PV: '',
        // YP: ''
    })  
    
    sendMessage= () => {
        Alert.alert(
            'O3= '+this.state.O3 
            + ', Q='+this.state.Q 
            + ', D='+this.state.D,
            'D1='+this.state.D1
            +', D2='+this.state.D2
            +', MW='+this.state.MW
            +', PV='+this.state.PV
            +', YP='+this.state.YP
            );
        // this.props.navigation.goBack();
        this.props.navigate('DrillingResult',{ 
       
        O3: this.state.O3,
        Q: this.state.Q,
        D: this.state.D,
        D1: this.state.D1,
        D2: this.state.D2,
        MW: this.state.MW,
        PV: this.state.PV,
        YP: this.state.YP,
        msg: 'Drilling',
        email: 'amir@gmail.com',
        name: 'sample user'
        });
      }

    handleAddclick = () =>{
      //  this.props.navigation.navigate('Operation');
    }
   

    render(){
        //const {navigate} = this.props.navigation;
        return(
            
            <View style={styles.container}>
              <ScrollView style={{flex: 1}}>
              <Text style={styles.heading}>
              Drilling
              </Text>
              <View style={styles.samerowfeilds}>
                    
                    <Text style={styles.labelinputs} >
                       Gel Strength 10sec:
                    </Text>

                    <TextInput 
                    onChangeText = {(text)=>this.setState({O3: text})}
                    value = {this.state.O3}
                    style={styles.inputs} 
                    placeholder= 'lb/100ft^2'
                    selectionColor = '#428AF8'
                    underlineColorAndroid = '#D3D3D3'
                    />
              </View>
              <View style={styles.samerowfeilds}>
                    
                    <Text style={styles.labelinputs} >
                       Flowrate:
                    </Text>

                    <TextInput 
                    onChangeText = {(text)=>this.setState({Q: text})}
                    value = {this.state.Q}
                    style={styles.inputs} 
                    placeholder= 'gpm (Q)'
                    selectionColor = '#428AF8'
                    underlineColorAndroid = '#D3D3D3'
                    />
              </View>
              <View style={styles.samerowfeilds}>
                    
                    <Text style={styles.labelinputs} >
                       Dp ID:
                    </Text>

                    <TextInput 
                    onChangeText = {(text)=>this.setState({D: text})}
                    value = {this.state.D}
                    style={styles.inputs} 
                    placeholder= 'inch (D)'
                    selectionColor = '#428AF8'
                    underlineColorAndroid = '#D3D3D3'
                    />
              </View>
              <View style={styles.samerowfeilds}>
                    
                    <Text style={styles.labelinputs} >
                       hole Diameter:
                    </Text>

                    <TextInput 
                    onChangeText = {(text)=>this.setState({D2: text})}
                    value = {this.state.D2}
                    style={styles.inputs} 
                    placeholder= 'inch (D2)'
                    selectionColor = '#428AF8'
                    underlineColorAndroid = '#D3D3D3'
                    />
              </View>
              <View style={styles.samerowfeilds}>
                    
                    <Text style={styles.labelinputs} >
                       Dp OD:
                    </Text>

                    <TextInput 
                    onChangeText = {(text)=>this.setState({D1: text})}
                    value = {this.state.D1}
                    style={styles.inputs} 
                    placeholder= 'inch (D)'
                    selectionColor = '#428AF8'
                    underlineColorAndroid = '#D3D3D3'
                    />
              </View>
              <View style={styles.samerowfeilds}>
                    
                    <Text style={styles.labelinputs} >
                       MW:
                    </Text>

                    <TextInput 
                    onChangeText = {(text)=>this.setState({MW: text})}
                    value = {this.state.MW}
                    style={styles.inputs} 
                    placeholder= 'ppg (P)'
                    selectionColor = '#428AF8'
                    underlineColorAndroid = '#D3D3D3'
                    />
              </View>
              <View style={styles.samerowfeilds}>
                    
                    <Text style={styles.label2inputs}>
                       PV:
                    </Text>

                    <TextInput 
                    onChangeText = {(text)=>this.setState({PV: text})}
                    value = {this.state.PV}
                    style={styles.inputs2} 
                    placeholder= 'inch (D)'
                    selectionColor = '#428AF8'
                    underlineColorAndroid = '#D3D3D3'
                    />
                    <Text style={styles.label2inputs} >
                       YP:
                    </Text>

                    <TextInput 
                    onChangeText = {(text)=>this.setState({YP: text})}
                    value = {this.state.YP}
                    style={styles.inputs2} 
                    placeholder= 'inch (D)'
                    selectionColor = '#428AF8'
                    underlineColorAndroid = '#D3D3D3'
                    />
              </View>
            
              
              <View style={styles.samerowButtons}>
                    <TouchableHighlight
                    style={styles.clearbuttons}
                    onPress={this.clearFields}
                    underlayColor = '#31e981'
                    >
                        <Text style = {{color: '#292b2c', textAlign: 'center'}}>
                            Clear Form
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                    style={styles.buttons}
                    onPress={this.sendMessage}
                    underlayColor = '#31e981'
                    
                    >
                        <Text style = {styles.submitButtonText}>
                            Submit Form
                        </Text>
                    </TouchableHighlight>
                    
              </View>
                    
           
              </ScrollView>  
            </View>
         
               
                   
           
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
        paddingBottom: '18%',  // 45!
       // backgroundColor: '#bccbe0'
        
    },
    heading:{
      fontSize: 22,
      color: 'blue',
      margin: '5%',
      alignItems: 'center',
      
      left: '30%'
      
    },
    inputs: {
        // margin: 15,
        // padding: 2,
        height: '100%',
        borderColor: '#bccbe0',
         borderWidth: 1,
        //backgroundColor: '#bccbe0',
        width: '40%',
        // margin: '2%',
        // borderWidth: 1,
        // borderColor: 'brown'
    },
    inputs2: {
        // margin: 15,
        // padding: 2,
        height: '100%',
        borderColor: '#bccbe0',
         borderWidth: 1,
        //backgroundColor: '#bccbe0',
        width: '33%',
        // margin: '2%',
        // borderWidth: 1,
        // borderColor: 'brown'
    },
    labelinputs: {
        // margin: 15,
        // padding: 2,
        height: '100%',
        alignItems: 'center',
        //backgroundColor: '#bccbe0',
        width: '40%',
        margin: '2%',
        // borderWidth: 1,
        // borderColor: 'brown'
    },
    label2inputs: {
        // margin: 15,
        // padding: 2,
        height: '100%',
        alignItems: 'center',
        //backgroundColor: '#bccbe0',
        width: '4%',
        marginLeft: '5%',
        marginTop: '3%'
        // margin: '1%',
        // borderWidth: 1,
        // borderColor: 'brown'
    },
    input: {
        margin: 15,
        padding: 2,
        height: '10%',
        borderColor: '#bccbe0',
         borderWidth: 1,
        //backgroundColor: '#bccbe0',
        width: '80%'
     },
    buttons:{
        // marginTop: 15,
        backgroundColor: '#0275d8',
        padding: 10,
        // textAlign: 'center',
        // margin: 15,
        height: '100%',
        width: '40%',
        margin: '2%',
       
        
    },
    clearbuttons:{
        // marginTop: 15,
        backgroundColor:'lightgrey',
        padding: 10,
        // textAlign: 'center',
        // margin: 15,
        height: '100%',
        
        width: '40%',
        margin: '2%',
        
    },
    submitButtonText:{
      color: 'white',
      textAlign: 'center'
    },
    samerowButtons: {
        flexDirection: 'row',
        // padding: 10,
        // margin: 15,
        height: '11%',
        
    },
    samerowfeilds: {
        flexDirection: 'row',
        padding: 1,
        margin: 11,
        height: '10%',
        // borderColor: 'red',
        // borderWidth: 1
    },
    samerow2feilds: {
        flexDirection: 'row',
        padding: 1,
        margin: 11,
        height: '10%',
       
    }
 
})


export default Driling;