

npm i webpack webpack-cli -D

* Add where is .js located to run webpack
```javascript
npx webpack path/to/webpack 
npx webpack path/to/webpack.config.js // if exist
npx webpack ./script.js
```
* Dist is created: 
  * Only js file is created as main.js
  * this portion is more condense format but it does the same, in a smaller package and concise we need to run with html 

```javascript
npx webpack help --watch
npx webpack version
npx webpack configtest // to test config
npx webpack init // to start create webpack config
npx webpack serve // allows us to launch webpack development server 
npx webpack --watch // it is like nodemon

```