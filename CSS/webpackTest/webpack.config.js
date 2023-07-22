const path = require('path')

module.exports ={
    mode: 'development',
    entry: './script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
    // where to start
    // where to put result
}