# Redux
* [Provider](https://github.com/reduxjs/react-redux/blob/master/docs/api.md#provider-store)
* [simple exa ](http://blog.tylerbuchea.com/super-simple-react-redux-application-example/)
* [redux](https://stackoverflow.com/questions/35864957/how-to-use-reduxs-provider-with-react)
* [redux2](https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/)
* What is Redux flow?
  *  Views, dispatches actions (event handlers)
  *  Actions triggers reducers, reducers update State which state update UI
  *  Store holds the state which is global state
* What are thunks?
  * Thunks are standard approach for async logic in redux app
  * Thunks returns a function instead of plain object
  * Since it returns functions, we can do things inside the function like api call, then this could update your state

* What is JSX? a syntax sugar for createElement. Babel translate React eventualy to html javascript
* Why class is className ? class is a reserve word for javascript, so when you use class javascript think you really want to create js class not css class 
* Describe Data Flow in React?
  * Data flow is uni direction, you pass data from parent to child component in one direction only using props or contextAPi or global state management like redux 

* How would you deplay api call?
  * In class we could have componentDidMount. It means a function run after a component loaded. 
  * Use useEffect hook and pass empty array. It mimics component did mount and inside of useEffect write your api call. If you pass variable inside the array second args at useEffect, useEffect run when they change.

* Should you use ternaries or && and operator to conditionally render react component? 
  * Javascript assume 0 and everything is always false without checking the right side, so ternary is better

* 
* Changes are initiated with actions. Actions are dispatch with `Dispatcher`. Dispatcher is an object that sends the action to appropriate store. 
The store holds data like model. Then the view is updated from stores. So all start with dispatching actions and end with updating views.
![alt text](https://user-images.githubusercontent.com/7471619/40376160-76c65d1c-5da2-11e8-93de-f02a9cdfba8e.png)
Redux isnt exactly Flux it is Flux-like. The only difference is Redux has only one store while Flux can have multiple stores. So because there is only one store so there is no need to dispatcher and store does that. 
* Store keeps all states. We would have functions to manages these states. 
## Start
* To start when we write wire frames taking care of verbs more to identify actions. 
* So we create a constant.js file and store all actions in a hash as 
```javascript 
const constants = {
  ADD_DAY: "ADD DAY",
  REMOVE_DAY: "REMOVE DAY",
  SET_GOAL: "SET GOAL",
  ADD_ERROR: "ADD ERROR",
  CLEAR_ERROR: "CLEAR ERROR",
  FETCH_RESORT_NAMES: "FETCH RESORT NAMES",
  CANCEL_FETCHING: "CANCEL FETCHING",
  CLEAR_SUGGESTION: "CLEAR SUGGESTIONS"
}

export default constants
```
Link from [here](https://www.fullstackreact.com/30-days-of-react/day-19/)
```javascript
npm install --save redux react-redux
```
#### Reducer
* Reducer is a function to return a representation of the next state. When we dispatch an action on the store, this reducer function will be called with the current state of the application and the action that causes the state to update. A simple reducer is like below in `reducers.js` file 
```javascript
export const goal = (state=10, action) => // then it needs to be imported as import {goal} from ...
(action.type == C.Add_day) ?
 action.payload :
  state
  // which is equivalent with below which has to be exported at the end
  function goal(state, action) {
   if (action.type == C.Add_day) {
      return action.payload
      }else
      {
       return state
      }
  }
 ```
* `[...state]` spread operator. So if there are other variables in state we add all into a new array. 
*  Below is another reducer which return back an array with adding error to state. You may tempt to do `state.push(action.payload)` to add error to state array but it muted current state array and we dont want to change the incoming array and just return new array.  
```javascript
  export const errors = (state=[], action) => {
   switch(action.type) {
     case C.add_error: return [...state, action.payload]
          default: return state
    }
  }
 ```
We careate a switch statement based on action type. 
* To user above reducers we have 
```javascript
import C from './constants'
import {errors} from './store/reducers'
const action = {
 type: C.Clear_error,
 payload: 0
}
const nextState = errors(state,action)
console.log(nextState);
```
![alt text](https://user-images.githubusercontent.com/7471619/215295958-ebe4ae39-c521-4ff2-9456-89403dd6d700.png)

### Store
* use `createStore` function from redux and then assign a reducer to ir and then dipatch to get new array of state
```javascript
import {createStore} from 'redux'
const store = createStore(goal) // const store = createStore(goal, initialState) this way we can pass initial state 
store.dispatch({type: "day", addAnyState: "any state you want to add"})

console.log('next state', store.getState());
```
* So far we learned `createStore` and `getState` functions we learn `subscribe`. Subscribe can take a call back handler function everytime an action is dispatch. 
```javascript
store.subscribe(() => {console.log(store.getState()), 
 localStorage['redux-store'] = state
 });
```
So instead of writing two times console above just write one console and it runs two times since state changed. We can save the value of state into local storage as well 
* To acceess store in console, we can have `window.store = store ` to globally expose store.  




* filter method can filter an array which returns a new array and not change the origianl one. Filter needs a callback function with one message and index name. If predicated is true then this item is added to new array and if it false it is out of array
```javascript
return state.filter((message, i) => predicated)
return state.filter((message, i) => i !== 3) // it only returns the one that i are not equl to 3
```
### Actions
* Store and Reducer should not have any application logic. All logics should go in actions. So create an action in actions.js as 
```javascript
export function addDay(reosrt, data, powder=false, backcountry=false) {
 // Add app logic here
  return {
    type: "add day",
    payload: {resort, data, powder, backcountry}
    }
}
```
And inside app.js we have action creator as `addDay` passing params 
```javascript
import {addDay} from './actions'
store.dispatch(
   addDay("firstchange", "something else");
)
```
And more actions like below, notice when using arrow functions so it returns what is on the other side of the arrow so using parentheses we can return an object. 
```javascript
export const setGoal = (goal) => ({
 type: "add new",
 payload: goal
 })
```
### Map Data from Redux to Components
* `Connect` is special funciton to map state from the sote to a component. If we have a component like below 
```javascript
import SkiDayCount from './ui/SkyDayCount'

export default() => 
 <SkiDayCount totoal={100} powder={25} backcountry={10} />
```
* Now adding `connect` to use a function to map state to props instead of hardcoding as above. So define a function and pass state as argument
```javascript
import SkiDayCount from './ui/SkyDayCount'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
 return {
   total: state.allSkiDays.length,
   powder: state.allSkiDays.filter(day => day.powder).length,
   backcountry: state.allSkiDays.filter(day => day.backcountry).length
  }
 }
 const container = connect(mapStateToProps)(allSkiDays)
 export defualt container;
```
* Connect function is a higher order function and returns a function and what we want to send to the function we wish to wrap. 



----------------
## Extra
----------------
* A reducer to with an action to add_day 
```javascript
export const allskidays = (state=[], action) => {
 switch(action.type) {
   case C.add_day: return [...state, action.payload]
            default: state
  }
}
```
* And in app.js we have
```javascript
const state = [{"resort" : "kirkwood", "date":"2016-12-12", powder: true}]
const action ={type: c.Add_day, payload: {"resort" : "new kirkwood", "date":"2013-12-12", powder: true}}}
const nextState = allskidays(state, action)
```


* Now we have to define variables that those actions impact on our state. First we define a json file as initialState.json 
```javascript
{
  "allSkiDays":[
    {
      "resort": "kirkwood",
      "date": "2016-12-7",
      "powder": true,
      "backcountry": false
    },
    {
      "resort": "sqyua vallye",
      "date": "2016-12-7",
      "powder": false,
      "backcountry": false
    },
    {
      "resort": "raining day",
      "date": "2016-10-9",
      "powder": true,
      "backcountry": true
    }
  ],
  "goal": 10,
  "errors": [],
  "resortNames": {
    "fetching": false,
    "suggestions": ["Squaw Valley", "Snowbird", "Stowe", "Steamboat"]
  }
}
```
### SCSS
* inheritence in css can be use as 
```css
.classnameA {
 color: black;
}
.classnameB {
 @extend .classnameA;
}
```


# Redux 2

* is State management tools.  It can be used even in node

Redux has 5 main apis
* ApplyMiddleware
* compose 
* combineReducers
* bindActionCreators
* createStrore (which has 4)

```javascript
import {
,ApplyMiddleware
,compose 
,combineReducers
,bindActionCreators
,createStrore } form "redux"

```

<detail>
    <summary> compose </summary>

* Compose is  function to execute functions in order 
```javascript
func1  // add 1 to the left
func2 // add A 
func3 // add <>

func1(func2(func3("O"))) // returns 1A<>O
comose(func1, func2, func3)
```

</detail>
<detail>
   <summary> create store (reducer) and action </summary>

* Create store requires reducer as input. Reducer in general takses two arguments and return one results. 
Here we can define a reducer as 
```javascript

const ADD5 = (amount) => ({ type: ADD, payload: 5})

const reducer = (state = initialState, action)=>{
  if (action.type === ADD5)
  {
    const newValue = state.value + state.payload
    return ({value : newValue}) 
  }
  return value
}


//const store = createStore(reducer, initialState)
const store = createStore(reducer)

// with dispatch we put action into reducer 
state.dispatch(something())

// get state
console.log(state.getState())
```

* Example: if we have an object and wanted to only update location we could define updateName, updateCity, etc actions .
```javascript
const angrybird = {
  name: "angry",
  email: "angry@gmail.com",
  author: {
    firtname: "name",
    lastname: "",
    location: {
      city: "vancouver"
    }
  }
}

```
* To change city 
```javascript
if( action.type === "CITY_CHANGE")
{
  return {
    ...state,
    author: {
      ...state.author,
      location :{
        city: action.payload
      }
    }
  }
}
```

</detail>
<detail>
  <summary> subscribe </summary>

* It is equal to event lister in DOM, and emit listenr in node.
* Here is when state change please call this function

```javascript
const subscriber = () => console.log("", store.getState())

// in this way everytime state changed, this console log is triggered
store.subscribe(subscriber);

```
</detail>





