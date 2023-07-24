

* Webpack is more than a javascript bundler, we can teach 
* Webpack is the feature that allows to react to have hot loading. So it is inside react when we run npm install react. 
* The combination of webpack and babel give react a powerful tool
* 
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
// this create  a js file inside dist
npx webpack

npx webpack help --watch
npx webpack version
npx webpack configtest // to test config
npx webpack init // to start create webpack config it creates alot of advanced objects which we may never use, so it is better manually create

// run hot loading in memory
npx webpack serve // allows us to launch webpack development 

server 
npx webpack --watch // it is like nodemon

```
* webpack has a lot of options

#### Base Config
* webpack.config.js is the file we create 
```
module.exports ={

}
```
* `devtool` telling how the created file should be, `inline-source-map` is same as original and another `inline-cheap-source-map` is transformed

#### Dev Server
* Web pack dev server, runs the app in RAM memory. It gets `js` from entry, hot loading, and compile it with html and css where you mentioned inside `devtool static:`.  

  * Not only we get http to run our code but also we get to watch code
  * Provide HTTP server but only for front end code
  * Run on memory (temporary) so nothing is created on your machine disk

* Install it
```javascript
npm i webpack-dev-server -D
```
To set configuration for dev server you can add
```javascript
// this mimic what we are going to deploy to production

devServer: {
 static: './dist'
}
```
* If there are more than one javascript file, we can add entry as an array and define an new file over there 


### production vs development
* Mode key indicate which one,
* Production mode creates smaller code and has more settings appropriate for production build
* How to automatically switch between two modes? from `package.json`
```javascript
"scripts":{
  "start": "webpack serve", // this is run in dev
  "build": "NODE_ENV='production' webpack" // this is run in produciton
}
```
* The config file is like this then
```javascript
const path = require('path')

const production = process.env.NODE_ENV

let config = {
  entry: ['./script.js', './index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,"dist"),
  },
  devtool: "inline-source-map",
  mode: 'development',
  devServer: {
    static: './dist'
  }
}

if(production){
 config.mode = 'production',
 config.devtool = 'inline-source-map'
}

module.exports = config
```

#### Loader
* Loader allows us to do additional things to our files as they process
* `babel` is one loader allows you transpile JSX to a form of javascript that support most of browsers
* to have babel need to instal these 3 libraries
```javascript
npm i -D babel-loader @babel/code @babel/preset-env
```
* To use what we installed need to add a section call module key with rules as 
```javascript
module: {
  rules: [
    {
      // looking for js files
      test: /\.js$/,
      // exclude nodemodules
      exclude: /node_modules/,
      // usually use: 'babel-loader' but babel needs options
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env"
          ]
        }
      }
    }
  ]
}
```
* each rule has 3 pieces
  * whcih file to look at
  * which files to exclusive
  * which loader to use

* Add typescript loader
```javascript
npm i -D typescript ts-loader
...
module:{
  rules: [
    {
      // looking for js files
      test: /\.ts$/,
      exclude: /node_modules/,
      use: 'ts-loader
    }
}
// it means find for all ts files if not find the search for js files
resolve: {
 extenstions: [".ts", ".js"]
},
```
### Multiple Bundle
* Download the code that user actually need. One way to give users only what they need not more is called bundling
* If you want to have different bundlers like one index.js and one home.js and make two output files you need to to do that.
* `[name]` means it creats based on the name of entry
* Also remember index.html always need to point to correct js files

```javascript
let config = {
  entry: {home: './script.js', index: './index.js'},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,"dist"),
    clean: true
  }
}
```

### ADD CSS

* We already learned loaders take input files and convert it to output files. Plugins are more powerful loaders
* `Plugins` Can produce multiple output file, or take output file and change it. 
*  `html-weboack-plugin` create new index.html at dist based on the current html. This plugin, creats one html and add proper script to it and put them as one html file in dist folder
```javascript
const HtmlWebpackPlugin = require('html-weboack-plugin')

plugins: [
  new HtmlWebpackPlugin()
]
```
* then run 
``````
npx webpack
``````
* Then it would create html file which has pointer to scripts that runs inside that file
* We can pass a template to pass it to this plugin to create html for us. 
* we can pass template, pure html not include any script, to build from that as 
```javascript
plugins: [
  new HtmlWebpackPlugin({
    template: "./index.html"
  })
]
```
##### Cleaning Dist
* Delete contents of build directory whenever it runs, then there is no more older files in dist
* add clean: true inside output object,

##### Live reloading
* need to tell webpack when to reload and watch for what files changes
```javascript
devtools: {
  // we say watch for changes for everyfiles inside src directory and for index.html changes to refresh browser
 watchFiles: ["src/**/*", "index.html"] 
 static: './dist'
}
```
#### CSS
* so far dist directory has include only html and javascript
* we had define where to get html with using html plugin
* We told where to get javascripts from entry array
* but we haven't told where to get CSS 
```javascript
npm i -D css-loader style-loader

module: {
  rules:[
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader'] // we want css loader process first then style loader that is why order is matter
  ]
}
```
* `style-loader` takes css processed by `css-loader` injects css into javascript build, 
* then import css into your index.js file, then webpack would know it

#### SASS

* sass loader
```javascript
npm i -D css-loader style-loader

module: {
  rules:[
    test: /\.sass$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader', 'sass-loader'] // we want css loader process first then style loader that is why order is matter
  ]
}
```
##### Have CSS in seperate file at Dist
* to have CSS in seperate file in production, 
```javascript
npm i -D mini-css-extract-plugin

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

plugins: [
  new MiniCssExtractPlugin()
]
// you can pass fileName to give a name to the css file which is created in dist by mini css extract plugin
```
* When we use this plugin, we need to replace style-loader because style-loader add css into javascript files in dist, which we don't want it any more so the scss rule changes to 
```javascript
module: {
  rules:[
    test: /\.sass$/,
    exclude: /node_modules/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] // we want css loader process first then style loader that is why order is matter
  ]
}
```
#### polyfills
* To support old browsers we need to provide modern functionality to older browsers
#### AutoPrefixer PostCSS
* Adds browser specific prefixer standards to handle New CSS feature 
* PostCss is a prerequisite for many css. like autoPrefixer
* postcss needs to be added at use array as an array
```javascript
npm i -D postcss postcss-loader postcss-preset-env

module: {
  rules:[
    test: /\.sass$/,
    exclude: /node_modules/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            [["postcss-preset-env", {}]]
          ]
        }
      }
    },'sass-loader'] // we want css loader process first then style loader that is why order is matter
  ]
}
```
#### Images & Fonts
* To have images or other assets inside built, we can copy assets directory and past it into build. There is a plugin for that
```javascript
// this plugin make copies during the build
npm i -D copy-webpack-plugin

const CopyPlugin = require('copy-webpack-plugin')
// it creates images folder in dist and copy everything from image folder in it
plugins: [
  new CopyPlugin({
    patterns: [{
      from: './src/image', to: 'images'
    }]
  })
]
```
* Assets Modules
* `source` takes content of the file and tranlate it to string
* `resource` copies files one by one and do improvement if needed
* `inline` combine multiple files togather and allow us to improve performance
```javascript
import msg from './message.txt'
// below convert 
console.log(msg)

module: {
  rules:[
    test: /\.txt$/,
    type: "asset/source",
// we want css loader process first then style loader that is why order is matter
  ]
}
```
* `images`in order to have images in built, first need to add below rule, then when webpack process index.html, if there where import images knows how to process them and create them into build
* 
```javascript
module: {
  rules:[
    test: /\.(png|svg|jpeg)$/i,
    type: "asset/resource",
    // generate images inside image directory with the same name and extenstions then from index.html it knows where to get images and name won't change
    generator: {
      filename: "images/[name][ext]"
    }
// we want css loader process first then style loader that is why order is matter
  ]
}
```
* The path to images could be varied in html and build folder
* `Html loader` is smart enough to recognize cdn from local resources assets.  
```javascript
module: {
  rules:[
    test: /\.html$/,
    exclude: /node_modules/,
    use: "html-loader"
  ]
}
```
* also we can have generator with hash and webpack totally understand it
```javascript
  generator: {
      filename: "images/[name][ext]"
    }
```
* `inline`  in stead of creating image folder, we can have inline which convert images to code and put it into html file as `test: /\.(png|svg|jpeg)$/i, type: "asset/resource",`
##### Inline and Copy Assets
* need to tell everything bigger than a certain size make it assets less than that make it inline
```javascript
module: {
  rules:[
    test: /\.(png|svg|jpeg)$/i,
    type: "asset",
    parser: {
      dataUrlCondition: {
        maxSize: 50* 1024 // 50kb
      }
    }
    generator: {
      filename: "images/[name][ext]"
    }
  ]
}
```
##### Analyze Bundle
* need to analyze bundle
```javascript

npm i -D webpack-bundle-analyze
const  BundleAnalyzer = require('webpack-bundle-analyze').BundleAnalyzerPlugin

plugins: [
  new BundleAnalyzer()
]
```
* Then build

##### Bundle Proxy
* To make a rest api, we can tell webpack, whenever you see a fetch request inside javascript, with `/api/` prefix, then send result to port 3000 server
```javascript
function getFetch(){
  fetch('/api/users').then((res)=> res.json)
}
getFetch();

// 
add to devtool
proxy: {
  "/api":{
    target: "http://localhost:3000",
    pathRewrite: "^/api",
  }
}
```
* 