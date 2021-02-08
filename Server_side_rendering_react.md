  
## SRA apps 

* Link to whole [course](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/blob/fcf27f293d24d1ba16460173cbdaa19fb38f69a5/README.md) 
* Single page apps that renders full HTML from the service on every landing page
* `Props` are inputs or parameters wich pass to a components.
* `state` unlike props state can change inside the components. `Notice` any change to state cause render method to be called again. 
* Everything is component, either `function` or a `class` component 
* Convert functional components to class allows us to track `states` as the components moves through different lifecycle events. `ComponentDidMount` is when a class called.
* `webpack` is a build system to convert JSX to Javascrupt
* Next get 100% from server and render 100% to client
* Our first propery is our tag name, then pass in properties associated with tag name and finally the children as below

```javascript
const myReactElement = React.createElement('h1',
{className: 'orange'},
'Hello from me'
);
ReactDOM.render(
    myReactElement,
    document.getElementById('app')
);
```
* `Babel` converts JSX into JavaSvasript then html tenders Javascript
  
## NEXT
* A framework helps to build SSR app with JSX. 
```javascript
npm init -y
npm i react react-dom next --save
```
* Add below to package.json
```javascript
 "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next",
    "build": "next build",
    "start": "next start"
```
* Then run it as
```javascript
npm run dev
```
* To see a hello world define a class with name `pages/index.js` 
```javascript
import React from 'react';
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleDateString()
        }
    }
    tick(){
        this.setState( ()=> {
            return({
                time: new Date().toLocaleString()
            })
        })
    }

    componentDidMount(){
     this.interval = setInterval(
         () => this.tick(), 1000)
     }
     componentWillUnmount(){
     clearInterval(this.interval);
     }
    
    render(){
    return <h1> Hello {this.state.time}
    </h1>
    }
}
   
export default Index; 
```
#### CSS in Next
* Next hides webpacks from us so to add css we need to have a file in root `next.config.js` and install `@zeit` 
```javascript
npm i @zeit/next-css --save
```
and inside next.config.js
```javascript
const withCSS = require("@zeit/next-css");
module.exports = withCSS();
```
### SRC
* Where we put all components. EX, create `digitalClock.css` and `digitalClock.js` 
```css
body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat';
    background: linear-gradient(45deg, #1870ed 0,#f18f88 100%);
    min-width: 100vh;
 }
 .clock{
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translateX(-50%) translateY(-50%);
   color: #17d417;
   font-size: 60px;
}
```
```javascript
import React, {Component} from 'react';
import './DigitalClock.css';

class DigitalClock extends Component {
    render(){
        const date = new Date(this.props.time);

        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        const time = h + ' ' + m + ' '+ s;
        return(
            <div className="clock">
              {time}
            </div>
        );
    }
}
DigitalClock.props = {};
DigitalClock.defaultProps = {};
export default DigitalClock; 

```
* And inside `pages/index.js` add
```javascript

import React from 'react';
import DigitalClock from '../src/DigitalClock'; 

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleDateString()
        }
    }
    tick(){
        this.setState( ()=> {
            return({
                time: new Date().toLocaleString()
            })
        })
    }

    componentDidMount(){
     this.interval = setInterval(
         () => this.tick(), 1000)
     }
     componentWillUnmount(){
     clearInterval(this.interval);
     }
    
    render(){
    return <DigitalClock time={this.state.time} />
    }
}
   
export default Index; 
```
### Important Common SSR error
* We get common error as 
```javascript
text content did not match. Server ... client
```
### Flow of SSR
* Files on pages directory runs on both `server` and `client` side.
#### Server Side
* Node JS runs JavaScript `->` React started and all component constructors run `->` componentDidMount not run(it is client side event) `->` all rendered static html sent to client
#### Cleint Side
* static html comes down on the request. That includes javascript tags that needs js to be downloaded. Then Javascript executed and constructors are called. Then `componentDidMount` runs
* So server contructor runs on different time on client contructor called. 

#### Solution
* pass time from server to client. Then in client side browser use that time in contructor
* add below to `pages/index.js` 
```javascript
static async getInitialProps() {
  return ({
      time: new Date().toISOString()
  })
}
```
* `getinitialiprops` runs before page loaded so props in constructor then have attribute time. It is in fact a promise and not render until it resolved.
* 

### Add REST
* fetch data inside getinitialprops
```javascript
npm install axios --save
```
* then return as promise a json object and assign them to state.

### Routing
* In pages if you create a new component then you will get that. EX create a class `session` then `/session` would return that page.
* above is server side. To have client side next/link
```javascript
<Link href="/session">
  <a>sessions</a>
</Link>
```
### Bootstrap
*   
```javascript
npm i bootstrap --save
```






```javascript

```