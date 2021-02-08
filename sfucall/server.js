const Express= require('express')
const app = Express()
const fetch = require('node-fetch');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


///////////////////////////////////////////////////
////////// Allow to parse bodies in json //////////
///////////////////////////////////////////////////

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false})); // support encoded bodies

// Configure our Express app to use ejs as our templating engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render('index', {data: 0 } )

    })

app.post('/call', (req, res) => {
  url = req.body.endpoint
  token = req.body.token

	fetch(url+`?per_page=100000`
			,{
				method: 'GET',
				headers: {'Content-Type': 'application/json',  'Authorization': 'Bearer ' + token },
			}).then(res =>  res.json())
            .then( result =>   ( console.log("" ), res.render('index',{data: result} )  ))
          //  , req.cookies.list = result ,
           // res.render('assignment',  {list: result,  lti_token: lti_token, name: name, login_id: login_id }
           // )
			//  ))

    })

const PORT = 2000
app.listen(process.env.PORT || 2000)
