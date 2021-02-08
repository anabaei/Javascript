
# React Native

#### [Facebook Doc](https://facebook.github.io/react-native/docs/getting-started.html), [fastlane to publish](https://fastlane.tools/), [usa json gov public](https://www.data.gov/), [components codes](https://github.com/facebook/react-native/tree/master/RNTester/js)
* [React and React Native Router](https://reacttraining.com/react-router/web/example/url-params)
* [React Native Animation](https://medium.com/react-native-training/react-native-animations-using-the-animated-api-ebe8e0669fae) And [RN syles like bootstrap](https://react-native-training.github.io/react-native-elements/docs/0.19.1/avatar.html)
 * Images can be move to left right bottom as [source](https://medium.com/the-react-native-log/easy-layouting-with-react-native-b96c4c6fae7)
 * scroll [view](https://stackoverflow.com/questions/31101445/in-react-native-how-do-i-put-a-view-on-top-of-another-view-with-part-of-it-lyi)
* to see what ports are open
```javascript
lsof -nP +c 15 | grep LISTEN
```
<details>
  <summary> Start  </summary>
  
* React Components start with Capital letter   
To run react native!
```
npm install -g react-native-cli
react-native init AwesomeProject
cd AwesomeProject
react-native run-ios
```
* `command+d` then `Enable live reload` to have reloading live 
* `command+d` then `Start remote js debuging` then new chrome page opens at console you can have `console.logs` from the app
* To debug `control+command+z` or shake device to see debugger 
* `index.js` is starting file
* To start. Notice either expo or react native you are able to run both with expo app
```javascript
expo init my-app
cd my-app
npm run 
OR 
yarn start
```
#### Error
```javascript
expo command not found
OR 
react-native not found 
```
* solution:
```javascript
npm install -g react-native-cli
// then when you get something like below address copy and export it to path
/Users/amir/.npm-packages/bin/react-native -> /Users/amir/.npm-packages/lib/node_modules/react-native-cli/index.js
//then use this 
export PATH="/Users/amir/.npm-packages/bin:$PATH"
//Also you can run 
npm list -g | head -n 1
// it gives you above address then you need to export it as (just change the last folder to bin) 
export PATH="/Users/amir/.npm-packages/bin:$PATH"
```

* Notice: if you choose 'yarn' start then make sure red hat has no issue 
* These are one time only to prepare for instalation
```javascript
npm install -g exp
npm install -g npm@4
npm i -g create-react-native-app
```
##### Eject 
* In order to eject from expo to native you can see [this](https://medium.com/owhy/step-2-ejecting-from-create-react-native-app-a036c199addd)

### Run native 
* To open a file from command line with xcode
```java
npm i -g react-native-cli
react-native init AwesomeProject
// then check in xcode -> preference -> location - command line seleceted to xcode
cd AwesomeProject
react-native run-ios
```
* Above is from [here](http://facebook.github.io/react-native/docs/getting-started)

* Then to add `expo` to native install expo app in your phone then run it with s 
* A good [reasource](https://medium.com/@gwen_faraday/converting-a-react-app-to-react-native-d7df17968fc6) to change React to react-native


#### Open Xcode via command
```
 alias xcode='open -a /Applications/Xcode.app'
 .  ~/.bashrc    
 xcode native_6.xcodeproj  /// open the file you want 
 and run from xcode 
```
* Debugger run on `http://127.0.0.1:19001/debugger-ui/` or 9001 address if you open in browser
#### debugger
* `debugger` is like `byebug` in rails.
* sometimes your app stock in downloading javascript, it is a sign to restart your app
* If you get error, after fixing the error red screen stays you need to reload it several times!
### Convert React native to expo
* Create `expo.json` file 
* run `npm install -g expo-cli` then `expo init`
* Just not completed yet ...
 
 </details>

<details>
  <summary> Hellow World  </summary>

* A link for [react](https://edgecoders.com/learning-react-js-is-easier-than-you-think-fbd6dc4d935a)
* `<view>` is like `<div> or <span>`  in web.To display text you need to wrap it with `<text>` tag
* Add Button as
```javascript
import { StyleSheet, Text, View ,Button } from 'react-native';
```
```javascript
  <Button
            title="Learn More"
            onPress={()=> alert('I was passe!')} />
```

</details> 

<details>
  <summary> First Component </summary>

```javascript
// EventList.js
import React, {Component} from 'react';
import { Text } from 'react-native';

class EventList extends Component {
    render(){
        return(
            <Text> Hello </Text>
        )
    }
}
export default EventList;
```
* And in `app.js` import it as `import EventList from './EventList'`
* before you start you can check what you have missed by `yarn install --check-files` to remove some issues 
* we can remove styles in app.js since we use our own styles
</details> 
<details>
  <summary> Navigate (routing) </summary>

* In order to navigate you need to define two navigation as below first then 

```javascript
npm install --save react-navigation
npm install react-native-gesture-handler
```
* Then inside `app.js` import them as 
```javascript
import React from 'react';
import Home from './src/views/Home'
import Form from './src/views/Form'

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
   Home: {screen: Home},
   Form: {screen: Form},
   },
      {
        initialRouteName: 'Home'
      }
);
const App = createAppContainer(MainNavigator);
export default App;
```
* Now it is ready. Inorder to change to another route from `Home` you need to just change the `this.props.navigate` to the screen you have define as inside Home.js
```javascript
<View onPress={ ()=> this.props.navigate('Form') } 
```
* But if there is nested components as child then at each child component, define `navigate` var and pass it as params to the child. Then in nested childs you still would have access to routing as below
```javascript
  render(){
        const {navigate} = this.props.navigation;
        return(
          <Driling navigate = {navigate}/>
        )
```
* Then inside `Driling` component you would have 
```javascript
this.props.navigate('new page')
```
* Also you may want to pass params when navigating to new page. Then you would have 
```javascript
this.props.navigate('DrillingResult',{ O3: 'val1',Q: 'val2'})
```
* Done!
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------

[follow this](https://facebook.github.io/react-native/docs/navigation)
* There are two screens as above to navigate. EventForm is like below
* Notice we define screens by passing keys as below `EventList` and `EventForm` are keys in navigation object 
```javascript
const MainNavigator = createStackNavigator({
  EventList: {screen: EventListPage},
  EventForm: {screen: EventFormPage},
});
```
* Therefore the app.js with two pages would be like 
```javascript
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList'
import EventForm from './EventForm';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  EventList: {screen: EventList},
  EventForm: {screen: EventForm},
});

const App = createAppContainer(MainNavigator);
export default App;
```
And the `Home page` like `EventList` we can add navigators as below where actionbutton comes from `import ActionButton from 'react-native-action-button';`
```javascript
 handleAddEvent = () =>{
    this.props.navigation.navigate('EventForm');
}
    render(){
        const {navigate} = this.props.navigation;
        
        return[
            <FlatList
                style={styles.list}
                key="flatlist"
               // data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) =>  <EventCard event={item} />} //  <Text>{item.title}</Text>}
                keyExtractor={ item => item.id }
                />,
                <ActionButton 
                   key="feb"
                   onPress={this.handleAddEvent}
                   buttonColor="rgba(231,76,60,1)"
                />
        ]
```
To define handleAddEvent we have 
* We can define renders as a list of objects as 
As this [code](https://github.com/anabaei/JavaScript_Notes/blob/master/Mobiles/countdown/EventList.js)

</details>
<details>
  <summary> Using External Data  </summary>

### Google API
* Go to console.developers.google.com and on top left create a new project
* Then click on Library link in left side to enable one of the apis  and select youtube data api3 
* Now to secure our product we need to click on credentials, click and choose API Key. So users in mobile app use it as credential 

#### Life Cycle
* To load external method we need to use Life Cycle method or life cycle hook. In this case we use `componentDidMount` which runs after component start. There is also other options like componentDidUpdated etc.. . 
#### Create the Component 
* A component to comunicate with youtube api using creadentials. `listloaded` uses to show whether the data has loaded yet! and we use `Flat List` to display videos
* 
```javascript
 componentDidMount(){
        return fetch(
            'https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyC3S9d5DW6RItfH50Bn_tOU4UMQ1dgrF2Q'
        ).then((response)=> response.json())
        .then((response) => {
          
          this.setState({
              listLoaded: true,
              videoList: Array.from(response.items)
          })
        })
        .catch((errpr)=> 
        {
            console.log(error)
        })
    }
```
* Where in search, pluralsight is key word 
* Fetch is a success operation we chain it to success method. This chain sucess receives data from youtube and pass it as json then we parse our data into an object.Then we add another success method to read json and update our states
* `Array.from` reads objects and convert them into an array which is best feed for Flatlist we are going to use 

#### Display in FlatList
* Now we have  array we need to show it. To make sure our data is received we add one condition before displaying. 
* `FlatList` has different configurations but two of them are mandatory. `Data` we need to pass an array and `renderItem` to show how each item should be shown in flatlist
```javascript
   return(
            <View>
                  {this.state.listLoaded  &&( 
                     <View style={{paddingTop: 30}}>
                        <FlatList 
                           data = {this.state.videoList}
                           renderItem = { ({item}) => 
                           <TubeItem 
                                id = {item.id.videoId}
                                title= {item.snippet.title}
                                imageSrc = {item.snippet.thumbnails.high.url}
                           />
                        
                        }
                        />
                     </View>
                  )}
                  { !this.state.listLoaded  &&( 
                      <View style={{paddingTop: 30}}>
                          <Text> LOADING...</Text>
                      </View>
                  )}
            </View>
        )
        }

export default Videos; 


export class TubeItem  extends Component { 

  onPress = () =>{
      console.log(this.props.id)
  }

  render(){
      return(
          <TouchableWithoutFeedback onPtrdd={this.onPress}> 
             <View styles={{paddingTop: 20, alignItems: 'center'}}>
                   <Image  style={{width: '100%', height:200 }}
                           source={{uri:this.props.imageSrc}}
                   />
                   <Text>
                       {this.props.title}
                   </Text>
             </View>

          </TouchableWithoutFeedback>
      );
  }
}
```
* The first part is when it is loaded and second is when it is waiting for loading. Also we use another components inside renderItem to display property. 
 
 #### Watch Videos
 * To watch videos we need a component to just pass an id of the video to it. So create a `videoDetails` screen for routs and then since we wanna change it from `videos` so we pass `const {navigate} = this.props.navigation; ` in render method of videos and then we would add that constant as another params in `TubeItem` as `navigate = {navigate}`
 * Then inside `TubeItem` when reading `ids` change navigate props and pass id. as 
 ```javascript
onPress = () => {
 this.props.navigate('VideoDetails', {'youtubeId': this.props.id} );
}
 ``` 
 * And inside videoDetails we have 
 ```javascript
class VideosDetails extends Component { 

static navigationOptions = {
    header:null
}


  render() {
      let youtubeid = this.props.navigation.getParam('youtubeId','no video')
      let youtubeurl = `https://www.youtube.com/embed/${youtubeid}`

      return(
        
          <WebView
              style={{marginTop: 20}}
              javaScriptEnabled = {true}
              source={{uri: youtubeurl }} 
          />
      )
    }


}
 ```

</details>
<details>
       <summary> User Registration </summary>

* Use ` AsyncStorage` to save data into the phone locally,
* First check if username is not empty and also passwords are match.
* Then check if the username not exist by using `AsyncStorage.getItem(this.state.username` and if key(username) doesnt exist it returns null
```javascript
import React, {Component} from 'react';
import { StyleSheet,
    Text, 
    View,
    TouchableHighlight,
    AsyncStorage,
    TextInput,
    Alert
 } from 'react-native';



 class Registration extends Component { 
    constructor(props){
        super(props)
        console.log("______ "+ JSON.stringify(this.props.navigation.state.routeName) + '+++' + 
        JSON.stringify(this.props) )
        this.state = { 
       
            username: '',
            password: '',
            passwordConfirm: ''
        }
    }

    cancelRegistration = () =>{
        Alert.alert("cancel registraion")
        this.props.navigation.navigate("Home")
    }

    registerAccount=()=>{
       if(!this.state.username){
           Alert.alert("please enter username")
       }
       else if(this.state.password !== this.state.passwordConfirm ){
        Alert.alert("please match passwords")
       }
       else {
           AsyncStorage.getItem(this.state.username, (err, result)=> { 
             if(result !== null){
                 Alert.alert("this username already exist!")
             }
             else{
                 AsyncStorage.setItem(this.state.username, this.state.password, (err,result)=>{ 
                     Alert.alert(`${this.state.username} account created`);
                      this.props.navigation.navigate("Home")
                 }) 
             }
            })
       }
    }


    render(){
        return(
            <View style={styles.container}>
               <Text style={styles.heading}>Register Account</Text>
               <TextInput 
                 style={styles.input}
                 onChangeText = {(text)=> this.setState({username: text})}
                 value = {this.state.username}
               />
               <Text style={styles.label}>Enter Username</Text>
              
               <TextInput 
                 style={styles.input}
                 onChangeText = {(text)=> this.setState({password: text})}
                 value = {this.state.password}
                 secureTextEntry={true}
               />
               <Text style={styles.label}>Enter Password</Text>
               
               <TextInput 
                 style={styles.input}
                 onChangeText = {(text)=> this.setState({passwordConfirm: text})}
                 value = {this.state.passwordConfirm}
                 secureTextEntry={true}
               />
               <Text style={styles.label}>Enter Password Confirmation </Text>
           
               <TouchableHighlight onPress={this.registerAccount} underlayColor='#31e981'>
                  <Text style={styles.button}>
                        Register
                  </Text>
               </TouchableHighlight>
               <TouchableHighlight onPress={this.cancelRegistration} underlayColor='#31e981'>
                  <Text style={styles.button}>
                        Cancel
                  </Text>
               </TouchableHighlight>
              
            </View>
    )}


 }


 const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%' 
    },
    heading:{
      flex: 1,
      fontSize: 22,
      color: 'blue',
      alignItems: 'center'
    },
    input: {
        flex: 1,
        width: '80%',
        padding: 10,
       
        borderColor: '#bccbe0',
        borderWidth: 1,
    },
    button:{
        marginTop: 15,
        fontSize: 16
    },
    label: {
        paddingBottom: 10
    }
})
 export default Registration
```
* Then to go this page you need just a link onpress like this
```javascript
<TouchableOpacity style={styles.buttonStyles} onPress={ ()=> this.props.navigate('Registration') } >
                        <Text style={styles.buttonText}>Register</Text>
</TouchableOpacity>
```
* Also make sure you have the registration in app.js as screen 

</details>     
<details>
       <summary> Navbar & Bottom </summary>
 
* A good resource for [navigate](https://ui.reach.tech/tabs/#tabpanels-as)  
* Bottom navigation is [here](https://github.com/timomeh/react-native-material-bottom-navigation#readme) 
*  Followed by routing we have app.js as
```javascript
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Hello from './components/Hello'
//import Source from './components/Source'

import Details from './views/Details';
import Results from './views/Results';
import Nav from './views/Nav';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Nav: {screen: Nav},
  Results: {screen: Results},
  Details: {screen: Details},
});

const App = createAppContainer(MainNavigator);
export default App;
```
And we have Nav.js as
```javascript
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
export default class Nav extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{flex:1, backgroundColor: "green"}}>
          <View style={{flex:1, flexDirection: "row", backgroundColor: "lightblue"}}>
            
           <View style={{flex:1, borderColor: "black", borderWidth: 1}} >
                  <Button style={{flex:1, borderColor: "black", borderBottomWidth: 1}}
                  title="Go "
                  onPress={() => navigate('Results', {name: 'Jane'})}
                />
            </View>
            <View style={{flex:1, borderColor: "black", borderWidth: 1}} >
                  <Button style={{flex:1, borderColor: "black", borderBottomWidth: 1}}
                  title="Go "
                  onPress={() => navigate('Results', {name: 'Jane'})}
                />
            </View>
            <View style={{flex:1, borderColor: "black", borderWidth: 1}} >
                  <Button style={{flex:1, borderColor: "black", borderBottomWidth: 1}}
                  title="Go "
                  onPress={() => navigate('Results', {name: 'Jane'})}
                />
            </View>
          </View>
          <View style={{flex:8, backgroundColor: "yellow"}}>
          </View>
          <View style={{flex:1, backgroundColor: "grey"}}>
          </View>
        </View>     
      );
    }
  }
```
</details> 

<details>
  <summary> Graphql </summary>
  
 * A good resource for [graphql](https://facebook.github.io/create-react-app/docs/loading-graphql-files) 
</details> 
<details>
  <summary> FlatList </summary>
  
* export FlatList 
```javascript
<FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
  keyExtractor={ item => item.id }
/>
```
* get json `db.json` file as [this](https://github.com/hendrikswan/pluralsight-react-native-getting-started/blob/master/db.json) example to bind flatlist to real data. so add this to flatlist as 
```javascript
import React, {Component} from 'react';
import { Text, FlatList } from 'react-native';
class EventList extends Component {
state = {
    events:[]
    }
componentDidMount() 
{
    const events= require('./db.json').events
    this.setState({events})
    //OR fetch fron json as  
    //fetch('https://data.cms.gov/resource/ehrv-m9r6.json').then((res) => res.json()).then((res) => { console.log(res), this.setState({events: res}) }).catch((err)=> {console.log(err)});
}
    render(){
        return(
            <FlatList
               // data={[{key: 'a'}, {key: 'b'}]}
                data ={this.state.events}
                renderItem={({item}) => <Text>{item.title}</Text>}
                keyExtractor={ item => item.id }
                />
        )
    }
}
export default EventList;
```
* Just use [api.js](https://github.com/hendrikswan/pluralsight-react-native-getting-started/blob/master/lessons/lesson-3/api.js) to have two functions as `formatDate` and `getCountDownParts`
* User [EventCard](https://github.com/hendrikswan/pluralsight-react-native-getting-started/blob/master/lessons/lesson-3/EventCard.js) to style the cards
</details> 
<details>
  <summary> Stateless Functional Component </summary>

* reurn all the attributes from old object to new object by using `...` and to override one we can hava 
```javascript
...e,
date = new Date(e.date),
```
* To have it we can define as which we expect one prop as event 
```javascript
export default function EventCard({ event }) {
 
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.date}>{formatDate(event.date)}</Text>
        <Text style={styles.title}>{event.title}</Text>
      </View>
    </View>
    )}
```
* To call up function, after importing from correct address as for example `import EventCard from './EventCard'`
```javascript
<EventCard event={item} />
```
Above pass item variable to function EventCard as an event 
* We can have different functiones to export form one file then in destination you need to call them as 
```javascript
import { formatDate, getCountdownParts,} from './api';
```
</details>  
<details>
  <summary> Update Results with Timer </summary>

* It gets events(an object) with current attributes with additional one timer which is a timestamp here and update every second 
```javascript
componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now(),
        })),
      });
    }, 1000);
```
</details> 
<details>
  <summary> Styles </summary>

* `justifyContent: 'center'` helps to put content in middle of a flex box `vertically`!
* Center of view attention from [here](https://medium.com/the-react-native-log/easy-layouting-with-react-native-b96c4c6fae7)
```javascript
<View flex style={{justifyContent: 'center', alignItems: 'center'}}>
  <Text>Content</Text>
<View>
```
* Also to have text start from center 
```javascript
textAlign: 'center'
```
* Use this [ui](https://react-native-training.github.io/react-native-elements/docs/searchbar.html)
* [RNTester](https://github.com/facebook/react-native/tree/master/RNTester) it helps to explore all react native elements that we use in a react native project.
```javascript
git clone https://github.com/facebook/react-native.git
cd react-native
npm install
open 		RNTester/RNTester.xcodeproj
//then run it into simulator 
// To see source codes you need to 
```
* center vertically and horizontally
```javascript
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
```

#### Inline styles like 
```javascript
<View style={{ flex:1 }}>
// stuff here!
</View>
```
* Use two types of styles
```javascript
 <Text style={[styles.welcome,  {backgroundColor: 'green'} ]}>Welcome</Text>
```
* Use `flex:1` for container to cover all background. Then `justifyContent` makes every elements inside to behave same. `flex-direction` as default is column.
* Basic example of code (only app.js added some styles as) 
```javascript
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
type Props = {};
export default class App extends Component<Props> {
  render() {
    console.log('ds')
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome,{flex:5}]}>Welcome5 </Text>
        <Text style={[styles.welcome,{flex:3}]}>Welcome3 </Text>
        <Text style={[styles.welcome,{flex:1}]}>Welcome1 </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 23,
    backgroundColor: 'orange'
  },
});
```
Alternatively we can have styles as below in `class`comes before defining 
![example](https://user-images.githubusercontent.com/7471619/52986638-179c7880-33ad-11e9-9382-b7f4c70a4f46.png)
* In `functions ` style you just need to define a property `card` and spefiy roles to it and then use it as `style={styles.card}`

```javascript
 const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    backgroundColor: '#2196F3',
    }
  });
export default function EventCard({ event }) {
   return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.date}>{formatDate(event.date)}</Text>
        <Text style={styles.title}>{event.title}</Text>
      </View>
    </View>  

```
* Notice: in counter here means 
```
flex: 1,   // we want a flex
flexDirection: row,  // each children should have be in a row
justifyContent: 'space-between', // make appropriate space between them

```
* Also in style no `px` just numbers like `width: 22` or percentage.
* You can have an array of styles which combine them as 
```javascript
styles={[styles.text, styles.override]}
```
#### Full Screen 
* to have a full screen add 
```javascript
 static navigationOptions = {
    header: null
  };
```


 </details> 
 <details>
  <summary> Add Custom font  </summary
 
 * Followed [here](https://docs.expo.io/versions/latest/guides/using-custom-fonts/)
 * Add font and link them as
 ```javascript
  react-native link 
 ```
 * If it complains then use the latest version of `react` and `react native` in package.json and install and run the link. 
 * Add 
 ```javascript
 import { Font } from 'expo';
 ```
 Then add
 ```javascript
 state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
 ```
 * Then tell the react to reload the font whenever it is ready as
 ```javascript
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  {
    this.state.fontLoaded ? (
      <Text style={{ fontFamily: 'open-sans-bold', fontSize: 56 }}>
        Hello, world!
      </Text>
    ) : null
  }
</View>
 ```
  </details>

 
<details>
  <summary> Validating Props </summary>
  
* At the bottom of each components we can check props as we expect a prop call `event` and it needs to shape its got `title` with string and date as `date` 
```javascript
EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date)
  }),
};
```

</details>

<details>
     <summary> Text Input </summary>

* get `TextInput`. Any typing text change the state as text and also change the value of input field
```javascript
<TextInput onChangeText={(text)=> this.setState({text})} 
value={this.state.text}
```
 an example of code is [here](https://github.com/anabaei/JavaScript_Notes/blob/master/Mobiles/countdown/EventForm.js)
</details>

<details>
  <summary> Add Image </summary>
 
 * Between views just add, also remember to import Image from `react-native`
 ```javascript
 render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
   
 ```
 ```javascript
 return(<View>
 <Image source={pic} style={{width: 193, height: 110}}/>
 ```
 * To have a button styles use as [here](https://github.com/hendrikswan/pluralsight-react-native-getting-started/blob/master/lessons/lesson-4/EventForm.js)

* An Example of full screen background is [here](https://aboutreact.com/react-native-hide-navigation-bar-and-make-screen-full-screen/) you need only add below at `defaultNavigationOptions` to null at the bottom of screen 
```javascript
const App = createStackNavigator(
  {
    First: {
      screen: HomeActivity,
      .
      .
      .
defaultNavigationOptions: {
      header: null
    },
```
* In order to add background use [this](https://facebook.github.io/react-native/docs/imagebackground)
 
</details>
<details>
  <summary> Http Request </summary>
 
* Check facebook network part basic use of fetch is like 
![fetch](https://user-images.githubusercontent.com/7471619/53069646-94088780-3491-11e9-911b-141b8b550983.png)
* And even you can add attributes to the results as
```javascript
export function getEvents(){
 return fetch(url)
    .then(response => response.json())
    .then(events => events.map(e => ({ ...e, date: new Date(e.date)})));
}
```
for each event it returns all attributes with the event are passed in `...e` and override date passing in the string we got back 
* You can have json-server install which allow you to get/post for testing purposes 
```javascript
yarn global add json-server
// then run 
json-server db.json // db.json is just a json file 
Then json server should run in port 3000. 
```
</details>
<details>
  <summary> import Class </summary>
 
 * Define a class like `Greeting.js`
 ```javascript
 import React, { Component } from 'react';
 import { AppRegistry, Text, View } from 'react-native';
class Greeting extends Component {
  render() {
    return (
      <View>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}
export default Greeting;
 ```
 * To use it in app.js for ecxample
 ```javascript
 import Greeting from './Greeting'
  
  <View>
    <Greeting name="Jaina" />
   </View>
 ```
 </details>
<details>
  <summary> State </summary>
  
  * State are data that change during time, first we initial them with constructor then setState when you want to change 
  ```javascript
  constructor(props) {
    super(props);
    this.state = { isShowingText: "yes" };
  }
  ```
  ```javascript
  <text> {this.state.isShowingText}</Text>
  ```
 </details>  
 <details>
  <summary> Basic Style </summary>
  
 * import `StyleSheet` from `react-native` 
 * Define a constant after imports 
 ```javascript
 const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
}); 
```
* Then use it as 
```javascript
<Text style={styles.bigblue} > Test  </Text>
<Text style={styles.red} > Test  </Text>
```
</details>
<details>
  <summary> Flex </summary>

* Flex allows component to expand and shrink dynamically. If a parent does not have either a fixed width and height or flex, the parent will have dimensions of 0 and the flex children will not be visible.
```javascript
<View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
 </View>
```
* Use it as in a row
```javascript
  <View style={{flex: 1, flexDirection: 'row'}}>
       <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
 </View>
```
</details>  
<details>
  <summary> API CALL </summary>

* Create an APICall.js file as
```javascript
const DOMAIN = 'https://raw.githubusercontent.com/everypolitician/everypolitician-data/master/countries.json';
const API_PATH = '';

const API = {
  // getAll: function () { ... }
  // 👇 Property Method Shorthand. Syntax sugar for 👆
  getAll() {
    return fetch(
      `${DOMAIN}`,
      {
        headers: {'Content-Type': 'application/json'}
      }
    ).then(res => res.json());
  }
};
export {API};
```
* Then inside app.js
```javascript
import {API} from './APICall'

  constructor (props) {
  super(props);
  this.state = {
    calls: []
  }
}
  componentDidMount() {
    API.getAll().then(calls => this.setState({calls}));
    API.getAll().then(calls => console.log(calls));
  }
```
* To view it from state
```javascript
 const {calls} = this.state
    return (
<View>
          {
            calls.map(
              question => <Text key={question.name}>{question.name}</Text>
            )
          }
 </View>    
 )
```
  
</details> 
<details>
  <summary> Cocoapods </summary>
 
*  CocoaPods is a dependency manager for Swift and Objective-C Cocoa projects. It has over 30 thousand libraries. It helps to incorporate 3rd party libraries into your project you can find [more](https://stackoverflow.com/questions/22261124/what-is-cocoapods) 
</details>   
<details>
         <summary> Async Storage Secure </summary>
  
* Link to [async-storage-secure](https://github.com/oblador/react-native-keychain) and here is [stackover fellow](https://stackoverflow.com/questions/39148714/is-react-natives-async-storage-secure) for an [example](https://github.com/oblador/react-native-keychain/blob/master/KeychainExample/App.js)
* Save data into [async-storage](https://www.thepolyglotdeveloper.com/2015/09/saving-data-in-your-react-native-mobile-application/) not sacure 


</details> 
<details>
         <summary> Acuant iOS and Android </summary>

#### iOS
* Acuant using [swift](https://github.com/Acuant/AcuantiOSMobileSDK) and the shorter version for [swift](https://github.com/Acuant/AcuantiOSMobileSDKV10)
* Acuant [iOS](https://github.com/Acuant/AcuantiOSMobileSDKV10) and [Android]()
```javascript
git clone 
sudo gem install cocoapods // if not installed already
sudo gem install -n /usr/local/bin cocoapods
pod setup 
brew install git-lfs
git lfs install
git lfs pull
```
* Create bridging objective-c to swift [link](https://developer.apple.com/documentation/swift/imported_c_and_objective-c_apis/importing_objective-c_into_swift) 

#### other
* Acuant [sdk](https://github.com/Acuant/AcuantAndroidMobileSDKV10)
* Acuant [HTML](https://github.com/Acuant/HTML)
 
</details> 

<details>
     <summary> More </summary>
  
### Native
* [link](https://facebook.github.io/react-native/docs/getting-started.html) to start app
* Download expo and check the ip address with your phone

```javascript
import React from 'react';
// but in nodejs outofblue above is like below
const react = require('react');
```
* Div, table in react native dont exist and  we have to import everything first some equialancy are like,  `view` equivalence `div` and  
`text` equivalence `p`. React native would translate tags into ios and Android first  
### Style
* A simple example of design [flex in react](https://facebook.github.io/react-native/docs/flexbox.html)
* `Flex` is a box which in native the default is column since most phone are vertically
* We can use `justifyContent` and assign `felx-start`, `flex-end` or `center` to it
* Create objects from styelsheet class with keys and values for example
```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'felx-start',
  },
  secondtypeStyle:{
  },
});
```
* to make font size bigger put inside text
```javascript
<text style={style.title}> welcome </text>
title: {
 fontSize: 30
}
```
##### Elements  
* One common element is [TouchableHighlight](https://facebook.github.io/react-native/docs/touchablehighlight.html). At the bottom of docs  we have some props that are available for this this component like `underlayColor` 

##### Timer in JS 
```javascript
 amir = new Date
 result = new Date - amir // returns the milsec between times check in console chrom
 console.log(result);
 ```
 #### difference between 
 ```javascript
   startTimer = () => { 
 and
 startTime() {
 ```
 * At first object `this` point out to parent object and second point out current object, so everytime we have an error of unbining 
 objects we can either binds them inside constructor or use the first format or anonymouse funciton to overcome this.
* Code for [Timer](https://github.com/anabaei/JavaScript/blob/master/App.js)  
* just one notes about clear interval, it is like a cookie funciton
----------------
* Then we run our Rails backend 
* Request from server and list them in component so we create request directory 
* Assume you have jwt with correct, so use valid username/password
* so we have a function getJWT in resuest folder
```javascript
ComponentDidMount(){
console.log('working');
}
```
</details>
<details>
  <summary> ngrok tunel mobile </summary>
  
* [ngrok](https://ngrok.com/) is a way to give you online address to access. 
 ```
brew cask install ngrok
ngrok http 3000
```
config.js is like just this 
```javascript
export const Base_URL = 'addreess'
```
* we should use scrollview instead of view but the main should be [flatList](https://facebook.github.io/react-native/docs/flatlist.html)
* related [notes](https://github.com/CodeCoreYVR/aa-react-native-nov-2017)

</details>

<details>  
  <summary> Errors</summary>
  
  * One error [link](https://github.com/kmagiera/react-native-gesture-handler/issues/205)
  * If you are using Expo to build your react native app you do not have to `import react-native-gesture-handler`
  * remove caches
  ```javascript
  rm -rf $TMPDIR/haste-map-*
  rm -rf $TMPDIR/metro-cache*
  ```
  * ` ERR! Something went wrong while linking. Error: Cannot read property pbxprojPath' of null` 
  ```java
  react-native upgrade // make sure react-native in package json and react are updated versions 
  ```
 </details>

<details>
  <summary> Convert React to React-native </summary>
 
 * one error is 
 ```javascript
 this.props.function is not a function
 ```
 one resource for [solution](https://stackoverflow.com/questions/40364944/react-redux-this-props-actions-fetchposts-is-not-a-function)
</details>  

# Swift 

* When cloning SampleApp please change the folder name to SampleApp as well!
* [downgrade ios](https://ipsw.me/)
<details>
 
  <summary> Basics </summary>

* Simple navigate between two pages [source](https://www.youtube.com/watch?v=G2LWoJJ4g7A)
* `var` means variables can be changed
* `let` means variables can not be changed
* `print` is print statement
* Swift is a typesafe language. It means every variable needs to have specific type
```swift
// infered
var temp = 5
// explicit 
var temp :Int
temp = 5;
var temp : Double = 5.5
// assign all variable to one type
var gold, mana, skill :Int 
```
* Operators
```swift
// ternary
var bonus = hp < 25 ? 10: 0
// range
1...5  one to five
1..<5  one until five
```
* String
```swift
// declaring 
var temp1 = ""
var temp2 = String()
var temp3 = "name"
// concatination
temp2 = temp1 + temp3
temp2 += temp3
//String interprolation
let temp4 = "Welcome \(temp3) to the swift"
// String methods
temp4.contains("n")  // pass true false
temp4.append("something")
temp4.insert(contentOf: "welcome to", at: 3)
temp4.insert(contentOf: "welcome to", at: temp1.startIndex)
temp4.remove(at: temp1.index(before: temp1.endIndex)
temp4.split(separator: ",")
// casting 
var a = Int(5.99)
```
### Collections
* Arrays
```swift
var emptyArray: Array<String> = []
var emptyArray: Array<String>()
var emptyArray: [String]()
var temp: [Int] = []
var temp = ["aa","bb", "ccc"]
temp.count
temp.isEmpty
/// loop an array
for dif in temp {
 print(dif)
}
for(index, dif) in temp.enumerated() {
 print("\(index) -> \(dif)")
} 
```
* Hashes
```java
var temp: Dictionary<Int, Int> = [:]
var temp =  Dictionary<Int, String>()
var temp = [String : String]()
var temp: [String : String] = [:]
// keys cast as array of strings 
let allkeys = [string](temp.keys)
let allvalues = [Int](temp.values)
// Adding updating hashes
var players: [String: Int] = ["HP":100, "Arrack": 35, "gold": 29]
// add key value
players["newkey"] = 24
// update if not exist add
players.updateValue(33, forkey: "Guided")
let oldvar = players.updateValue(33, forkey: "gold")  // oldvar=29
// to remove
players.removeValue(forkey: "gold")
// nested dictionary
var dic = [
  "Fetch dic": [
     "objective1" : "retrive data",
     "Hidden Objec" : "complete the quest"
  ]
]
// optional may not exist
var res = dic["Fetch dic"]?["objective1"]
```
* Sets stores unique values
```swift
var temp = Set<Int>()
var temp: Set<Int> = []
// dont need to tell what kind of set is that becuase we initialize it
var act: Set = ["first", "second", "third", "fourth"]
act.remove("first")
act.insert("noway")
act.sorted()
act.contains("as")
for item in act {
 print(item)
}

set1.intersection(set2)         // returns common items only
set1.symmetricDifference(set2)  // returns a set with variables that not involved in both
set1.union(set2) // add two sets togather
set1.subtract(set2)  
```
* Tuples are like set but having different type of items
```swift
var temp = ("frist", 323, true)
OR
var temp: (String, Int, Bool) = ("frist", 323, true) 
// decomposing or accessing data 
var (a1,a2,a3) = temp   // which make it as a1="first" a2=323 and a3=true
temp.0  // returns "first"
temp.1 // returns 322

var temp2 = (name1: "frist", name2: 323, name3: true)
temp2.name1 // returns "first"
temp2.name2 // returns 323
```
</details>   
<details>
  <summary> Control Flow </summary>

* If equal 
```swift
  // creating optional 
  var item: String?   // ? means this item variabl can be null   
  // optional binding
  if let item = itemGuard {
         print("you found a \(item)")
  } // means if item is equal to itemGuard then do the inside procedure else print no item found!
  else
  { print("no item found!") }
```
*  Or for nested
```swift
if let item= itemGuard, let bonus= hp { ///stuff here }
```
* force unwraping tells compiler we are sure 100% the variable is not null
```swift
hpbon!
```
#### Nested objects
```swift
class Adv{
  var equip: Weapon?
}
class Weapon {
  var name: String = "fists"
}
let instanceOfadv = Adv()
if let weaponname = instanceOfadv.equip?.name {         // because equip is optional
   print("you have a \(weaponname) equiped!") 
  } else { print("no data") }
  
```
* `Guard` it say loop through when it is not satisfy the condition then print you can not affford and with key word continue jump to next loop.
```swift
for num in 1...5 or 1..<6 { print(num) }

let shop = ["magic":10, "nothing":32, "Explo": 55]
  for(item, price) in shop {
   guard 20=> price else{
      print("you can not afford it")
      continue
     }
   print("you can addord th \(item) with this \(price) price")
  }
```
* Function `Guard`. guard search for specific item `thevalue` inside `shop` set, if not found print not found.
```java
func itemLook(itemlookingfor: String) 
{
   guard let value1 = shop[itemlookingfor] else {
    print(" not found the value")
    return   // handle to go for when else is not valid
   }
   print("yes \(itemlookingfor) is found")
}
```
</details>
<details>
  <summary> Functions </summary>
  
 * Basic functions 
 ```swift 
 func noretrun() { print("this func has no return") }
 
 func hasnearHunt() -> String {     // we define return type with dash and arrow
    return "Argus"
 }
  func hasHunt(armor: String) -> String {     // we define return type and parameter 
    return "Argus"
 }
 ```
 * Complex functions 
 ```swift 
 func exam(myname: String) -> (item: String, age: Int) {
   return ("my name", 300)
 }
 let temp = exam(myname: "amir")
 print(" your info \(temp.item) and \(temp.age) ")
 
 func exam(myname: String) -> String? {} // means this function can return string or nil
 
 func examp(myname: String = "default value name", age: Int = 99) {}
 
 // pass a function as params to another function, here it takes Int and pass Int
 func exam(base: Int, compute: (Int) -> Int) {}
 
 ```
 * Closures are sets of functionalities they act like blocks or lambda in other languages. Clusores have three parts params, returns and body
 ```swift
 Empy closur  
 var name1: () -> () = {}  // takes no params return nothing 
 
 Basic Closure
 var name1 = { (paramString: String) -> void in print("something....") } 
 
  var name1: (String) -> String = { message in return "\(message) Hello!" }
 ```
 * keyword `in` showing the body of closure 
  </details>
  <details>
      <summary> Type Aliase </summary>
  
  * it means this tuple include these types 
  ```swift
  typealias AttackTuple = (String, Int, Bool) OR  typealias AttackTuple = (name: String,damage: Int, cancharge: Bool)
  // use
  var sunstrike: Attack= ("tuple", 44, true) 
  
  ```
   </details>
    <details>
      <summary>Podfile Cocoapods </summary>
  
  
 * The [Podfile](https://guides.cocoapods.org/using/the-podfile.html) is a specification that describes the dependencies of the targets of one or more Xcode projects. 
  </details> 
   <details>
      <summary> Classes and Struct </summary>
  
  #### Basic class
  ```swift
  class Adventure {
  var name: String
  var hp: Int
  
  /// Struct 1
  convenience init(name: String) {
   self.init(name: name, hp: 100)
  }
  // struct 2
  init(name: String, hp: Int) {
    self.name = name
    self.hp = hp
  }
  
  // computed properties
  var res: Int {
      return max - hp
    }
  }
  ```
  * set and get
  ```swift
  
  var health: Int {
    get { return hp}
    set {hp = newvalue}  
  }
  
  var player = newplayer(name: "amir", hp: 96)
  player.newhealth = 100  
  player.newhealth  // returns 100
  ```
  #### custom method
  
   </details>
  <details>
     <summary> Integrate React to IOS  </summary>
  
  * I use [this chineese](https://github.com/mime-mob/ReactNative_iOS/blob/master/ReactNativeDoc) 
  * an english [res](https://medium.com/delivery-com-engineering/react-native-in-an-existing-ios-app-delivered-874ba95a3c52) and [facebook](https://facebook.github.io/react-native/docs/integration-with-existing-apps)
  * An example [here](https://github.com/chicio/React-Native-Multiple-RCTRootView/blob/master/ios/Podfile)
  * [tutorial](https://www.youtube.com/watch?v=iJsO7-nQfuc)
  * [example of it](https://github.com/MohannedA/React_Native_Integration_IOS/tree/1b6df187cb7a14fee1a49a7820accabf58dac6d2/ios/ReactNativeIOSApp)
  * create a folder name `Mk1`, inside the folder create a package.json as  
  ```
  {
    "name": "mk1",
    "version": "0.0.1",
    "private": true,
    "scripts": {
        "start": "node node_modules/react-native/local-cli/cli.js start"
    },
    "dependencies": {
        "react": "16.8.3",
        "react-native": "0.59.3"
    }
}
  ```
  * Then open xcode and create a single view page same name `mk1` inside mk1 folder from last part
  ```javascript
  // inside mk1 run to create package-lock from package.json
  npm i 
  // go to folder of ios app you created then run
  pod init
  // then inside podfile add below
  
platform :ios, '12.1'
use_frameworks!

target 'Mk1' do
  # Comment the next line if you're not using Swift and don't want to use dynamic frameworks
  
  # 'node_modules'目录一般位于根目录中
 
  pod 'React', :path => '../node_modules/react-native', :subspecs => [
    'Core',
    'CxxBridge',
    'DevSupport',
    'RCTActionSheet',
    'RCTAnimation',
    'RCTGeolocation',
    'RCTImage',
    'RCTLinkingIOS',
    'RCTNetwork',
    'RCTSettings',
    'RCTText',
    'RCTVibration',
    'RCTWebSocket',
  ]
  # Explicitly include Yoga if you are using RN >= 0.42.0
  pod "yoga", :path => "../node_modules/react-native/ReactCommon/yoga"

  # Third party deps podspec link
  pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
  pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'
  pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'
  
end
  ```
  * then close xcode and run below
  ```javascript
  pod install 
  ```
  * now open xcode and open `Mk1.xcworkspace` and not `Mk1.xcodeproj`
  * then in main `viewcontroller` add
  ```javascript
  import React 
  ```
  * it shouldnt give you error if you get check the cashes or try with another name
  * Now ready to call from xcode. create an eventhandler in iphone and define action as below in viewcontroller
  ```
      @IBAction func high(_ sender: Any) {
      NSLog("Hello")
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        let mockData:NSDictionary = ["scores":
            [
                ["name":"Alex", "value":"42"],
                ["name":"Joel", "value":"10"]
            ]
        ]
        
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "Mk1",
            initialProperties: mockData as [NSObject : AnyObject],
            launchOptions: nil
        )
        let vc = UIViewController()
        vc.view = rootView
        self.present(vc, animated: true, completion: nil) 
    }
  ```
  * so make a react page to be rendered as `index.ios.is` as 
  ```javascript
  import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

class Mk1 extends React.Component {
  render() {
   

    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>2048 High Scores!</Text>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// Module name
AppRegistry.registerComponent('Mk1', () => Mk1);
  ```
  * Also add below to `info.plist` file
  ```javascript
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSExceptionDomains</key>
    <dict>
        <key>localhost</key>
        <dict>
            <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
            <true/>
        </dict>
    </dict>
</dict>
  ```
  * now run `react-native start` then run the ios app it should work!
  </details>
  <details>
     <summary>  Errors  </summary>
  
  * if `xcode not support the version of the ios on device` you can download the version from here and `command+rightClick` add it to the [folder](https://github.com/filsv/iPhoneOSDeviceSupport) is provided 
  * Error `Xcode will not open my project or xcodeworkspace` use this [link](https://stackoverflow.com/questions/7290377/xcode-will-not-open-my-project)
  * `No such module` [link](https://stackoverflow.com/questions/29500227/getting-error-no-such-module-using-xcode-but-the-framework-is-there)
  * (good example)[https://github.com/michalsanger/native-connected/blob/fff02790c3f15628ed385dcd94844fdd10748264/ios/ViewController.swift]
</details>
 
  
  
  
