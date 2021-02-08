# React 

*  React + Rails [link](https://blog.heroku.com/a-rock-solid-modern-web-stack)

<details>
 <summary> Hello World </summary>
 
 ```javascript
npm install -g create-react-app
create-react-app react-demo // if error happen export PATH="/Users/amir/.npm-packages/bin:$PATH"
cd react-demo
npm install 
OR
npx create-react-app my-app
```
* All index.js has at least one React.Render at first
```javascript
ReactDOM.render(<App />, document.getElementById('root'));
```
* React.Render has two parts first is  a component `<App />` and second is the actual dom `document.getElementById('root')` where they have to dump that component.
* We create a folder name components and create commponents there with capitalize name, then import all to `app.js`, and just call the component as below with one props 
```javascript
import Hello from './components/Hello';
<Hello name='Jon' />
```
components/Hello.js
```javascript
import React, { Component } from 'react';
class Hello extends Component
{
 render(){
   return (
     <div className="Hello">
        <h2> Hello {this.props.name} </h2>
    </div>
   );
 }
}
export default Hello;
```
* name can be an array on names then only change as 
```javascript
<Hello name={['amir','ali','hassan']} />
```
and inside Hello.js
```javascript
<h3> {this.props.name.map((cc) => <h4> {cc} </h4>)} </h3>
```
----------
 
 </details>
<details>
 <summary> Add a new Font </summary>

* Get cdn from google fonts like `Roboto` and add link to `index.html` then inside index.html
```javascript
<style>
  body {
  margin: 0,
  font-family: 'Roboto'
  }
</style>
```

 </details>

 <details>
   <summary> UI Component </summary>
 
 ### UI Component 
```javascript
npm install semantic-ui-react --save
npm install semantic-ui-css --save
```
add to everywhere you want to use 
```javascript
import { Button } from 'semantic-ui-react'
```
add to index.js
```javascript
import 'semantic-ui-css/semantic.min.css';
```
🤗 Then done!
https://react.semantic-ui.com/usage
 </details>

<details>
 <summary> Event </summary>
 
 ## Event 
* React has a list of defined `events`
* inside Hello.js after h2 and inside className=Hello you can add this 
```javascript
  <h1 onMouseOver={() => {console.log('Mouse Left!')}}> jjjj </h1>
```
* Having multiple call backs on one component. colorCycle is a function defined in that class 
```javascript
<h1 onClick={this.colorCycle}
      className='Hello2'
      onMouseOver={() => {console.log("Hover!"); this.setState({hovered: false})}}
  > dd
  </h1>
```
```javascript 
colorCycle(){
 console.log(this);
}
```
* to have access this from function, we need to bind this in constructor, so we define a constructor in class
```javascript
constructor (props) {
   super(props);
  this.colorCycle = this.colorCycle.bind(this)
}
```
* Now when we click it knows `this` 
 
</details>

<details>
 <summary> Pass Objects to Components </summary>
 
 
 ## PASS objects like ids between components 

* Inisde `createAuction` at render part we have signInForm.
`SignInForm`. 
```javascript
  <AuctionForm createAuction={this.createAuction} />
```
The createAuction function is defined on this page but will implement after it goes to AuctionForm. in AuctionForm there is   const `{createAuction = () => {}} = props;` to have this action reserved, then in an event handlere we call it as 
```javascript
const formData = new FormData(currentTarget);
createAuction({
      title: formData.get('title'),
      details: formData.get('details')
    });
```
Then it go back to call `createAuction (auction) {` with params which are tile and details 
### Pass two params 
To pass more than one params we should modify slightly like 
```javascript
<AuctionForm createAuction={this.createAuction} auctionidd={this.state.auction_id} />
```
inside on `AuctionForm` then
```javascript
cont {createAuction = () => {}} = props, auctionId = () => {}} = props}; 
```
then call it with two params 
```javascript
createAuction({
      title: formData.get('title'),
      details: formData.get('details')
    }, auctionId);
```
and finaly modify the `createAuction` with two params 
```javascript
reateAuction (auction) {
    Auction
      .post(auction)
      .then(({id}) => this.props.history.push(`/auctions/${id}`));
      this.props.history.push(`/`);
  }
```
* modified version accepting two params 
```javascript
reateAuction (auction, auctionid) {
    Auction
      .post(auction)
      .then(({id}) => this.props.history.push(`/auctions/${id}`));
      this.props.history.push(`/`);
  }
```
 
 </details>

<details>
 <summary>  Change dynamicly the state in a function </summary>
 
 
 ### Change dynamicly the state in a function
* in function we can set the state as 
```javascript
colorCycle() {
    console.log(this);
    this.setState({amir: props, ali: "DFD", cnt: 1});
  }
```
* but to have a counter and increament or decremnt it we need to define a function to setstate because state and props may update asychronously so we need like this 
```javascript
colorCycle() {
    console.log(this);
    this.setState((state , props) =>
    ({amir: props, ali: "DFD", cnt: state.cnt + 1}));
  }
```
* first arg is previous state and second is props.  Now property of cnt in state is incremeant 
</details>


<details>
 <summary> Styles </summary>
 
 ### Style
* Define const style after render and add style tag after classNmae
```javascript
  const style = {borderRadius: type === 'circle' ? '99999999px' : '0px',width: '150px',height: '150px', backgroundColor:   COLORS[this.state.cnt]}
  return ( <div onClick={this.colorCycle} className='Shape' style={style} /> );
```
-------
# Form 
* Add a form in a file call greeting.js and return it 
```javascript
return (
      <div className='GuestBook'>
        <h1>Guest Book</h1>

        <div className='GuestBookEntries'>
          {this.renderEntries()}
        </div>

        <form onSubmit={this.addEntry}>
          <div>
            <label htmlFor='message'>Message</label> <br />
            <textarea id='message' name='message' />
          </div>

          <div>
            <label htmlFor='name'>Name</label> <br />
            <input id='name' name='name' />
          </div>

          <div>
            <input type='submit' value='submit' />
          </div>
        </form>
      </div>
    )
```
* To avoid null value for message add this to constructor `this.state = { message: "" };`
* Just need to define addEntry and renderEntries fucntions.
```javascript
addEntry(event){
  event.preventDefault();
  const {currentTarget} = event;
  const fData = new FormData(currentTarget);
  this.setState((state, props) =>({message: fData.get('message')}));
  }
```
* prevent defualt is necessary for avoiding submiting, then assign event into a formdata constant to be able to use get and etc methods. Then setState of message. Now to show it on page should just define a funciton to return state.message as below 
```javascript
renderEntries() {
  return(
   <h1> {this.state.message} </h1> 
   )
 }
```

 </details>

<details> 
  <summary> Dynamic Form Builder </summary>
 
 * I get from [this](https://goshakkk.name/array-form-inputs/) link 
 * We define one state property and if a property lcicked we concat current state this an array of hashes to add properties of new element which just were added
 ```javascript
 handleAddShareholder = () =>
 {
   this.setState({
     shareholders: this.state.shareholders.concat([{ name: '', isHidden: "true"  }])
   });
 }
 ```
* From here like 
```javascript
<div className="btn btn-primary" onClick={this.handleAddShareholder} >Add </div>
```
* Then we concat to state, then we need to read over through that state by map and read properies like name or hidden and print
```javascript
 <form onSubmit={this.handleSubmit}>
  return this.state.entries.map(
   (entry, index) => (
     <div>
       <input     
                key={index}
                value={shareholder.name}
                onChange={this.handleShareholderNameChange(index)}
              />
       <button type="button" onClick={this.handleRemoveShareholder(index)} className="small">-</button>
     </div>
   ))}
   </form>
 )
```
* Also added two onchange and onclick handlers for future development 
* To remove last state form we define a funciton like 

```javascript
handleRemoveShareholder = (idx) => () => {
   this.setState({
     shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
   });
 }
```

</details>


<details>
 <summary> list </summary>

* To have a list of all entries and not only last message, we need an stack memory. State has a stack memory array so we define `entries: []` in constructor and then contcat messages into it. Everytime `state.entries` property has an array which updated! 
```javascript
const {entries} = this.state;
this.setState({
      entries: entries.concat([{
        message: fData.get('message')
      }])
    });
```
* Then the rendersEntry is a map go through all entries
```javascript
 renderEntries() {
  return(
   <h1> {this.state.entries.map((entry, index) =>
     (<p>{entry.message} </p>))} </h1> )
    }
```
* Also we can wrap entry.message by styles and havign key index 
```javascript
   <div key={index} style={{backgroundColor: index % 2 ? 'White' : 'WhiteSmoke', padding: '5px'}}> 
      <p>{entry.message}</p>
    </div>
```
* Adding `key={index}` is neccessary 
* To clear form after submition add second arg in setState 
```javascript
,() => { currentTarget.reset() }
```
</details>

<details>
 <summary> JSON API </summary>
 
 ### Read Json 
* Create a model based utilized/Question.js as you did in Rails API so we access Question.getAll and other methods
```javascript
  componentDidMount () { Question.getAll().then(questions => this.setState({questions}));}
```
* Save question inside state then return it between a tag 
* Get all questions and pass as a promise `questions` `=>` to a function which setState with all questions. 
```javascript
<p> { this.state.questions.toString() } </p>
```

### Write in Json
* to submit a form into database we submit onClick `this.createQuestion`. 
* We have push method in history prop
```javascript
  createQuestion (question) {
    Question
      .post(question)
      .then(({id}) => this.props.history.push(`/questions/${id}`));
  }
```
*
</details>

<details>
 <summary> Rout </summary>
 
 
 ## Link To
* Intstall Router 
```javascript
yarn add react-router-dom
```
* import it 
```javascript
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
```
* Wrap retrun components where you want to access router then put Link to a path 
```javascript
 renderEntries() {
  return(
    <Router>
     <Link to={'/test'}> Link </Link>
     
     <Route exact path='/test' component={Test} />
 </Router>
```
* Now you should see the link
* Define Route to handle the link between `Router` tags.
* we can wrap Route with Switch 
* 
* Usually in app.js, on top links like navbar and button, rendering the pages by Routes. 

### Add live time
* add time into constructor and define componentdidmount for whenever the dom loaded 
* in constructor  
```javascript
  time: new Date().toString()
```
```javascripr
componentDidMount () {
 setInterval(() => {
   this.setState({time: new Date().toString() });
 })
}
```
* then add time tag in render components
</details>


<details>
   <summary> Counter </summary>
 
 ### Add Counter 
* it is independent of time. Start is a function which each one second add one to count and start is a button to call the function. count is a another property of state so we should bind it in costructor as well. 
```javascript
start() {
      this.intervalId = setInterval(() => {
        const {count} = this.state;
        this.setState({count: count + 1});
      }, 10);
  }
```
* First we define count to zero in constructor, then
```javascript
 <button onClick={this.start}>Start</button>
 ```
* `setInterval` is a clear function, we can use 'clearInterval` to stop it. 

</details>

<details>
    <summary> Style </summary>
    
 * BackgroundImage inline is like 
 ```javascript
 backgroundImage: "url(" + Background + ")"
 ```
 * To access assets just create a public folder and raect like rails is smart enough to find folders from public like 
 ```javascript
 <div className="col-md-7 image-background cover center-top" style={{backgroundImage: "url(img/testimonials/2.jpg)" }} ></div>
 ```
 * To access external css file you need to import it like in each component
 ```javascript
 import '../css/simplebar.css';
 ```
 * To import external javascript you can add them to `index.html` as
 ```javascript
 <script src="js/simplebar.js"></script>
 ```
 ### Grid
 * Use bootstrap grid 
```javascript
import { Container, Row, Col } from 'react-grid-system';
<Row>
    <Col xs={12} md={6} lg={4}></Col>
     <Col xs={12} md={6} lg={4}></Col>
     <Col xs={12} md={6} lg={4}></Col>
</Row>
```
### FullScreen background
```javascript
	background-repeat: no-repeat;
	background-position: center center;
	background-attachment: fixed;
	background-size: cover;
	height: 100%;
  background-image: 'url(https://user-images.githubusercontent.com/7471619/70248130-57abcc80-172f-11ea-846b-98a3f5bff72d.jpg)'
```
### Avator
* 
```javascript
import Avatar, { ConfigProvider } from 'react-avatar';
	<Avatar
    src="https://lsds.jpeg"
    size="100"
    round={true}
  />
```
### NAVBAR
* run
```javascript
npm install react-bootstrap bootstrap
```
* Add below to index.js
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```
* Define [Navbar](https://react-bootstrap.github.io/components/navbar/) as 
```javascript
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
```
### Accoirdion
* We user bootstrap 
```javascript
import { Accordion, Button } from 'react-bootstrap';

<Accordion>
  <Accordion.Toggle as={Button} eventKey="0">
    Write Comment
  </Accordion.Toggle>

  <Accordion.Collapse eventKey="0">
    <div>...</div>
  </Accordion.Collapse>
</Accordion>
```
</details>
<details>
  <summary>Fetch Request</summary>

*  [Here](https://codereviewvideos.com/course/symfony-3-with-reactjs-and-angular/video/react-update-put-patch)
```javascript
export function updateBlogPost(id, data) {
    return fetch('http://api.symfony-3.dev/app_dev.php/posts/' + id, {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}
```
</details>
<details>
  <summary>Pass data from Child to Parent</summary>

* To pass from parent to child you can see [here](https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf)
* To pass from child to parent take some steps:
```javascript
- Define a call back function in parent
- Pass callback funtion as a param from parent to a child
- Inside child call the function by calling this.props.callbackfunction anywhere
```
</details>
<details>
<summary>CONDITIONAL RENDERING</summary>

* CONDITIONAL RENDERING IN REACT: TERNARY
```javascript
  {isEdit ? (
        <EditRecipe food={food} />
      ) : (
        <ShowRecipe food={food} />
      )}
```
* If you don't have second condition you better to use
```javascript
<div>{isLoading ? <p>Loading...</p> : null}</div>;
// you better use below 
<div>{isLoading && <p>Loading...</p>}</div>;
```
* [Good resource](https://www.robinwieruch.de/conditional-rendering-react)
</details>

<details> <summary> google and facebook Auth</summary>

* 
</details>
<details> <summary> Loading... </summary>

* 
</details>































