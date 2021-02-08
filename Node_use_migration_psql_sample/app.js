const Express= require('express')
const app = Express()

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
import models, { sequelize } from './models';

///////////////////////////////////////////////////
////////// Allow to parse bodies in json //////////
///////////////////////////////////////////////////

app.use(bodyParser.json()); // help us to handle json in body
app.use(bodyParser.urlencoded({ extended: false})); // help us to have req.body in callbacks and reads what is inside body

// Configure our Express app to use ejs as our templating engine
app.set('view engine', 'ejs');

sequelize.sync().then(() => {
    const PORT = 2000
    app.listen(
    PORT, ()=>console.log('server is running')
    )
  });
app.get('/', (request, response) => { response.send(`Hello, World!`) })

