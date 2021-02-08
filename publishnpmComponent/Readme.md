
# Component
* First clone from [here](https://github.com/anabaei/JavaScript_Notes/tree/master/CreateDoc) the HelloWorld docs 
* create-react-app encapsulates all of the npm modules it is using internally, so that your package.json will be very clean and simple without you having to worry about it. However, if you want to interact with modules under the hood, those new modules need to know what is available and not so `npm run eject ` does the job. It will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them.

```javascript
npm i chalk 
```
* Host Packages
```javascript
npm i -D gh-pages // to read and publish it in github repository
git init
git remote add origin https://github.com/anabaei/test5.git
```
* In package.json add 
```javascript
"homepage": "http://anabaei.github.io/test5/",
"deploy": "gh-pages -d build", // tell gh-pages to deploy build:docs to build directory in github 
"build:commonjs": "cross-env NODE_ENV=production babel ./src/components --out-dir ./lib --ignore spec.js"
```
* `build:commonjs` Output format: We use ES5 with commonjs format Then run  
* Then tell Babel to transpile ES modules to Commonjs
```javascript
"babel": {
    "presets": [
      [
        "env", {
          "modules": "commonjs"
        }
      ],
      "react-app"
    ]
  },
```
* install some packages for running babel in command line, use variables in cross platform way, removing file in cross platform and cross platform freindly way of copying files(cpx)
```javascript
npm install -D babel-cli cross-env rimraf cpx
```
* Now in lib directory we can see our transpile code is wriiten by babel
* Add below to package.json
* Anything in `dependencies` section would be install by package consumer as well, so there is another section name `devDependencies` which only in dev environemtn it is used when install it 
```javascript
"main": "./lib/index.js",
  "engines": {
    "node": ">=4.0.0"
  },
  "author": {
    "name": "amir",
    "email": "anabaei@sfu.ca",
    "url": "http://reactjsconsulting.com/"
  },
  "files": [
    "lib"
  ],
```
* And remove private true
* Set npm 
```javascript
npm run deploy // in order to publish the page in github 
npm run build
npm run build:commonjs

npm set init.author.name "anabaei@sfu.ca"
npm set init.author.email "anabaei@sfu.ca"
npm set init.author.url "nabaei.com"
npm adduser
npm publish
```


### Style
* To use style we use JS as via `styled-components` and make sure it exits in dependencies in packages to allow users use that when they install your package
```javascript
    const Error = styled.div`color:red`; // Error is a div with color red style
    const In = styled.div`border: solid 3px; color:yellow`;
    // And use them as 
    <Error> this is error </Error>
```

### Update 
* Change the version in package.json
```javascript
npm run build
npm run build:commonjs
npm publish 
```

### Using 
```javascript
npm i test5amir
```
* Then inside app.js 
```javascript
import HelloWorld from 'test5amir/lib/HelloWorld';

<HelloWorld />
```
-------------------------
### Development Tips
-------------------------
### To Develope 
* In order to develop at the same time you need to import the component to app.js and use it there alos change the index.js from docs to app like the default of react apps 

### Specify PropTypes
* When invalid or missing props occur react generate run time error warning 
* We can declare the expectated shape of any pbject you pass which give you benefits of `strong typing` with little overhead as 
```javascript
yourmon.proptypes ={
 cokkies: PropTypes.number.isRequired
}
user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
})
```
### No Hardcode ID's
* Dont hardcode html ids in markup it may conflict with consumer ids But you can accept HTML ID via prop as
```javascript
MyComponent.propTypes = {
 htmlId: React.PropTypes.string.isRequired 
}
```
### Logical Defaults
* Assure useful behaviour and save user's input 
```javascript
// this is initializing account in mycomponent class
Mycomponent.defaultProps = { account: 0 }
// static properties 
class Mycomponent extends React.Component {
 static defaultPros = { account: 0 };
}
//stateless component, destructuring props this is getting account from props and if not initialized, asign it to 0 
const Mycomponent = ({account = 0}) 
```
### Configure objects
* When a component have more props and in future they may increase so it is better to pass them as an object 
```javascript
<CustomerDetails firstname="cory" lastname="house" title="devel" office="home" />

<CustomerDetails customer={{ firstname: "cory", lastname: "house", title: "devel", office: "home" }} />
```
### Consider Server Rendering
* It should support server rendering so don't assume your component is in a browser. Avoid using setTimeout and avoid document or window call

### Single Responsiblity Principle
* Single components should only do the one task and there is no need to be the hero! Also avoid weak wrapper elements and use `<div>` tags instead of p etc...

-----------

## Atomic Design 
* Is a language for describing components in mulitple layer of abstraction. Unlike MVC in React we think a page as nested components
* Atoms are the foundation of a component library and we can not break them any further
* Wrap input with the type names like text, checkbox, radiolist...

### Pass Props via Spread
* using Spread opertor `{...props}` allows to transfer props. To destructure a property we can use 
```javascript
const Hello = ({ name, ...rest}) => <div {...rest}> Hi {name} </div>
```
So rest wont have a name property. 
























