const path = require('path')

const config ={
    mode: 'development',
    entry: './script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    // where to start
    // where to put result
    devServer: {
        static: './dist'
       }
}

if(false){
    config.mode = 'production'
}

module.exports = config