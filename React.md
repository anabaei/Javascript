
[regulare expression](http://www.rexegg.com/regex-quickstart.html), [git](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things)
csrf vs xss Cross-site Request forgery vs Cross site scripting


```javascript
// if react is in bad state to start fresh
rm -rf .cache dist
```

* React, in its simplest form is a way to write modular, reusable code. A good example of [React](https://medium.com/@gwen_faraday/converting-a-react-app-to-react-native-d7df17968fc6) explanation
 * A good resource for beginner [promises](https://github.com/mattdesl/promise-cookbook)
 * A resource for JavaScript [Algoritms](https://github.com/trekhleb/javascript-algorithms)
 * Things I wish I knew before [starting](https://medium.freecodecamp.org/what-i-wish-i-knew-when-i-started-to-work-with-react-js-3ba36107fd13) 
 * [Graphql](https://blog.apollographql.com/graphql-vs-rest-5d425123e34b)
 * Best example of a [websie](https://codelabs.developers.google.com/codelabs/cloud-create-a-nodejs-vm/index.html?index=..%2F..index#7)
 ## React 
  <details>
     <summary> Interviews </summary>
 
 * What is `react`?
 * `JSX` is a syntax extention to javascript allow us to write javascript code with HTML structure
 * Only `javascript` can be used inside browser for execution. In `HTML` files we can't have any third party libraries so JSX requires `babel compiler` to convert to javascript. create-react-app` internally use `babel` to convert jsx to javascript
 * `DOM` is `Document Object Model` is representation of HTML elements in a balanced tree structure. Updating `real dom` tree is taking time. It needs to update tree then use new css which takes time. So React provides `Virtual Dom` and it updates only that tree. There is a diff algorithms between real and virtual dom which update real dom based on virtual dom  
 * Each components update one part and they are reuseable
 * One way data binding allows app to reduce heavy lifting remembering processes on entity or classes changing. Also one way binding makes it easier to debug
 ```javascript
// es5 
module.exports = Component

// es6
export default Component
 ```
 ## Simple Code
 * A good resource for [react](https://www.youtube.com/watch?v=-dS9pvGqlX8&t=134s)
 ```javascript
 class Simple extends React.Component{
   work(){
     alert("nice work")
   }
   render(){
     return(
       <button onClick={this.work}> Do Test  </button>
     );
   }
 }
 ```
* We could define it 


 * Difference between function and class components
 * Difference between state and props 
 * She got it from [this](https://medium.com/@vigowebs/frequently-asked-react-js-interview-questions-and-answers-36f3dd99f486)
 * Read [this](https://www.codementor.io/blog/5-essential-reactjs-interview-questions-du1084ym1)
 </details>

 <details>
     <summary> Start Server Side React SSR NEXT </summary>
 
 * One source [SSR](https://blog.logrocket.com/next-js-vs-create-react-app/)
 ```javascript
npx create-next-app 
npx create-next-app my-app --template bootstrap // use bootstrap template
npm run dev // run in dev
npm run build 
npm start 
// to update port running on another port  
// "dev": " next -p 1500 dev",
 ```
 
 * delete `components` and `pages` folders 
 
 ### Static Routes
 * Routing is based on file system
 * make `src/pages` folders and inside that create file as `details.js` and `index.js`

 ```javascript
 // details.js
export default function Details() {
     return <h2> details </h2>
}
//_app.js
import 'bootstrap/dist/css/bootstrap.min.css';// if you want to use bootstrap
export default function Index() {
     return <h1> Index </h1>
}
// To export default you can have:
// export function Index(){
//  ......
//}
//  export default Index
 ```
 ### Dynamic Routes
 * rename the route name with []
 ```javascript
// [name].js
export default function Name() {
     return <h1> any name  </h1>
}
 ```

 ### Read params
 * `useRouter` is a react hook. 
 ```javascript
import { useRouter } from 'next/router';

export default function Name() {
     const router = useRouter();
     console.log(router.query); // this obj includes dynamic routes and query params 
     return <h1> any name  </h1>
}
 ```

 ### Link
 * Notice we have `as` key word `maps` our route to the existed route 
 ```javascript
import Link from 'next/link';

export default function Name() {

     return <div>
      <Link as="/myname" href="/[anothername]"> 
           <a> you know </a>
      </Link>
     </div>
}
 ```
* To avoid your pages expose, then create containers and put data over ther and use your pages only as `routing` 

 </details>
 <details>
     <summary> Migrate From To TypeScript </summary>

*  
</details>   
 <details>
     <summary> Migrate From To TypeScript </summary>

* Rename `js` appendix to `tsx` and then install and run it

 </details>  
<details>
     <summary> Fetch Data </summary>

 </details>   


 <details>
     <summary> UI design/ styles </summary>
 
 * One reliable is [Materianl ui](https://github.com/mui-org/material-ui)
 </details>
 <details>
     <summary> Render an Array of options in view  </summary>
 
 * use [here]()
 ```javascript
render() {
    const data =[{"name":"test1"},{"name":"test2"}];
    const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

    return (
      <div>
      {listItems }
      </div>
    );
  }
 ```
 * Return  [pass params](https://www.robinwieruch.de/react-pass-props-to-component/)
 * Read URLs in React as [here](https://stackoverflow.com/questions/39823681/read-the-current-full-url-with-react)
 ```
 window.location.href
 ```
 </details>
#### Array destrucutres
* Instead of calling via index we can have
```javascript
const arr = ['first', 'second', 'third']
console.log(arr[0]) // returns first
// 
const [A, B, C] = ['first', 'second', 'third']
console.log(A)// return first
console.log(B)// return second
// 
const [, , C] = ['first', 'second', 'third']
console.log(C)// return third
```
  <details>
     <summary> Hook </summary>


### Hook
* Hooks is a function that allows you to add some functioneallity to our function or component. React has built in hooks to handle common use cases like useState. Hooks can't work inside classes [here]
(https://reactjs.org/docs/hooks-overview.html#:~:text=Hooks%20are%20functions%20that%20let,you%20use%20React%20without%20classes.&text=You%20can%20also%20create%20your,stateful%20behavior%20between%20different%20components). Hooks have different types 
## useState
* Is a function when we use different states in our app. The first value is the state and second value is always a function to set state
```javascript
const [currentState, setCurrentState] = useState("initial");
return (
  <div>
    <button onClick={()=> setCurrentState("changed")}>
    {currentState}
  </div>
)
```
* Notice: because we can't render `jsx` elements so we need to wrap it to make it one 
```javascript
return(
  function app(){
    return(
      <div>a</div>
      <div>b</div>
    )
  }
)
```


## useEffect
* Sometimes the things we want are not part of of the render. We need side effects. Like console.log something or fetch API or any interaction with browser. 
* useEffects returns a function. It designs to work with other stateful hooks like useState and useReducers. 
*  [here](https://www.youtube.com/watch?v=j1ZRyw7OtZs)
```javascript
useEffect(() => {
  console.log("render");
})
```
*  We can manage it to be called when we want not everytime the page redenred by adding to array values of states which change
```javascript
useEffect(() => {
  console.log("render");
},[values.password])
```
* we can replace `componentDidMount` and `componentWillunMount` with `useEffect`. We can clean up state by adding a return as 
```javascript
useEffect(() => {
  console.log("render");

  return () => {
     console.log("cleaned up");
  };
},[values.password])
```
* You can have more than one `useEffect` and they fire off in order.
* ApiUser
```javascript
function app(){
  return <ApiUser login="user1" />
}
```
* Then ApiUser function is like below with destructuring props
```javascript
function ApiUser({login}) { // used destructuring props to login here
   const [data, setData] = useState(null);
   useEffect(()=>{
     fetch(`https://api.github.com/users/${login}`)
     .then( res => res.json()) // convert to json
     .then(setData) // this one call function with new value
     .catch(console.error);
   }, [])
   // if data return a jsx with a blob data
    if(data) {
      return (
        <div>
        {JSON.stringify(data)}
        <h1> {data.login}</h1>
        <img src={data.avatar_url} />
        </div>
      )
    } 
    return null;
}
```

#### Fetch Example
* create `useFetch.js`  
```javascript
import {useEffect} from 'react';
export const useFetch = (url) => {
  useEffect( async()=> {
     await fetch(url);
  }, [url])
}
```


## useReducer
* Reducer functions take current state and return a new state. Good example
```javascript
// take toggle functin with initial value
const [checked, toggle] = useReducer( checked => !checked, false); 
return (
  <>
   <input
   type="checkbox"
   value="checked"
   onChange={toggle}
   />
   {checked ? "checked" : "unchecked" }
  </>
)
```


#### state
```javascript
  const [state, dispatch] = useReducer(reducer, {count: 0}); // assign with reducer and initialstate
```
#### reducer
```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
```
#### dispatch
```javascript
return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
```
 </details>
 
 <details>
     <summary> Map</summary>
 
 * ES6 gives this power to users create a map. Instead of having object data type. You can find it here https://flaviocopes.com/javascript-data-structures-map/
 * The functions the new map gives us
 ```javascript
 - Get all keys
 - Get all values
 - Check all keys
 - ...
 ```
 </details>
  <details>
     <summary> Two way data binding </summary>
 
 * Differnce between [one way and two way data binding](https://www.pluralsight.com/guides/one-and-two-way-data-binding-angular)
 * React in default is one way data bindings. One-way data binding will bind the data from the component to the view (DOM) or from view to the component. One-way data binding is unidirectional. You can only bind the data from component to the view or from view to the component.
 * We can make two way data binding with React. It means data back from views to components and applications. In Angulare Changes in the application state have been automagically reflected into the view and vise-versa.
 </details>
   <details>
     <summary> Comunicate among components passing their states </summary>
 
 *  [To pass data from one component](https://www.youtube.com/watch?v=IK9k9hSuYeA) to child we can pass parent component as a props to child and then inside child initialize its state with props of parent and then update the state with user inputs.
 * There are different techniques of data binding which use one-way data binding to bind data from component to view. Below are some of the techniques, which uses one-way data binding.
 #### Four ways to bind data in React:
 * Interpolation Binding: Interpolation refers to binding expressions into marked up language.
 * Property Binding: Property binding is used to set a property of a view element. The binding sets the property to the value of a template expression.
 Attribute Binding: Attribute binding is used to set a attribute property of a view element.
 * Class Binding: Class binding is used to set a class property of a view element.
 * Style Binding: Style binding is used to set a style of a view element.

  </details>
   <details>
     <summary> Drag and Drop </summary>

  * There is DOM and React. But React-dnd stays between
  * They use `react-dnd` npm [link](https://www.youtube.com/watch?v=NW8erkUgqus)
  * Is a high order obstraction over all DND(drag and drop) methods in browser on top of real DOM. It supports mobile(touch) and html5
  * It has some abstractions
  ### Backend
  * There are 3 backends in this library:
  ```
  HTML5: supports all html5 dnd events
  Touch: supports touch events on touch devices
  Test: supports testing dnd interactions
  ```
  ### Item Types
  * Types define pairs of source and destination of each dnd
  *  Define the props to carry information about dragged items

  ### Monitors
  * Communicate to components what's happening on the DOM side from DnD events
  *  Monitors pass contexts to React-DND and then React-DND with collecters(functions) use that state from monitor and turn it into props that we can use and send it to React.
  
  ### Collectors:
  * Functions to turn DnD events, coming from monitor into react props. `Collecting` Props. 

  ### Drag Sources
  * Draggable components and have to have a type.
  * Carry inofrmation to be paased onto drop trgets

  ### Drop Targets
  * Accept certain types of draggable sources
  * It triggers other functions when you drop your item

```javascript
npm i react-dnd react-dnd-html5-backend
```

### useDrag
* import it and then define it as
```javascript
// const [{extraProps}, drag]= useDrag({
const [{isDragging}, drag]= useDrag({
  item: {   // tell what is the object to be dragged
    tyep: 'card'
    id: props.id // it means we not only carries the card but also the id of the card is carrring

  },
  collect: monitor => ({
    isDragging: !!monitor.isDragging() // returns true if this item is draged

  })
})

<Box 
 ref={drag} // it knows which div is draggable
 opscity={isDragging?'0.5':1}
>
```
* `extraProps` contains all objects we want to take back from collecting functions. And we have a ref `drag` to bind the React-dnd to it. 
* Collect functions gives us `extraProps`. 

### Drop
```javascript
//  const [{ addedProps}, drop] = useDrop({
   const [{ isOver}, drop] = useDrop({
   accept: 'card' /// we telling this drop zone only accept card
   collect: monitor => ({
     isOver: !!monitor.isOver()
   }),
   drop: (item, monitor) => myFunction(item); // when drop is done call myFunction
 })

return(
  <Box
  bg={isOver ? 'green.500': 'green.200'}
  >
)
```



  </details>
<details>
  <summary> Include CSS</summary>

* Add into HTML
```javascript
<link rel="stylesheet" type="text/css" href="mystyles.css" />
```
#### Inline 
* Inline CSS in `react`. Write CSS as JavaScript objects, which should be in camelCase
```javascript
class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}
```
#### Object
* Create an object with styling information, and refer to it in the style attribute.
```javascript
class MyHeader extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      <div>
      <h1 style={mystyle}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}
```
#### File & Module
* create App.css and mystyle.css as
```css
body {
  background-color: #282c34;
}
.bigblue {
  color: white;
  padding: 40px;
}
```
* Then import it as 
```javascript
import './App.css';
```
* Module is like 
```javascript
import styles from './mystyle.css'; 
...
return <h1 className={styles.bigblue}>Hello Car!</h1>;
```


</details>

<details> 
   <summary> ES6 </summary>

* React uses ES6. ES6 stands as ECMAScript 6. It has some features as
```javascript
Classes
Hook
Arrow Functions
Variables (let, const, var)
Array Methods like .map()
Destructuring
Modules
Ternary Operator
Spread Operator
```

#### Classes
* A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method
```javascript
class Car {
  constructor(name) {
    this.brand = name;
  }
   present() {
    return 'I have a ' + this.brand;
  }
}
```
* Inherited in class
```javascript
class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
   show() {
      return this.present() + ', it is a ' + this.model
  }  
const mycar = new Model("Ford", "Mustang");  
mycar.show();
```
#### Arrow Functions
*  function
```javascript
hello = function() {
  return "Hello World!";
}
```
* Arrow 
```javascript
hello = () => { return "Hello World!"; }
hello = () => "Hello World!";
hello = (val) => "Hello " + val;
hello = val => "Hello " + val;
```
* `This` in arrow refers to parent object

#### Destructuring
* We may have an array or object, we only need some of the items contained in these
```javascript
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
const [car,, suv] = vehicles;

```
* Destructuring Objects
```javascript
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  registration: {
  city: 'Houston',
  state: 'Texas',
  country: 'USA'
}
}
myVehicle(vehicleOne);

function myVehicle({ brand, model, registration: { state } }) {
  const message = 'My ' + brand + model + ' is in ' + state
}
```
#### Spread Operator
* Spread operator (...) allows to copy all or part of an array/object into another array/object.
```javascript
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
```
* Combine with destructuring 
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
```
#### Module
* A
```javascript
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
};

export default message;

```

#### Component
* Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML
* Component in component
```javascript
function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

#### React Event
* onClick instead of onclick.
* Event handlers inside curly braces
`onClick={shoot}  instead of onClick="shoot()"`
```javascript
// React
<button onClick={shoot}>Take the Shot!</button>

// Html
<button onclick="shoot()">Take the Shot!</button>
```


</details>  

<details> 
   <summary> Mongo </summary>

* MongoDB represents JSON documents in binary-encoded format so we call it BSON behind the scenes
* 
</details>
 
## Virtudal DOM 
* Virtual Dom is a programming concept where virtual representative of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM 
* JS interact with DOM with some commands like `getelmentsById` or write into DOM. Backbone is continuing rendering data from JS into DOM even without any changes happend. 
* React work with Virtual DOM which is in the middle of DOM and JS logic and only when it is neccessary it pushes changes to Real DOM.


![alt text](https://user-images.githubusercontent.com/7471619/35168538-2b21e61e-fd0e-11e7-97de-956506f46288.png)
![akt](https://user-images.githubusercontent.com/7471619/35168556-37471694-fd0e-11e7-9ad7-7031a5b11bf5.png)
![alt text](https://user-images.githubusercontent.com/7471619/35168571-4144c7b8-fd0e-11e7-8395-ba4cff98b97e.png)
<details>
        <summary>Webpack</summary>

* Webpack is a build tool that allows us to take all of our assets and turn them into a production ready bundle. An alternative way to add links to scripts, css from an html files 
* Webpack load assets into a page when it is needed
* Minimize initial loading time for app
* Avoid repeating of downloading resources for each page
* Webpack transformation helps to 
  * Convert SaSS or LeSS to CSS prior to production
  * Convert ES6 to vanilla commonJS

* No support of node.js 4
* Webpack has two mode:
  * dev mode: the speed of the build is optimized
  * production mode: the size of the build is optimized

* webpack 4+: Support for WebAssembly: means import/export any web assembly module
  * you can load Russ, C++ and C

```javascript
npm init
npm install webpack@4.28.4 --save-dev
npm install webpack-cli@3.2.1 --save-dev
npm i 
npm i jquery --save
dist: everything intended for distribution production
```
*   s
```javascript
// at src/index.js
const $ = require('jquery')
$("#target").html("hello world")
// at dist/index.html
<!DOCTYPE html>
         
    <h1 id="target"> </h1>
    <script src="main.js"></script>
</html>
```
* we gonna use webpack to generate main.js.
```javascript
webpack // return command not find,
// instead of running globally we can run it as below locally
./node_modules/.bin/webpack
// it is going to look into source folder (src) of the index file, and 
// generate main.js inside dist folder
npx webpack // does the same and result is the same as well, npx is package runner
```
* it is safe to delete main.js and run webpack to create new one
* Now if we pull index.html inside dist, we should see all updates

* We create `webpack.config.js` to not to write commands manually 
```javascript
const path = require('path') // set up the correct path file

module.exports = {
  entry: './src/index.js',
  output: {
    fileame: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
} 

```
* Now if you run `npx webpack` it does above without needing of adding script main.js inside `src/index.js`
* customize webpack.config.js name as 
```javascript
npx webpack --config my.custom.webpack
npx webpack -w // w is like nodemon to rerun webpack when file changes
```
* Webpack Loaders: Transpile `JSX`, `ECMAScript6` into `plain Javascript` using Babel Loader
*  To install babel loader we need to install babel core and babel loader to load and then transpile code
```javascript
npm install babel-loader @babel/core --save-dev
```
* Then adjust webpack config to use babel
```javascript
// add 
module: {
  rules: [
    {
      test: /\.js$/, // means include all files which have js 
      exclude: /(node_modules)/, // exclude node modules
      use: {
        loader: 'babel-loader', // use babel loader
        options: {
          presets: [
            `@babel/preset-env`// you can add which browsers you want to list here
          ]
        }
          
      }
    }
  ]
}
```
* Add babel/preset as well

#### CSS Loader
* npm i style-loader css-loader --save-dev
* npm i url-loader --save-dev





* Webpack is primarily used in web development scenarios where you have a frontend application that needs to be bundled, optimized, and prepared for deployment to a browser environment

* mainly in React and some cases in node where we need to have module systems or bundle assets in case we have server side rendering of css/html to optimize and minify your stylesheets, extract critical CSS
  
* Webpack if we don't use it we won't have:
  * `Module System` only commonjs which is native system in javascript is available not more 
  * `React` most of the time use `webpack` to allow 
  * `Webpack` make sure dependencies on modules are installed
  * `webpack` It optimize of javascript code to reduce the file size of javascript resulting in faster load timing
  * Handle any type of assets like css image fonts and javascript, optimization and file hashing for caching, without webpack bundler need to manage assets manually
  *  
* Sources, [link1](https://www.youtube.com/watch?v=GU-2T7k9NfI)
* `Webpack` takes bunch of assets including js, images, html, svg, css or less files and combine and bundle them into smaller group of files.(one file for js and one for css). It also `managing dependencies` and make sure which files should run first. Also webpack can transpile ES6 and ES7 to javascript format
* `Webpack` in fact managing all our codes. A normal html page is like


```javascript
npm install webpack webpack-cli --save-dev
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  watch: true, // Enable watch mode in this case don't need to delete dist folder every time
};
// run the webpack
npx webpack --config webpack.config.js
npx webpack --config webpack.config.js --watch // using watch flag
// now run the bundle code
const path = require('path');
const bundlePath = path.resolve(__dirname, 'dist', 'bundle.js');
require(bundlePath);
// finally
node run.js
```

* `dom-loader` access to elements of dom and store them into variables. For example
```javascript
var secretButton = document.querySelector('#idNameOfButton')
var secrectParagraph = document.querySelector("#paragraphId")
```
* `app.js` is the one to assign an evenhandler to dom variables and have function
### [Webpack](https://web-design-weekly.com/2014/09/24/diving-webpack/)
* Since we usually use JSX so our React is usign WEBPACK 
* Webpack is a module bundler and is able to bundle up any front end assets you wanna icnlude and gives control how you bundling those different assets. JSX needs webpack to load. 
* Webpack config tells bundle all js into one view html file. 


* 

</details>
<details>
      <summary> JSX JavaScript XML </summary>

* Jsx is a language that built around javascript. It is function calls but is written in style looks html tags. It works very well with React component models when you write stuff that looks like html but it cmpiles down to function that built your component. `Babel` is a tool to convert JSX to Javascript they call Babel a transpilor. By using `create-react-app` automatically indlude and configure Babel for us.
* SO JSX does two important actions:
 1. Allow us to write <div tags which looks like html but they are actual JSX 
 2. Allow to have `Rect.render( <component />, document.getElementById('destination-id-div'));` instead of `rootElement.innerHTML = element;`
#### EJS
* [EJS](http://ejs.co/) is a template allow you to write html tags inside them. It works closely with JSX 
</details>

<details>
      <summary> ES6 </summary>

### ES6 
* Most difference is between `React.createClass` without ES6 and `class name extends React.Component ` with ES6. As below there are two styles from this [link](https://www.fullstackreact.com/articles/react-create-class-vs-es6-class-components/)
```javascript
const MyComponent = React.createClass({
  render() {
    return(<p>I am a component!</p>);
  }
});
```
* And with ES6 
```javascript
class MyComponent extends React.Component {
  render() {
    return(<p>I am a component, too!</p>);
  }
}
```
* [ES6](https://babeljs.io/learn-es2015/), it’s a new JavaScript implementation [10 usefull features of ES6](https://webapplog.com/es6/) and includes some new features like arrow and lexical this compare to ES5 (the ES stands for ECMAScript) is basically regular JavaScript we know.
* [More on not ES6 functions](https://reactjs.org/docs/react-without-es6.html)
</details>

### Components
* Components are a collection of UI elements they can be button, paragraphs or link. We can pass props into these components. Elements are tools that generate html of what components
### Router 
* Is a library that you can say this section render this url and other section render other urls also handling links which are like regular links but it handles in a react way which is completely handle with browser.  


[React Starter kit](https://glitch.com/react-starter-kit?ref=producthunt), [Link to Steve](https://github.com/CodeCoreYVR/react-demo-june-2017)
,[React and all components](https://devarchy.com/react)
,[Responsive](https://medium.freecodecamp.org/how-to-make-your-html-responsive-by-adding-a-single-line-of-css-2a62de81e431)
, [JavaScript Pro](https://javascript.info/)
, [Best JS practice](http://www.thatjsdude.com/interview/#)
, [React Tutorial](https://egghead.io/courses/the-beginner-s-guide-to-reactjs)
, [30 Days of React](https://www.fullstackreact.com/30-days-of-react/)
, [Advance React ](https://reacttraining.com/patterns/)
, [More courses](http://www.quickcode.co)
, [Resume](https://www.hiration.com/?ref=producthunt)
, [Set Background](https://github.com/IdeasMX01/react-body-images)
, [Partial Background](https://github.com/danieltimpone/react-background-image-loader)

#### code & coffee
* ES6 uses webpack to import or export
* typeof null is object
* var in js even out of scope is assigned so we use let which works as we expect, inside the scopt
* To define a function inside of object, using arrows then `this` would refer to outside object which is `windoe`. Only if one object property is definces as a function and that function has a callback(another function in it) then `this` would refer to current object
```javascript
// below works fine when you use a.myf();
const a = {
  name: "amir",
  myf() { return this.name }
}
// below returns not defined  a.myf()
const a = {
  name: "amir",
  myf = () +> return this.name;
}
// but if myf() is callback then it returns corrent
const a = {
  name: "amir",
  // write delayt func
```
* 

### Questions
* How can we retrieve the value of `[[PromiseValue]]` in javascript?
It is an internal property and we can not access it directly however these can be unraped in then promises if we pass it to another then.
[like](https://stackoverflow.com/questions/28916710/what-does-promisevalue-mean-in-javascript-console-and-how-to-do-i-get-it)
* Are we able to write React without JSX? yes
```javascript
return (
<div>
  <img src="profile.jpg" alt="Profile photo" />
  <h1>Welcome back Ari</h1>
</div>
);
```
Without JSX would be like this
```javascript
return (
React.createElement("div", null,
  React.createElement("img", {src: "profile.jpg", alt: "Profile photo"}),
  React.createElement("h1", null, "Welcome back Ari")
);
```
* By rendering h1 tag for example we may think it is just a html tag but actually it needs to be create first in DOM so JSX read the below

```javascript
return (
      <h1 className='large'>Hello World</h1>
    );
```
JSX converts to below 
```javascript
return (
      React.createElement(
        'h1',
        {className: 'large'},
        'Hello World'
      )
    );
```
It is a way to declare `React.createElement()` declaration. It tells to DOM creaet h1 tag with text inside hello. 
* Also when at first line of defining classes we extends to `React.Component()` is a ES6 features to avoind writing below
```javascript
var HelloWorld = function() {}
Object.extends(HelloWorld, React.Component)
HelloWorld.prototype.render = function() {}
```

### Prototype
* Link for [prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

### HTTP Req & FormData
* An HTTP request should be like below from [this](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and form format from [formData](https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects)
```javascript
fetch("/login", {
  method: "POST",
  body: form
});
```
#### Routs
* To render a page we should use `this` word instead of `window` if it is not clear for DOM which window is the object
```javascript
if(true) {
   //window.local.push('/');
    this.props.history.push('/');
    }
```

 
 
 
# Start 
* set .env variables [link](https://medium.com/@tacomanator/environments-with-create-react-app-7b645312c09d)
* It is  just a view that takes data and displays it. 
* Just start : now we use bare minimum and then we create a framework
```javascript
mkdir react-hello-world
touch index.js
touch index.html
```
add react cdn 
```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0-beta.5/cjs/react.development.js"></script>
```
#### Functions 
* All functions have prop and return value.
* Retun have four elements. First argument is name of element you want to create, seocnd arg is props for that element, then we have to use className: and last argument is the content of argument, 
```javascript
function Hello (props) {
 return React.createElement('h1', {className: 'hello'}, 'Hello, world!');
}
```
#### With & Without JSX
* At index.js write below and create a div element with id `right` at index.html
```javascript
const rootelement = document.getElementById('right');
const time = new Date().toLocaleString();
const element = <div> <input value={time} /> </div>;
ReactDOM.render(element, document.getElementById('right'));
```
* Now above without JSX. Elements become template stirng 
```javascript
const rootelement = document.getElementById('right');
const time = new Date().toLocaleString();
const element = '<div> <input value={$time} /> </div>';
rootElement.innerHTML = element;
```
* Above would result exact same thing just it needs to refresh whole page everytime and not a partial of that

#### Virtual Dom
Everytime there is a change in react then we render the entire DOM. from virtual dom to real dom. 
ReactDom take things put into DOM. React does manipulation Dom for us, it means he calculated what has changed in virtual Dom with real Dom and it does the rest jobs. 
### Start JSX
* Allow to write html tags into javascript, so instead of `react.createElement` we can return `h1 tags` and other tags. 
* Bibble is plugin in JSX that takes all of codes and converted to old javascript. 
* Codes inside `{}` executed as pure javascript 
```javascript
npm install -g create-react-app
create-react-app react-demo
cd react-demo
npm install 
```
Then it runs. 
#### Add heroku
* Heroku
```javascript
 heroku login
 heroku git:remote -a sfu
 git add .
 git commit -am "some"
 git push heroku master
 -- geting error rm 
 git rm yarn.lock
 git rm package-lock.json
```
* Add fontAwesome 
* add img to where the logo.svg is(in src folder) and then import it like 
```css
import sfu from './sfu.jpg'; 
<img src={sfu} />
```

* Code inside `{}` run as js like `<%` tags
#### Components 
* All index.js has at least one `React.Render` at first. 
```javascript
ReactDOM.render(<App />, document.getElementById('root'));
```
* React.Render has two parts first is component `<App />` and second is the actual dom `document.getElementById('root')` where they have to dump that component. 
* in this example 
```javascript
<HEllo now={new Date().toString() } />
```
* We can access to now as property of props object in Hello component. everything between `{}` is pure javascript. 
* Name of the function is name of components always and all functions based components have props as argument and return single react element and we cant return multiple and has to be one. Also we can use classes for this. 
* We take one react element.
* `Components` are cosmpose able thing to make or form combining parts
* Name of function is name of component with `capital` and has to return `single react element` which can be html
* Each component can have childerens components 
#### Hello world! function
* Create a component folder inside src folder and address it in app.js as 
```javascript
import Hello from './components/Hello';
<Hello name='Jon' />
```
* Then inside src folder create Hello.js file and import react and export the function. If we want to export one thing then we need [] around it. 
* We need to import React modules becuase JSX converts tags at first to `React.createElements` functions and these require React to be handle.
```javascript
import React from 'react';
export default Hello;
```
* Define function 
```javascript
function Hello (props) {
      return (
       <h1 className='Hello' >
         Amir, {props.name}!
       </h1>
     );}
```
* Result would be 
```javascript 
Amir jon!
```
```javascript
npm run build
```
-------------
* Create a new folder inside src and there .
```
function Hello (props) {
  return (
    <h1>Hello, {props.name}!</h1>
  );
}
```
#### Bootstrap 
* [Bootstrap-react](https://react-bootstrap.github.io/components/modal/)
* Check React bootstrap to start from [here](https://react-bootstrap.github.io/getting-started/introduction/)


## Dynamically generate components.
isBye is same as isBye={true}

if we have an array of components then it would send all to screen


we define default as empty array to avoid if dont crash as below
```javascript
function Greetings (props) {
  const {names = []} = props;
}
```
Javascript consider zero as false and 1 as true 

## Create pdf in React
* After running `npm install jspdf --save`
```javascript
  var doc = new jspdf();
  doc.text('Hello world!', 10, 10);
  doc.save('a4.pdf');
```
* A good [link](https://stackoverflow.com/questions/44989119/generating-a-pdf-file-from-react-components)
* To add image as pdf instead of `const imgData = canvas.toDataURL('image/png')` define `const dataURI='a big string` as [here](https://github.com/MrRio/jsPDF/issues/1766)
and then `pdf.addImage(imgData1, 'JPEG', 10, 10);`


#### Axios 
* can be found [here](https://github.com/axios/axios)


<details>
 <summary> UI </summary>
 
* One source for UI allows you have navigate as [here](https://ui.reach.tech/tabs/#tabpanels-as) at the bottom 
</details>
<details>
 <summary> Start </summary>
 
 
 * App
 ```jafascript
 npx create-react-app my-app
 ````
 </details>
 
 <details>
        <summary> Modal </summary>


* in order to have auto load modal 
```javascript
   <script>
  $(window).on('load',function(){
    $('#editform').modal('show');
});
   </script>
```
* But if you want use modal below is suggested!
* Use modal from [here](https://www.npmjs.com/package/react-modal)
```javascript
 npm install --save bootstrap
```
inside index.js import so you have Bootstrap working in the whole app
```javascript
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
```
inside app.js to see it works! 
```javascript
<button type="button" className="btn btn-primary">Primary</button>
```
Also you can have simplest way in index.html in public folder
```javascript
 <Button bsStyle="primary">Primary</Button>
```
* OR we can use regulare jquery then use modal from w3school. To use jquery in React use [this](https://medium.com/@shuvohabib/using-jquery-in-react-component-the-refs-way-969de9aa651f) and for modal [this](https://www.w3schools.com/howto/howto_css_modals.asp)

</details>

<details>
 <summary> Redux </summary>

* folowing this [here](https://www.valentinog.com/blog/redux/)
* Redux keeps stats saved! and you can have actions accordingly to state. Redux is there to manage states and has state tree and concept of actions, dispather and reducer to make changes to tree. 
* Followed this [tutorial](https://react-redux.js.org/introduction/quick-start)
```javascript
npm install --save react-redux
npm install --save redux
```
* Then create store as 
```javascript
// src/js/store/index.js
import { createStore } from "redux";
import rootReducer from "../reducers/index";
const store = createStore(rootReducer);
export default store;
```

* States in redux comes from reducers. `createStore` is a built in function in redux library. It takes a `reducer` as first args here is `rootReducer`, second args is optional and can be initial state.
* What is reducer? A reducer is function takes two params the current state and an action
* Notice: In a tipical React component the local state changes in place with setState. In Redux you cannot do that. The third principle of Redux says that the state is immutable and cannot change in place
```javascript
// src/js/reducers/index.js
const initialState = {
    articles: []
  };
  function rootReducer(state = initialState, action) {
    return state;
  };
  export default rootReducer;
```
* As you see this reducer just returns state. It calculates next states and if no action match at least should return one state so the reducer with action would be like
```javascript
function rootReducer(state = initialState, action) {
    if (action.type === 'ADD_ARTICLE') {
     // state.articles.push(action.payload); since state is immutbale we get err, so we have to concat
     state.articles.concat(action.payload)
    }
    return state;
  };
```
* Now need to define `action` as 
```javascript
// src/js/actions/index.js
export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload }
};
```
* Type allows reducers to know what to do
* Play in console

* To play in browser export global variables as store and addArticle 
```javascript
/// src/js/index.js
import store from "./store/index";
import { addArticle } from "./actions/index";

window.store = store;
window.addArticle = addArticle;
```
* Now add to `src/index.js`
```javascript
import index from "./js/index"
```
Now run the app
```javascript
npm start
```
* Redux has three built in mehtods
```javascript
1- getState : current state
2- dispatch : dispatching an action
3- subscribe :  listening on state changes
```
* Since we’ve exported the store as a global variable we can access its methods. Give it a try! 
```javascript
// in console type which returns an array {articles: Array(0)}
store.getState()   
```
* We can assign a subscribe method whenever an action is triggered it calls this mehtod(callback) 
```javascript
store.subscribe(() => console.log('Look ma, Redux!!'))
```
* To trigger an action we dispatch an already defined action `addArticle` as 
```javascript
store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
```
* now you should see the 
```

```
 </details>
 <details>  
       <summary> Pass arguments unlimited </summary>
 
 * As you can see 
 ```javascript
 function foo(a, b, ...others) {
    console.log("a and b are ", a, b);
    for (let val of others) {
        console.log(val);
    }
}
foo(1, 2, 3, 4, 5);
 ```
 
 </details>
 <details>
      <summary> Redux with React </summary>
 
 * Now how to connect them. use `react-redux` library and connect function to connect redux store to React components which has two main args as 
 ```javascript
1- mapStateToProps : connects part of Redux state to props of a React component 
2- mapDispatchToProps : connects Redux actions to React props
 ```
 * `provider` wraps up your React with Redux
 
 </details>

## Move from JS 
* In fact React is a javascript code to 
1. Select an element from DOM to append new element 
2. Create a new element and append it to DOM
```javascript
<div id="root"></div>
<script>
const rootElement = document.getElementById('root');
const element = document.createElement('div');
element.textContent = 'hello';
rootElement.appendChild(element);
</script>
```
* To do above with React we have to create elements and provide properties. we use `render` instead of appendChild. 
* Add cdn React global and React DOM which would be like 
```javascript
<div id="root"></div>
cdn react and react dom
<script>
const rootElement = document.getElementById('root');
const element = React.createElmenet('div', {className: 'container'}, 'hello');
ReactDom.render(element, rootElement)
```
* All these propersties are shown as props objects for each element.
* Instead of `React.createElement` we also can use JSX syntax to make like `<div ` which looks like html but it is not. To translate JSX into html we need babel transpile cdn. To write JS into JSX we can embrace code with '{}'. "spread" operator `...` allows you to pass as many as operators to props [link](https://stackoverflow.com/questions/31048953/what-do-these-three-dots-in-react-do) 
#### Meaning of ...
* It allows you pass an object to a component below codes are equal from [here](https://stackoverflow.com/questions/31048953/what-do-these-three-dots-in-react-do)
```javascript
<Signin firstname="amir" password="1234" />
const props={firstname:'amir',password:'1234'};
<Signin ...props />
```


#### Authy

<details> 
 <summary> Authy </summary>
 
 * You can follow this [link](https://www.twilio.com/console/verify/getting-started/build) and you can find quick start [here](https://www.twilio.com/docs/verify/api)
 * First step is creating API key
 * Start when you are not on server side [here](https://www.twilio.com/console/runtime/functions/manage) also good example working with salesforce 
 ```javascript
 curl 'https://api.authy.com/protected/json/phones/verification/start' \
-d api_key=LdPLlWK1TPlry84XXXXXXXX \
-d via=sms \
-d phone_number= 7783182778\
-d country_code=1

/// Then you receive result as 
{
    "message": "Text message sent to +1 604-518-9612.",
    "seconds_to_expire": 599,
    "uuid": "985exxxxxxxxxxxe4a81ab955a",
    "success": true
}
 ```
 * Then you received a confirmation code. To check the code resend it to 
 ```javascript
 curl -GET 'https://api.authy.com/protected/json/phones/verification/check' \
-d api_key=coENxxxxxxxxxxxlry84 \
-d verification_code=7514 \
-d phone_number=7783182778 \
-d country_code=1

/// Then you receive the code as 

{
    "message": "Verification code is correct.",
    "success": true
}
 ```
 * You can find the way to use it in `node js` is like [here](https://www.twilio.com/docs/verify/quickstart/nodejs)
 
 </details> 
 
 
 <details>
  <summary> Country State dropdown </summary>

 *  First run below
 ```javascript
  npm i react-country-region-selector
 ```
 Then import it to your component 
 ```javascript
 import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
 ```
 Add this to consructor as 
 ```javascript
   constructor (props)
  {
    super(props);
    this.state = { country: '', region: '' };
  }
 ```
 Then define dunctions as 
 ```javascript
   selectCountry1 (val) {
    console.log("change country");
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }
 ```
 And then use it as 
  ```javascript
     <label className="control-label bold small text-uppercase color-2">Country</label>
                 <CountryDropdown
                   className="form-control"
                   id="countryselect"
                   name="country"
                   value={country}
                   onChange={(val) => this.selectCountry1(val)}
                   style={{
                        backgroundColor: '',
                        padding: '3% !important',
                        fontSize: 16
                     }}
                   />
                <label className="control-label bold small text-uppercase color-2">State</label>
                 <RegionDropdown
                   className="form-control"
                   name="state"
                   country={country}
                   value={region}
                   onChange={(val) => this.selectRegion(val)}
                   style={{
                        backgroundColor: '',
                        padding: '3px',
                        fontSize: 16
                     }}
                 />
  ```
* You can check [an example](https://github.com/country-regions/react-country-region-selector) and for customizing find [here](http://country-regions.github.io/react-country-region-selector/)
  
 </details> 
 
<details>
 <summary> Fetch & post/get/put  </summary>
 
 
```javascript
  body: JSON.stringify({
    name: myName,
    password: myPassword
  })
```
</details>



## React II Class base component

* props is property of this
```javascript
import React, {Component} from 'react';
export default Greetings;
```
* All class based components must extends from Component or React.Component
```javascript
class Hello extends Component {
```
* `props` unlike functions we dont get as argument. `props` are property of `this`. So we use constructor 
* All class based components must have a render method that returns a React element. 


#### State is the primary goal we want
* State is used to keep track of what has changed. State is a property of props. 
* super(props) to access props inside constructor. super should be before this. so never use this.props
* this.state 
* never muted stated directly,  there is a method setState.
* reading from this.sate 
```javascript
this.setState({color:'blue'});
```
* Only it gets update when React know is good time for rendering. 
* the only way we should pass a call back after changing 
```javascript
, function() {console.log(this.state.color) });
```
### Events
* React access all events. we just use them as a props.
```javascript
return <input
onChange = {function(){}}
onClick = {function()}
</input>
```

dont use $() on react. 


constructor(props){
  super(props);
  this.state = {
   hovered: false
   
  };
}

** The event prop work on 
```javascript
 <h1
        onMouseLeave={() => {console.log('Mouse Left!')}}
        onMouseEnter={() => {console.log('Mouse Entered!')}}
        className='Hello' style={style}>
        {greeting}, {this.props.name}!
      </h1>
```
change the sate in correct way below is wrong 
```javascript
return (
      <h1
        onMouseLeave={() => {this.state.hovered = false}}
        onMouseEnter={() => {this.state.hovered = true}}
        className='Hello' style={style}>
        {greeting}, {this.props.name}!
      </h1>
    );    
 ```
 this is right usign setState and needs React to rerender 
 ```javascript
return (
      <h1
        onMouseLeave={() => {this.setState({hovered: false}}
        onMouseEnter={() => {this.setState({hovered: true}}
        className='Hello' style={style}>
        {greeting}, {this.props.name}!
      </h1>
    ); 
 ```
 to change the stule of hovered we can have 
 ```javascript
  if (this.state.hovered) {
      style.border = 'solid thick Salmon';
    }
 ```

class has construnce and render 
this.

```javascript
import React, {Component} from 'react';

const COLORS = ['Magenta', 'Yellow', 'Cyan'];

class Shape extends Component {
  constructor (props) {
    super(props);

    this.state = {
      colorIndex: 0
    };
  }

  colorCycle () {
    console.log('Cycle!');
  }

  render () {
    const {bgColor = 'Blue', type = 'square'} = this.props;

    const style = {
      borderRadius: type === 'circle' ? '99999999px' : '0px',
      width: '150px',
      height: '150px',
      backgroundColor: COLORS[this.state.colorIndex]
    }

    return (
      <div
        onClick={this.colorCycle}
        className='Shape'
        style={style} />
    );
  }
}

/*
function Shape (props) {
  const {bgColor = 'Blue', type = 'square'} = props;

  const style = {
    borderRadius: type === 'circle' ? '99999999px' : '0px',
    width: '150px',
    height: '150px',
    backgroundColor: bgColor
  }

  return (
    <div className='Shape' style={style} />
  );
}
*/

export default Shape;
```
 above is when you click triged the color cycle,  

```javascript
colorCycle = () => {
 const {colorIndex} = this.state;
 this.setState({cololrIndex: (colorIndex +1) % COLORS.length });
}
```
Or we can go to prototype method just property of instance inside the constructor 
```javascript
this.colorCycle = this.colorCycle.bind(this)
```

## Forms and Events

<details>
   <summary> Forms </summary>
 
 
get the current target after defining a class and before render 
```javascript
  addEntry (event) {
    event.preventDefault();
    const {currentTarget} = event;
    const fData = new FormData(currentTarget);
    console.log(Array.from(fData.entries()));
  }
 ```
 inside the form all inputs have the name 
 
* Now all login working and we go to check them out 
.
define a <div className='GuestBookEntries'>
Every entry is an component. 
  
  To map through the enrirs and render a html result we go through it 
  ```javascript
  renderEntries () {
    this.state.entries.map
  }
  ```
  so we have it `this.addEntry = this.addEntry.bind(this)`
  
   ```javascript
  addEntry (event) {
    event.preventDefault();

    const {entries} = this.state;
    const {currentTarget} = event;
    const fData = new FormData(currentTarget);

    this.setState({
      entries: entries.concat([{
        message: fData.get('message'),
        name: fData.get('name'),
        date: new Date().toString()
      }])
    });
  }
 ```
 to call the bunch of html and call it again. 

we define a funciton as 
 ```
  renderEntries () {
    return this.state.entries.map(
      (entry, index) => (
        <div key={index}>
          <p>{entry.message}</p>
          <p><strong>Name:</strong> {entry.name}</p>
          <p><strong>Date:</strong> {entry.date}</p>
        </div>
      )
    )
  }
   ```
   
   to call it inside render we hve
     ``` 
    <div className='GuestBookEntries'>
          {this.renderEntries()}
        </div>
   ```
   also we can add some style to it as below 
   ```javascript
   renderEntries () {
    return this.state.entries.map(
      (entry, index) => (
        <div
          key={index}
          style={{backgroundColor: index % 2 ? 'White' : 'WhiteSmoke'}}>
          <p>{entry.message}</p>
          <p><strong>Name:</strong> {entry.name}</p>
          <p><strong>Date:</strong> {entry.date}</p>
        </div>
      )
    )
  }
   ```
   
   To clear a form we add a call back when 
  ```javascript   
   this.setState({
      entries: entries.concat([{
        message: fData.get('message'),
        name: fData.get('name'),
        date: new Date().toString()
      }])
    },() => { currentTarget.reset() }
    // this.setState can take an optional second argument which is a callback
    // that is called once the state has successfully updated.
  );
  }
   ``` 
   * list of [events](https://reactjs.org/docs/events.html)
   
   #### Authy 
   * To use Auth add these two lines to `index.html`
   ```javascript
   <link href="https://www.authy.com/form.authy.min.css" media="screen" rel="stylesheet" type="text/css">
    <script src="https://www.authy.com/form.authy.min.js" type="text/javascript"></script>
   ```
  * Then only need to use it at React is  
  ```javascript
   <select id="authy-countries" name="countrycode"></select>
  ```
  You can find [link](https://github.com/authy/authy-form-helpers)
  
 </details>
 
  # React LifeCycle 
  
  * Class Component have `Life Cycle` Methods like `ComponentDidMount` etc...
  * `ComponentDidMount` gets called as soon as the react component is rendered for the first time
  * The equevlaent of componentDidMount is useEffect. It runs when component renders for the first time 
  as 
  ```
  useEffect (()=>{
     doAFunction();
  },[])
  ```

   ### LifeCycle Call-back 
   
   before_save or before_validation
   componentWillUpdate 
   There are few lifecyclemethods as 
   https://facebook.github.io/react/docs/react-component.html
   
   we should set the interval method only when the component is on the page and only way is componentdidmonunt and is called when the component is on the page
   
   ```javascript
   import React, {Component} from 'react';

class Timer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      time: new Date().toString()
    };
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({time: new Date().toString() });
    })
  }

  render () {
    return (
      <div className='Timer'>
        <strong>Time:</strong> { this.state.time }
      </div>
    )
  }
}

export default Timer;
```
* Now it is runing the page live time,
* We want to clear the interval, when the component is removed then we can remove it

???
first we have to modify the intervalId this, so we add this here and after that we call clear intervall with this.intervall
```javascript
  componentDidMount () {
   this.intervalId = setInterval(() => {
      this.setState({time: new Date().toString() });
    })
  }
```


```javascript
componentWillUnmount(){
 clearInterval(this.intervalId)
}
```
   
 * Timer is done now!
 
Create a stop watch timer 
   
   
   
 ## Stop Watch code
 
 the basic is here 
 ```javascript
 import React, {Component} from 'react';

class StopWatch extends Component {
  render () {
    return (
      <div className='StopWatch'>
        <strong>Count:</strong> 23121
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
 ```
 * Then if you run it you would have it as here:
 * We need to keep track of initial values 

```javascript
import React, {Component} from 'react';

class StopWatch extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  render () {
    return (
      <div className='StopWatch'>
        <strong>Count:</strong> {this.state.count}
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;

```
so first we bind all these because we dont want to get lost track of them 
method is an object of a property of a function
if I take a method and assign it to a variable and this 
call back is like,


## React III

* Just create a new app
```javascript
create-react-app awesomereact
```
* To use another port inside tha pachage we can add below 
```javascript
"scripts": {"start": "PORT=3001 react-scripts start",
 ```
 then inside the src create new folder name utilites  and create request 
```javascript
const DOMAIN = 'http://localhost:3000';
const API_PATH = '/api/v1';
const API_KEY = 'cd2583a2eb688452be031bfdb79857c7133dad4c3d5c50bf7ec4d61635a9866a';

// To keep all methods that do requests to Questions together, we'll put
// them inside an object named `Question`.
const Question = {
  // getAll: function () { ... }
  // 👇 Property Method Shorthand. Syntax sugar for 👆
  getAll() {
    return fetch(
      `${DOMAIN}${API_PATH}/questions`,
      {
        headers: {'Authorization': API_KEY}
      }
    ).then(res => res.json());
  },
  get (id) {
    return fetch(
      `${DOMAIN}${API_PATH}/questions/${id}`,
      {
        headers: {'Authorization': API_KEY}
      }
    ).then(res => res.json());
  },
  post (attributes) {
    return fetch(
      `${DOMAIN}${API_PATH}/questions/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': API_KEY
        },
        body: JSON.stringify(attributes)
      }
    ).then(res => res.json());
  }
}
```
when we export it we want to export only Question object and is not default export, which we call it Ajax request utilities 

```
export {Question};
```
* remove app.css, app.test., logo.svg and move app.js into components folder 
insite 

so inside the app.js then modify import to ./components/app

All components are decending from app. and there would be something between app and page, app is going to choose which component to use, 

in pages we have a class name page, so we create a page folder inside component

so inside the pages we create wuestionindexpage, so then inside that page we  import it from 

inside questionsindexanswers

```javascript 
import React, {Component} from 'react';
import {Question} from '../../utilities/requests';

class QuestionsIndexPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  //  Lifecycle callback that will run once the
  // component is first rendered in the browser.
  componentDidMount () {
    Question
      .getAll()
      .then(questions => this.setState({questions}));
  }

  render () {
    return (
      <div className='QuestionsIndexPage'>
        { this.state.questions.toString() }
      </div>
    );
  }
}

export default QuestionsIndexPage;
```

* Notice 
it takes all the properties from each and pass it as prop of QuestionSummary 
```
question => <QuestionSummary key={question.id} {...question}
```
same as belwo 
```
          // ... <QuestionSummary key={question.id} id={question.id} title={question.title} created_at={question.created_at} ... />
```
choose all childeren except for the last one 
```css
.QuestionList > *:not(:last-child)
```


## React Routes 
https://reacttraining.com/react-router/

* Now we can import the react 
```javascript
yarn add react-router-dom
```

* inside App.js on tope we add 
```javascript 
import {
  BrowserRouter as Router, // when importing we use as to alias an imported name 
}
```
Inside App.js Then wtite the path, it means takes everything and route it as component
```javascript
 <Router>
   <div className="App">
     <Route path='/' component={QuestionsIndexPage} />
     <Route path='/questions' component={QuestionsIndexPage} />
   </div>
 </Router>
```
* Adding exact word in Routes fix the url to a specific page 

To get the id component 
```javascript
<Route path='/questions/:id'
```

in chrome react QestionsShowPage, 

check the history location and math and see the params is exactly what is in url 

use switch to be able to have most specific one comes in first. 


```html
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <input id='title' name='title' />
      </div>

      <div>
        <label htmlFor='body'>Body</label>
        <input id='body' name='body' />
      </div>

      <div>
        <input type='submit' value='Submit'/>
      </div>
    </form>
```

handlesubmit is a call back for the form, 

if we submit how we can send back data.

gather all data from form first

so we define handlesubm 
// this prob effectivel an event for when submited
const {onSubmit} = () => {}} = props;

const handlesubmit = event => {
 event.preventDefault();
 const {currentTarget} = event;
 
 const formData = new FormData(currentTarget);
 onSubmit({
   title: formData.get('title');
   body:  formData.get('body');
 });
}

//// no inside the questionew we can pass the params into the form

to check it firs inside console we hav e
```javascript
class QuestionsNewPage extends Component {
  render () {
    return (
      <div className='QuestionsNewPage'>
        <h2>New Question</h2>
        <QuestionForm onSubmit={question => console.log(question)} />
      </div>
    );
  }
}
```
* Now create a method instead of console.log to post it as a call back where we name it createQuestion. 

so in request file we already have post so we use it as Question.post 
still inside 
```javascript
 createQuestion (question) {
    Question
      .post(question)
      // .then()
  }
```
now it should work, then adding a redirect we can, so remember there is history prob which we have a push method. 

add .then
```javascript
.then(({id})) => this.props.history.push('/questions/${id}`))
```
now it should work but it  doesnt because we need to bind it in constructor props 


```javascript
class QuestionsNewPage extends Component {
  constructor (props) {
    super(props);

    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion (question) {
    Question
      .post(question)
      .then(({id}) => this.props.history.push(`/questions/${id}`));
  }

```
now it works. 
now back and forward working as well. 

## Alerts
* To use alert deploy [this](https://github.com/minhtranite/react-notifications) url
* after install  then create a function as 
```javascript
 function createNotification(type){
     switch (type) {
       case 'info':
        return NotificationManager.info('Info message');
       case 'success':
         return NotificationManager.success('Created a contact record');
       case 'warning':
        return NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
       case 'error':
         return NotificationManager.error('Error message', 'Click me!', 5000, () => {
           alert('callback');
         });
      }
 }
```
* Then you can call it in any other functions (callbacks)
```javascript
  createNotification('success');
```
* To avoid using `this` we put it inside render 


# React IV Authentication

*JWT token uses is like userkey.
has 3 parts: first part holding data, middle one contain user info, and third part is signiture verification.
* So first we add a json rails controller to responsible to get email and passwords and produce jwt or api key for react.
```ruby
rails g controller api::v1::tokens --no-assets --no-helper
```
* Above create just a controller without assets and views
* So first chnage which controller we inherit from, so change it to 
va::api

*inside api Routes
```ruby
resources :tokens, only: [:create]
```
* So we expect email and passwords in create 
```ruby
def create
  user = User.find_by(email: params[:email])
  if user&.authenticate(params[:password])
    render json:user 
  else
   //  head :unauthorized if we write unauthorized it tells hacker to try agaun
     head :not_found
  end 
end 
```
In postman, write the url and use post in postman 
```ruby
{
  "email": "pass@gmail.com",
  "password": "password"
}
```
Then we should see the users in postman. 
------------
* Now add gem jwt. After that encode method gives us authority to produce jwt. and decode a reverse one.
```ruby
gem 'jwt'
```
* To check in console we can have 
```ruby
 result = JWT.encode({id: 12}, Rails.application.secrets.secret_key_base)
```
returns
```ruby
hbGciOiJIUzI1NiJ9.eyJpZCI6MTJ9.ffgoLAKpM7F6KxpvDcXEwaaWlt0mjFW3
```
* And to check way back we can have 
```ruby
JWT.decode result, nil, false
```
which returns 
```ruby
[{"id"=>12}, {"typ"=>"JWT", "alg"=>"HS256"}]
```
---------------
* now inside token controller
```ruby
 private 
 
 def encode_token(payload = {}, exp= 24.hours.from_now)
  payload[:exp] = exp.to_i
  JWT.encode(payload, Rails.application.secrets.secret_key_base)
 end 
```
* `exp` is expiration date, also we need to add expiration date for safety, 
* you can always check what is Rails application secret key is inside rails c `Rails.application.secrets.secrect_key_base`
comes from secrets.yml. This key is used for to encrypt anything by rails. 
* now inside tje create action we create a variable name jwt 
```ruby
render json: {
jwt: encode_token({id: user.id, firstName: user.first_name, lastName: user.last_name})
}
```
to test in rails c:
```ruby
JWT.encode({id: 2332}, Rails.application.secrets.secret_key_base)
```
* Now if we test on postman the reply would be jwt token only. 
---------------
* Now we have to let them to authorize 
inside application controller, so we say whether there is apikey or jwt key. So first we define 
GROUP OF ONE SPACE OR ONE 
```ruby
def current_user
    byebug 
    @current_user ||= User.find_by(id: session[:user_id])
  end

def authorization_header 
request.headers['AUTHORIZATION']
end 

def token 
 authorization_header&.split(/\s+/).last
end 

def token_type
  authorization_header&.split(/\s+/).first&.downcase
end

def decode_token(token)
 JWT.decode(token, Rails.application.secrets.secret_key_base)
end 


```
APiKey, APIKEY, ... all same 
& for just in case if is not found or nil doesnt allow to crash and not continue 
* Now if we test in post man it should work here . 
in post man we add authorization token and add below  
```ruby
Authorization         JWT t9u4titn45th594ntthn54tn54ht54iuht
```
Now if we use postman and inside byebug we can check it.

In rails c while byebug running. 
```ruby
token
token_type
decode_token(token)
```
* Now we should see decoded params 
* now we gonna call a method payload to get the hash result which is decoded
`&` this is safe navigation.
```ruby
def payload
  decode_token(token)&.first
end 
```
it creates a special hash that the keys of current hash are accessible 
not neccessary at all!
```
HashWithInDifferentAccess.new

```
inside def current_user we say if token type exist 
if token type is jwt then use payload. so if the api_key  then go with user if jwt then use 
payload

case token_type
 when 
```ruby
 def current_user
    if token.present?
      case token_type
      when 'api_key', 'apikey'
        @user ||= User.find_by(api_key: token)
      when 'jwt'
        @user ||= User.find_by(id: payload[:id])
      end
    end
  end
```    
* In ruby instead of `try catch` we say `begin rescue`
* to check validate epiration date 

```ruby
def payload
    begin
      payload = HashWithIndifferentAccess.new decode_token(token)&.first
      return nil if Time.at(payload[:exp]) < Time.now
      payload
    rescue JWT::DecodeError => error
      {}
    end
  end
```

* End of server side 
https://github.com/CodeCoreYVR/awesome_answers_jun_2017
---------------
# Now move on React 
* in awsome answr revust.js 
```ruby
change the to conts API_Key = 'APIKEy hgoerhfrehferf9438r34'
```
* we create a form to sent
* then copy the questionnew.js and rename it to sign in page, change signinpage name only from questionnewpage to it.
* also we need sign in form.
so it would be like this 
```ruby
import React, {Component} from 'react';
import {Question} from '../../utilities/requests';
import SignInForm from '../SignInForm';

class SignInPage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='SignInPage'>
        <h2>Sign In</h2>
        <SignInForm onSubmit={() => {}} />
      </div>
    );
  }
}

export default SignInPage;
```
now we create signin form 
```ruby
import React from 'react';

function SignInForm (props) {
  // By taking a `onSubmit` prop, I'm effectively going
  // to implement a "event" for when QuestionForm is submitted
  const {onSubmit = () => {}} = props;

  const handleSubmit = event => {
    event.preventDefault();
    const {currentTarget} = event;

    const formData = new FormData(currentTarget);
    onSubmit({
      email: formData.get('email'),
      password: formData.get('password')
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Email</label> <br />
        <input type='email' id='email' name='email' />
      </div>

      <div>
        <label htmlFor='password'>Password</label> <br />
        <input type='password' id='password' name='password' />
      </div>

      <div>
        <input type='submit' value='Sign In'/>
      </div>
    </form>
  );
}

export default SignInForm;
```
* then inside app.js import singinpage from '.pages/
* then route it in app.js and add nav bar
```ruby
<link to='/sign_in'>Sing in </link>
<Route exact path='/sing_in' componet={Singinpage} />
```
* Now inside the front end we should have sign in page. 
-------------
now we define request to token inside utilities/request
```javascript
const Token = {
  post (params) {
    return fetch(
      `${DOMAIN}${API_PATH}/tokens/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    ).then(res => res.json());
  }
}

export { Question, Token };
```
we are going to get a json response as `jwt` from above.  

-----------
* now inside signinpage.js we modify the sign in page by adding createToke as below
```javascript
class SignInPage extends Component {
  constructor (props) {
    super(props);

    this.createToken = this.createToken.bind(this);
  }

  createToken (params) {
    Token
      .post(params)
      .then(res => {
        console.log(res)
      });
  }

  render () {
    return (
      <div className='SignInPage'>
        <h2>Sign In</h2>
        <SignInForm onSubmit={this.createToken} />
      </div>
    );
  }
}

export default SignInPage;

```
* When sign in form  submited the create token is call back.  
* Now if we sign in then we should get token back in chrom console. 
-----------
## Find a way to store it
you can put anything there 
is like a big hash to sto re
in chrome console
```javascript
window.localStorage.setItem('thing', 'rainbow')
window.localStorage
```
* Click on arrow in console and go to application you can see local storage keys and values

now inside sign in page when we get it back extracted from response 
then we can access to histoy and send them to home page. 
* here it saves jwt as jwt key inside local storage 
```javascript
 .then({jwt} => { window.localStorage.setItem('jwt', jwt);
  // console.log();
  this.props.history.push(`/`);
```
* Now it should return to home page
----------------------
* Create homepage.js to have a home page and send the user after login to it
```javascript
import React from 'react';
function HomePage (props) {
  return (
    <div className='HomePage'>
      <h2>Welcome!</h2>
    </div>
  )
}

export default HomePage;
```
Then in `app.js` import homepage from './pages/home'
Then route it
```javascript
import HomePage from './pages/HomePage';
<Route exact path='/' component={HomePage} />
```
--------- 
## Authentication

in app.js check if the user login  to do that we just check jwt is in localStorage 
check console first 
!! it means return true or false 
```javascript
isSignedIn(){
return !!window.localStorage.getItem('jwt')
}
```

To have user name and emails in react we need jwt-decode 
```javascript
yarn add jwt-decode 
```
* Now after install we go to sign in page and imported 
```javascript
import jwtDecode from 'jwt-decode';
```
to use it we just need to call methods
```javascript
 // a getter, use it as if its a property
  // (i.e. this.currentTarget)
  get currentTarget () {
    return jwtDecode(window.localStorage.getItem('jwt'));
```
* Now we have everything to do user authentication
remember const {currentUser} = this; deconstructor this to current user then we add in app.js 
```javascript
 {
              this.isSignedIn()
              ? (
                <span>Hello, {currentUser.firstName} {currentUser.lastName}!</span>
              ) : (
                <Link to='/sign_in'>Sign In</Link
              )
            }
```

------------ 
if it complains about returning one more element in return then put them inside an array! 


## Sign out 
--------- maybe skipp this part 
in app.js
```javascript
  <a href onClick={this.signOut}>Sign out</a>
```
now implement the call back sign out
```javascript
 signOut (event) {
   event.preventDefault();
    window.localStorage.removeItem('jwt');
  }
```
modify current to just check if the token is there bfere trying to decode it
```javascript
 get currentUser () {
    const jwt = window.localStorage.getItem('jwt');
    return jwt && jwtDecode(jwt);
  }
```
now it works but problem is the state is not update 
we can use this.forceUpdate insside sign out function 
becuase we use `this` so we have to have construcotr and bind this as 
```javascript
constructor (props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }
  signOut (event) {
    event.preventDefault();
    window.localStorage.removeItem('jwt');
    this.forceUpdate();
  }
```
so it force react to change the state. Good solution is listion to localstorage and whenever the local storage 
changes then it works and is better than manualy doing we have done so far. 

----------------this is easier way 
because we have to wait to component mount so
first make userifsignin as false, and then add mountdidload
modigy constructor as this 
```javascript
constructor (props) {
    super(props);

    this.state = {
      isSignedIn: false
    };

    this.signOut = this.signOut.bind(this);
  }

  componentDidMount () {
    this.setState({isSignedIn: !!window.localStorage.getItem('jwt')});
    });
  }
```
so in componentdidmount we setState is signin and then 
and in render part change this.signin to this.state.signin 

now modify signout to change the state 

```javascript
signOut (event) {
    event.preventDefault();
    window.localStorage.removeItem('jwt');
    this.setState({isSignedIn: false});
  }
```
-----------
### Authenticating Routing 
if the user not authenticate then dont go to those routes we call them authroute
create AuthRout.js
it is a higher order component to take a component and return a component 
```javascript
import React from 'react';

export default AuthRoute;

```
we gonna return two things. from props we retturn structor of component and we expect to be authenticated props and all the rest properties and after the we check if authentication is true then render a component and false render another componrt among `? () : () `. If we need to first to rename them to capital letters. '<Component' returns that exact component among ifs.  We gonna all of the rest props we pass. . we need to use `render= ` to pass a function that we want to pass. this function is the one we want to pass this is what we really want and should be inside. We gonna render two things  these are the props that pass to components and if is not authenticate we gonna redirect to sign in page. 
```javascript
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function AuthRoute (props) {
  const {component: Component, isAuthenticated = false, ...restProps} = props;
  return (
    <Route {...restProps}
      render={props => {
        if (isAuthenticated) {
          <Component {...props} />
        } else {
         return <Redirect to={{pathname: '/sign_in'}} />
        }
      }} />
  );
}
export default AuthRoute;
```
`props` above are all props that Rout pass them. 
also import rout redirect from react-route 

Now we go to app.js and import authroute form ./authroute change <Route to <AuthRoute 
```javascript
<AuthRoute
              exact
              isAuthenticated={isSignedIn}
              path='/questions'
              component={QuestionsIndexPage} />
```


----------
The full copy of api SERVER SIDE  controller for Rails server side ***
```ruby
class Api::ApplicationController < ApplicationController
  # This will stop rails from raising an error if
  # a post does not have an authenticity token.
  # Authenticity tokens are generated by rails to
  # let it identify post requests as being submitted
  # from its own forms.
  skip_before_action :verify_authenticity_token

=begin
fetch(
  'http://localhost:3000/api/v1/questions',
  {
    headers: {
      'Authorization' : 'd5c234ff7b9b6bb96e7a125b8f6755ae539eb7e6b0ebabfc4dffe26f021059e8'
    }
  }
)
=end

  def current_user
    if token.present?
      case token_type
      when 'api_key', 'apikey'
        @user ||= User.find_by(api_key: token)
      when 'jwt'
        @user ||= User.find_by(id: payload[:id])
      end
    end
  end

  private
  # 'Authorization' : 'ApiKey AHJdJHDA898231jhlkAJDSLKa'
  # 'Authorization' : 'JWT    AHJdJHDA898231jhlkAJDSLKa.KAJLSDal9e9q.dJALJDAiIoqiuo_'
  def authorization_header
    request.headers['AUTHORIZATION']
  end

  def token
    authorization_header&.split(/\s+/)&.last
  end

  def token_type
    #APIKEY, apikey, ApiKey
    authorization_header&.split(/\s+/)&.first&.downcase
  end

  def decode_token(token)
    JWT.decode(token, Rails.application.secrets.secret_key_base)
  end

  def payload
    # We don't want our application to crash if the JWT is invalid. We'll have
    # to rescue the error (this is Ruby's try .. catch) and just return a empty hash.
    begin
      # HashWithIndifferentAccess creates a special hash where its keys
      # can be accessed as symbols or strings.
      # (e.g. hsh[:id], hsh["id"])
      payload = HashWithIndifferentAccess.new decode_token(token)&.first

      # Validate the expiration in the payload
      return nil if Time.at(payload[:exp]) < Time.now
      payload
    rescue JWT::DecodeError => error
      {}
    end
  end

  def authenticate_user!
    head :unauthorized unless current_user.present?
  end
end
```
----------------
### 
[Amniuath](https://github.com/keppelen/react-facebook-login) 
![alt text](https://cdn.dribbble.com/users/1331/screenshots/2990914/facebook_brand_by_fantasy.gif)

```shell
npm install react react-dom react-facebook-login --save --force
```

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}
class Signinfacebook extends Component {
    constructor() {
      super();
    }
  render() {
  return (
    <FacebookLogin
   appId="125717XXXXXXXXXXX664213132"
   autoLoad={true}
   fields="name,email,picture"
   callback={responseFacebook} />
  );
  }
}
export default Signinfacebook;
```

### Google ![alt text](http://www.free-icons-download.net/images/chrome-google-chrome-icon-92209.png)
* In order to obtain google clientId use this tutorial [help](https://developers.google.com/identity/sign-in/web/devconsole-project)
* To npm [install](https://www.npmjs.com/package/react-google-login) 
```javascript
npm install react-google-login
```
```javascript
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
const responseGoogle = (response) => {
  console.log(response);
}
class Signgmail extends Component {
    constructor() {
      super();
    }
  render() {
  return (
    <div>
      <GoogleLogin
        clientId="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
  </div>
  );
  }
}
export default Signgmail;
```
* For more tips in google APIs use [this videos](https://www.youtube.com/watch?v=DYAwYxVs2TI&list=PLOU2XLYxmsILOIxBRPPhgYbuSslr50KVq&index=2)
---------

### Instageram ![alt text](http://globaltrading.sk/wp-content/uploads/2017/09/instagram-icon.png)
* To manage your insta developer account check this [link](http://help.dimsemenov.com/kb/wordpress-royalslider-faq/wp-how-to-get-instagram-client-id-and-client-secret-key)
* You can find npm from this [link](https://www.npmjs.com/package/react-instagram-login)
```javascript
npm install react-instagram-login
```
```javascript
import React, { Component } from 'react';
import InstagramLogin from 'react-instagram-login';

const responseInstagram = (response) => {
  console.log(response);
}

class Signinsta extends Component {
    constructor() {
      super();
    }
  render() {
  return (
    <div>
      <InstagramLogin
         clientId="aXXXXXXXXXX0b9XXXXXXXXXXXX"
         buttonText="Login"
         onSuccess={responseInstagram}
         onFailure={responseInstagram}
  />
  </div>
  );
  }
}
export default Signinsta;
```
* Recently 2020! facebook and instageram auth are togather. Go to facebook developer account and create instageram. Then change the callback url through [here](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started) and [here](https://developers.facebook.com/docs/instagram-api/getting-started/)
### Cycle request in Omniauth
* Front end needs access to verification code to send to server and server get access token from Twitter. To gain verificaiton code it is front end duty get it directly form Twitter after asking request token from server.
![alt text](https://user-images.githubusercontent.com/7471619/33190097-050a6474-d05e-11e7-979b-0ff06a22b282.png)

### Pass Params
* To pass params from a child component to it's parent we need to have a function in parent as [here](https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs)
## React Native 
 * vujs and Angular 2 are popular
 
 #### React libraries 
 * [Semantic UI](https://semantic-ui.com)
 * Redux is another library for reactjs. with Redux you just have 
 * React Router
 * React desktop
 * Ant Design have nice animations
 * Blueprint js has very similar actions to microsoft office, their toast are nice 
 * Motion js is animation 
 * http://animejs.com/documentation/#functionBasedPropVal
 * Pixijs is used for games using canvas
 * http://svgjs.com/ usefull for graphs  
 * howler js is for sound
 * [charts](http://www.chartjs.org/) usefull for react as well you can wotk with js, if you have live chart it helps 
 * https://d3js.org/. difficult to use 
 * moment.js helps data and time 
 * hopscotch usefull complicatied it is tourr, it helps to navigate 
 * codemirror is inline editor. you can have inline text editor 
 * pickadate.js is useful for taking date
 ### Node libraries
 * Node is interepretor of javascript like v8 in chrome  allowing to fetch. for low level server 
 * Web server for ruby only is Rails 
 * Express is usfull for js is based on http library 
 * Koa is anothr one for js
 * Meteor is like rails for js using with mongo 
 * next js is usefull  to write back end and front end at the same time with react js 
 Good thing about this, it is greate for search engines becayse seo only read index.html and so this is usefull unlike react that doesnt have anything in index. Useful for creating single page application 
 ### Testing
 * Ava and jest.js
 * jest.js is usefull for test react written by facebook
 * https://github.com/rwaldron/johnny-five for robotic 
 
 -----------
 * Lo dash gets more options for javasscript, https://lodash.com/docs/4.17.4
 * Promises with alot of features existed and you can use http://bluebirdjs.com/docs/api-reference.html
 ### Build tools 
 * webpack join everything togater: bunlde all javascript packages and create a tree of js ready to run 
 * BABEL transpilor help to convert jsx o es6. 
 * Leachty library is for AI very interesting 
 * NLP compromise this allow to understatn texts. 
 * MXNET is machine learning too, you can use deep machine learning 
 ### languages convert to js
 * elm is functioneal lnaguges that compiles to css,html and js, there is no loop you have to do recursion, you can not have variable but runs faster than js. 
 *  Typescript is javascript with types. Angualr2 uses typescript. tools when you start typing automatically tells you what you are going to type
 * Closure or cotline, opal is a ruby code that transpiles to javascript
 * opal is a ruby code that transpiles to javascript. you can add front end in ruby as well. 

# Start React native 

```javascript
npm install -g exp
npm install -g npm@4
npm install -g create-react-native-app
create-react-native-app my-app
cd my-app
npm start 
```
```javascript
brew update brew upgrade
```

* inside app.js you dont see any html tags. you have to import html components through react native library 
everytime you writet a text inside the text component and inside view component which is like div.
* Use TouchableOpaciry component to make any component pressable. 
* on top send button then 
```javascript
import { StyleSheet, Text, View
,Button
 } from 'react-native';
```
```javascript
  <Button
            title="Learn More"
            onPress={()=> alert('I was passe!')} />
```
npm install npm@4.6.1 -g

## Styles 
https://facebook.github.io/react-native/docs/viewstyleproptypes.html

flex: 1 just grow it to full the screen. 

when you give dimention you can not give them px, they are percentage and scalable by app.
you can alwasy get size of your screens 

* if you want to click, should use rouchable higlight, it just highlight 
 opacity it loose opacity, touchable without feedback does nothing
 
 to use touchcable first we have to import it first. 
 then add 
 <TouchableOpacity style={styles.button}>
 onPress={()=>alert('start)}
 <Text style={styles.buttonText}> Text </Text>
 </TouchableOpacity>


Setinterval we just set the state with current time and do it every second 
```javascript
handleStart () {
    this.intervalId = setInterval(() => {
      const {currentTime} = this.state;

      this.setState({currentTime: currentTime + 1})
    }, 1000)
  }
```
but before that we have to bind it because we always use it as call press 

Then inside onpress we define `onPress={this.handleStart}`

once we know the state is updated we run the timer, becuase we only want to run it once it is running  

```javascript
handleStart () {
    this.setState(
      {startTime: new Date()},
      () => {
        this.intervalId = setInterval(() => {
          const {currentTime, startTime} = this.state;
          const elapsedMs = new Date() - startTime;

          this.setState({currentTime: currentTime + 1})
        }, 1000)
      }
    );
  }
  ```
  then we add elapsems which is the date that start runs and initial steps. Then it would be like htis  
```javascript 
  this.setState({currentTime: elapsedMs})
``` 

inside styles we would have 
```javascript
timeText: {
    fontSize: 26,
    fontFamily: 'Courier New'
  },
```
we dont want to start at all if we press stop so we say if there is not inervallid run it otherwise dont need 
```javascript
if (!this.intervalId) {
```
* handlestop function 
```javascript 
clearInterval(this.intervalId);
this.intervalId = null;
}
```
we need to bind it, then call it
bine it 
 this.handleStop =  this.handleStop.bind(this);
 onPress={this.handleStop}
 
 wrap all them inside another view, with an inline style. justify content helps to they stay togather 
 
 ```javascript
   <View style={styles.container}>
        <View style={{
          height: '18%',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
 ```
https://github.com/reactjs/react-rails

# Final Exam
* Crud raisl json API
* React
* Front End Cleint
* React Router 
* Ajax Fetch
* JWT or API tokens 
* File attachements
* React Native optional 
* no geo coding no css 
* React gem file to have a React as an assets in rails application

# React Native II
* to navigate we have https://reactnavigation.org/
* stack navigation use for login but when they sign in we use tab navigation which is like nav bar

```javascript
create-react-native-app awesome-answer-inclass
```
cd in awesome-answer-inclass
create folder src and inside that a folder call components and utilities 

* you have to install decode jwt as 
```javascript
npm install jwt-decode
```
* Fetch function is almost same as  react, so copy request from swesome asnwer react and past in utilities 
```javascript
const DOMAIN = 'http://localhost:3000';
const API_PATH = '/api/v1';

function getJwt () {
  return window.localStorage.getItem('jwt');
}

// To keep all methods that do requests to Questions together, we'll put
// them inside an object named `Question`.
const Question = {
  // getAll: function () { ... }
  // 👇 Property Method Shorthand. Syntax sugar for 👆
  getAll() {
    return fetch(
      `${DOMAIN}${API_PATH}/questions`,
      {
        headers: {'Authorization': `JWT ${getJwt()}`}
      }
    ).then(res => res.json());
  },
  get (id) {
    return fetch(
      `${DOMAIN}${API_PATH}/questions/${id}`,
      {
        headers: {'Authorization': `JWT ${getJwt()}`}
      }
    ).then(res => res.json());
  },
  post (attributes) {
    return fetch(
      `${DOMAIN}${API_PATH}/questions/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${getJwt()}`
        },
        body: JSON.stringify(attributes)
      }
    ).then(res => res.json());
  }
};

const Token = {
  post (params) {
    return fetch(
      `${DOMAIN}${API_PATH}/tokens/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    ).then(res => res.json());
  }
}

export { Question, Token };
```
* then past into utilities/request.js
* the only thing is different is jwt token , 

* Then on top of the request.js 
```
const JWT_TOKEN = "fdfh943y98r4ihf9u43h93hf9u34hf93hfuh49ufh9u3hf3"
```

-----------
## ngrok 
ngrok is kind of secure tunnel on local host, you can donwload it 
```javascript
brew cask install ngrok
```
if you type ngrok gives you what you want 
so we want to ngrok http portnumber, so it gives use a unique url assress from local host 3000 for example
```javascript
ngrok http 3000
```
* copy forwarding linke 
* it is a way to share your app with your client 
----------
* now copy it into the phone
now inside app.js 
make a test request as below 

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Question } from './src/utilities/requests';

export default class App extends React.Component {
  componentDidMount() {
    Question
      .getAll()
      .then(questions =>  console.log(questions))
  }
}
```
First lines of request.js files 
```javascript
const DOMAIN = 'http://96dfb840.ngrok.io';
const API_PATH = '/api/v1';
const JWT_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiSm9uIiwibGFzdE5hbWUiOiJTbm93IiwiZXhwIjoxNTAzMTU5OTg2fQ.OVLKaWPc96-nzAZTVSXWW7GCaABa6R4hiAgW0JrlKUU';

function getJwt () {
  return JWT_TOKEN; //window.localStorage.getItem('jwt');
}
```
* now we should be able to see the results in console. 
---------
* Now we gonna show it in the question.index
* it is better to approach it by creating a folder name screens and inside it create new file name QuestionsindexScreen.js
then grab componentfo m component 


```javascript
import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';import { Question } from '../../utilities/requests';

class QuestionsIndexScreen extends Component {
  constructor (props) {
    super(props);

    this.state = {
      questions: []
    }
  }

  componentDidMount () {
    Question
      .getAll()
      .then(questions => this.setState({questions}));
  }

  render () {
    const {questions} = this.state;

    return (
      <View>
        {
          questions.map(
            question => <Text key={question.id}>{question.title}</Text>
          )
        }
      </View>
    );
  }
}

export default QuestionsIndexScreen;
```
*
on top of app.js we have 
```javascript
import QuestionsIndexScreen from './src/components/screens/QuestionsIndexScreen';
```

notice: we dont have class name for our components 

questions we are going to get from ajax is an array of objects that 

* Now we should be able to see all questions in app 
--------
* replace view with ScrollView, then you can see all questions 
* virtualizedlist is a tool for react but we dont use it for here instead we use flastList react which is smaller.  https://facebook.github.io/react-native/docs/flatlist.html
### Flatlist 
* deploy on top and instead of viewlist tag use FlastList tag. 
* app.js 
```javascript
import {
  View,
  Text,
  FlatList,
```
basic example.
just pass an arrau of objects props, it has renderItem takes function return component.  

serach keyextractor 
```javascript
render () {
    const {questions} = this.state;

    return (
      <FlatList
        data={questions}
        keyExtractor={question => question.id}
        renderItem={({item}) => <Text>{item.title}</Text>} />
    );
  }
}
```
is a function and return a string, it extract a unique key and we just tell it what property of list to take. 
first thins is data 
keyextractor is a funciton, is going to get an item then renderItem that return a text here just 
----------
* also you can update your backend to send the url from 
* Just create QuestionListItem inside screen 

import React from 
```javascript
return (
    <View style={{flexDirection: 'row'}}>
      <View style={{width: 50, height: 50}}>
        <Image style={{width: 50, height: 50}} source={{uri: 'https://i.imgur.com/e9wMaRx.jpg'}} />
      </View>

      <View style={{flex: 0}}>
        <Text>{title}</Text>
        <Text>{author_name}</Text>
      </View>
    </View>
  );
export default QuestionListItem;
```
then insidequestionsListITem import it.

import QuestionListItem from '../QuestionListItem';

and pass all properties ...item to that as 
```javascript
return (
      <FlatList
        data={questions}
        keyExtractor={question => question.id}
        renderItem={
          ({item}) => <QuestionListItem {...item} />
        } />
    );
  }
```
* you can add more styles like he did. Now you should be able to see the results. 
-----------
to have a fixed width to get Dimensions from React Native  add on tope of the page and extract is as t constant 
```javascript
const {height, width} = Dimensions.get('window');
```
and then add to styles of view like below 
```javascript
return (
    <View style={{
      flexDirection: 'row',
      paddingTop: 5,
      paddingBottom: 5,
      width: width
    }}>
```
to have texts inside he box we add
```javascript
<Text
          style={{width: 300}}
          ellipsizeMode='tail'
          numberOfLines={1}>{title}</Text>
        <Text>{author_name}</Text>
```
or `width: width * 0.7` 
chagnges so far as : 
----- 
* Add link to show page for each item 
* add TouchableOpacity, 
and teplace countaiern with TouchableOpacity
and add onPress{()=> {}} with empyt function it would be like this 

```javascript
import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const {height, width} = Dimensions.get('window');

function QuestionListItem (props) {
  const {title, author_name} = props;
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
      flexDirection: 'row',
      paddingTop: 5,
      paddingBottom: 5 }}>
      <View style={{marginRight: 5}}>
        <Image style={{width: 50, height: 50, borderRadius: 5}} source={{uri: 'https://i.imgur.com/e9wMaRx.jpg'}} />
      </View>

      <View style={{flex: 0}}>
        <Text
          style={{fontWeight: 'bold', width: width * 0.8}}
          ellipsizeMode='tail'
          numberOfLines={1}>{title}</Text>
        <Text>{author_name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default QuestionListItem;
```

* To actually go there we need react navitaion 
https://reactnavigation.org/
on the docs, chekc if pass params then we can get id o
we gonna use stack navigation.

```javascript
yarn add react-navigation 
```
we create QuestionsnavScreen.js

Stackvaigator is a function and we give it a key and every key is kind of a path that can bego inside the question 

```javascript
import { StackNavigator } from 'react-navigation';
import 
  QuestionsIndexScreen
 from './QuestionsIndexScreen';

const QuestionsNavScreen = StackNavigator({
  QuestionsIndex: {screen: QuestionsIndexScreen}
});

export default QuestionsNavScreen;
```
and we go to app.js and import this and then renderws QestionsNavScreen 
app.js
```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: width
  },
});
```
-----
to debug we go to debug mode in simulator and open the console log. 

To create a show page add questionshowscreen inside screen as 
```javascript
import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native'

class QuestionsShowScreen from Component {
  render () {
    <View>
      <Text>Hey!</Text>
    </View>
  }
}
export default QuestionShowScreen;
```
and inside questionnavascreen just import what we created and add screen there as 
```javascript
import { StackNavigator } from 'react-navigation';
import QuestionsIndexScreen from './QuestionsIndexScreen';
import QuestionsShowScreen from './QuestionsShowScreen';

const QuestionsNavScreen = StackNavigator({
  QuestionsIndex: {screen: QuestionsIndexScreen},
  QuestionsShow: {screen: QuestionsShowScreen}
});

export default QuestionsNavScreen;
```
nav now is kind of component in 
by saying the navigation props is pass from reactnavigation. the props is object now with method to navigate different screens
so we just take this props and pass it to questionlist items,  now if we go to questionlistitem then we can extract navifation 
```javascript
function QuestionListItem (props) {
  const {title, author_name, navigation} = props;
```
and then onpress we can say 
```javascript
 onPress={() => navigation.navigate('QuestionsShow', {id})}
```
which is the key is defines in Wuestionnavscreen 

now in show page we can add title as static property 
```javascript
class QuestionsShowScreen extends Component {
  static navigationOptions = {
    title: 'Detail'
  }
```
now if we want to have details, we need to have id and need the id 
if we go to questionlistitm. 

now inside questionshow screen 
```javascript
import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native'
import {Question} from '../../utilities/requests';

class QuestionsShowScreen extends Component {
  static navigationOptions = {
    title: 'Detail'
  }

  constructor (props) {
    super(props);

    this.state = {
      question: {}
    };
  }

  componentDidMount () {
    const {state} = this.props.navigation;
    Question
      .get(state.params.id)
      .then(question => this.setState({question}))
  }

  render () {
    const {question} = this.state;
    return (
      <View>
        <Text>{question.title}</Text>
      </View>
    );
  }
}

export default QuestionsShowScreen;
```
## Drag and Drop
* [This](https://www.youtube.com/watch?v=FdDpyD4EMrA) tutorial shows drag and drop without need to npm installs 

