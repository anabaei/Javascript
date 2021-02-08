# Document

```javascript
create-react-app test5
npm run eject
npm i babel-loader chalk babel-core object-assign whatwg-fetch highlight.js npm-run-all chokidar react-docgen
```
* In Package.json in make it like 
```javascript  
"scripts": {
    "prestart": "npm run gen:docs",
    "start:docs": "node scripts/start.js",
    "start": "npm-run-all --parallel start:docs gen:docs-watch",
    "gen:docs": "node scripts/generateComponentData.js",
    "gen:docs-watch": "npm run gen:docs -- --watch",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js --env=jsdom"
  },
```
* In components create HelloWorld/Helloworld.js and index.js as
```javascript
export {default} from './HelloWorld';
```
```javascript
import React from 'react';
import PropTypes from 'prop-types';

/** A super lame component that says Hello with a custom message. */
function HelloWorld({message}) {
  return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
  /** Message to display */
  message: PropTypes.string
};

HelloWorld.defaultProps = {
  message: 'World'
};
export default HelloWorld;
```
* Then add `generateComponentData.js` in script folder as it is in bottom
```javascript
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parse = require('react-docgen').parse;
var chokidar = require('chokidar');

var paths = {
  examples: path.join(__dirname, '../src', 'docs', 'examples'),
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(__dirname, '../config', 'componentData.js')
};

const enableWatchMode = process.argv.slice(2) == '--watch';
if (enableWatchMode) {
  // Regenerate component metadata when components or examples change.
  chokidar.watch([paths.examples, paths.components]).on('change', function(event, path) {
    generate(paths);
  });
} else {
  // Generate component metadata
  generate(paths);
}

function generate(paths) {
  var errors = [];
  var componentData = getDirectories(paths.components).map(function(componentName) {
    try {
      return getComponentData(paths, componentName)
    } catch(error) {
      errors.push('An error occurred while attempting to generate metadata for ' + componentName + '. ' + error);
    }
  });
  writeFile(paths.output, "module.exports = " + JSON.stringify(errors.length ? errors : componentData));
}

function getComponentData(paths, componentName) {
  var content = readFile(path.join(paths.components, componentName, componentName + '.js'));
  var info = parse(content);
  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(paths.examples, componentName)
  }
}

function getExampleData(examplesPath, componentName) {
  var examples = getExampleFiles(examplesPath, componentName);
  return examples.map(function(file) {
    var filePath = path.join(examplesPath, componentName, file)
    var content = readFile(filePath)
    var info = parse(content);
    return {
      // By convention, component name should match the filename.
      // So remove the .js extension to get the component name.
      name: file.slice(0, -3),
      description: info.description,
      code: content
    };
  });
}

function getExampleFiles(examplesPath, componentName) {
  var exampleFiles = [];
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName));
  } catch(error) {
    console.log(chalk.red(`No examples found for ${componentName}.`));
  }
  return exampleFiles;
}

function getDirectories(filepath) {
  return fs.readdirSync(filepath).filter(function(file) {
    return fs.statSync(path.join(filepath, file)).isDirectory();
  });
}

function getFiles(filepath) {
  return fs.readdirSync(filepath).filter(function(file) {
    return fs.statSync(path.join(filepath, file)).isFile();
  });
}

function writeFile(filepath, content) {
  fs.writeFile(filepath, content, function (err) {
    err ? console.log(chalk.red(err)) : console.log(chalk.green("Component data saved."));
  });
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

```
* Now running `npm run start` should work
* inside src folder create docs and added `CodeExample.js` , `ComponentPage.js` , `Docs.js`, `Example.js`, `Navigation.js` and `props.js` 
* In config/webpack.congig.dev.js and prodution comment it out line 103 
* Now it should work 
* copy `index.css` to have better look 
```javascript
/* Global styles */
body {
  font-family: Arial, Helvetica, sans-serif;
  color: #666666;
}

a, a:visited {
  color: #666666;
}

.clear {
  clear: both;
}

td {
  border-top: solid 1px #d3d3d3;
}

td, th {
  padding: 10px;
}

table {
  border-collapse:collapse;
}

/* Documentation site component styles */
.example {
  border: solid 1px #d3d3d3;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #f4f6f9;
}

.example h4:first-of-type {
   margin-top: 0;
}

.example p:last-of-type {
   margin-bottom: 0;
}

.props tr td:last-of-type {
  text-align: center;
}

.props th, td {
  text-align: left;
  padding: 5px;
}

.navigation {
  float: left;
  width: 250px;
  list-style-type: none;
  padding: 0;
}

.componentpage {
  margin-left: 275px;
}

```
* Add into index.js below highlight
```javascript
import '../node_modules/highlight.js/styles/ocean.css';
 ```







