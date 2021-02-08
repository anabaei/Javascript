# JavaScript
* Class is inherited from component module, like method `setState` which inherited from component
* props dont come from argunemts if we use a class, so props are property of `this` 
* State is an object, a property we use `this` and we can initialize it inside constructor
* When you write your constructor you overwride the constructor in the parent class component [link](https://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e)
* `this.state` means this object is my component state. 
```javascript
constructor(props){
super(props)
 this.state ={ 
 question: question   // it means grab the question from  imported and assign to question state
  }
}
```
## Two of the hardest topics in React 
* The key point here is the value we pass for onClick is a function. so we can say current component doesnt want to deal with call back, parent one does it. 
### Nested Event listener
* If a have components inside the main one and want to do an action in child components then you only access to the state of child components by the event imbeded in it, to change the main state as well, have to bubble up that event from child to parent. In order to transfer event from child to parent, we need to make a wire or pipe from parent component to child by adding one attribute as OnClick to child component and retrive it in child component from props as an action, and when defining event in child then we can call a local function which it calls the inherited method from parant and if we want to pass any attribute we can assign it. 
* At parent component we have `AnswerList` component which it has `AnswerDetails` component and inside that there is delete button which we pass it out to main parent component to act and change the main state as `deleteAnswer` function: 
```javascript
deleteAnswer (id) {
    const {answers = [], ...restQuestion} = this.state.question;
    this.setState({
      question: {
        ...restQuestion,
        answers: answers.filter(a => a.id !== id)
      }
    });
  }
```
The if filter returns each element that meet the conditions, so above it returns all answers except the one has the same `id` it revceived from `AnswerDetails` page
* In the main function we have it as 
```javascript
render(){
return(
<main>
        <AnswerList
          answers={answers}
          onAnswerDeleteClick={this.deleteAnswer}
        />
      </main>
    );
 }
```
* At AnswerList need to just parse the function and 
```javascript
function AnswerList (props) {
  const {answers = [], onAnswerDeleteClick = () => {}} = props;
```
* Then map through each answer in list and call answerdetails component and passing the function `onAnswerDeleteClick` as onDeleteClick function.
```javascript
return (
      {
        answers.map(answer => (
          <li key={answer.id}>
            <AnswerDetails
              answer={answer}
              onDeleteClick={onAnswerDeleteClick}
              key={answer.id}
            />
          </li>
        ))
      }
  );
```
* Then inside AnswerDetails first get parse the function from props as below then define a callback for button which is calling inherited function 
```javascript
function AnswerDetails (props) {
const {answer = {}, onDeleteClick = () => {}} = props;
  const handleDeleteClick = () => {
    onDeleteClick(answer.id);
  };
```
* And then define the component as 
```javascript
  return (

      <p>{answer.body}</p>
      <p>By {answer.author_full_name}</p>
      <Field name='Created At' value={answer.created_at} />
      <DeleteButton onClick={handleDeleteClick} />
    </div>
  );
```
## Closure
* Closure is a topic that not understand well in JavaScript. Example below provide a good view!
* In case we want to have id of each input into our function, one way without closure is to assign id in buttons as an attribute for each components, then in callback retrieve it from event by that props as below 
```javascript
render(){
<button data-id={question.id}	 onClick={this.deleteQuestion} >Delete</button> }
```
* Then we define call back as below 
```javascript
deleteQuestion (event) {
const {currentTarget} = event;
const questionId = parseInt(currentTarget.getAttribute('data-id')); 
}
```
* But instead of call back function we can have an eventhandler as below so it wont go to other memory space, it just a function that returns questionId and it is saved into `Closure`. 
```javascript
render(){
<button onClick={this.deleteQuestion(question.id)}> Delete </button>
}
```
* Then we pass `questionId` into the function as parameters
```javascript
deleteQuestion (questionId) {
return () => {
       const {questions} = this.state;
// access to questionId
}
```
This is from [link](https://github.com/CodeCoreYVR/awesome-answer-react-nov-2017/commit/dd6e8c2ddc69c2320e847b64556b6946a7426fd9)
### Event listener React 
* All html props have event listener, but components dont have event listener 
```jacascript
<input 
onNameofEvent ={props} // props can be a methods like this.funname  or anonymose  function
</input>
```
Also they still can get event objects as well like
```javascript
<button onClick={event => {console.log("DS")}  } >delete </button>
```

* Call back usually is a method and inside the method we can change the state 
```javascript 
function duncdel(){
console.log("DS");
this.setState({question: question.slice(1) });
}

<button onClick={event => this.funcdel  } >delete </button>
```

setState({co}) merge objcet inside it into the state object, so it is replace it but rememebr we need to pass object


 
  this.deleteQuestion = this.deleteQuestion.bind(this); permamnently bound from 
  
  when using a method as callback on an event listener we must bind this to it otherwise we wont have access to any method on `this` such `setState`
  
  
  put debugger and run it. 
  
  
  To add a property to a node, we can easily assign an id to it forexample
  <button data-id={question.id} 
  
  so inside the funciton 
  const qi = currentTarget.getAttribute('id')
  
  going on all the question if not eqal then 
  always return new copy of array and returns only when it is true. 
  
  filter(question => question.id != questionid) 
  
  
  -------------
  using clusors is better than setting ids of questions
  
  we gonna return a function inside the delete question, and this is not the one to pass to onlcice but we pass the one in render 
  
  
  <button onlcikck={this.deleteQuestion(questions.id)


when a function creates inside a nother function it returns and get access to question it

this.deleteQuestion(question.id)
* So everytime it returns one function of each one of the them, it means we gonna save question id inside teh js.

* Good way to find a way `this.state.question` has bigger size than zero so it is better to have a return  
```javascript
if (Objce.keys(this.state.question).length <1 ){
   return (
   <main 
    className="onename"
    style={{
     padding: '0 20px'
    }}
    >
    <h2> Questions </h2>
    </main>
    );
  }  
```
  #### Forms
 * Form elements, 
  Create a questionform as a function, and pass it. then import it and then add questionform. 
  formpage:
  ```javascript
  onsSubmit(handleSubmit}
  ```
  this line pass onsubmit to props
  ```javascript
  const {onSubmit =() => {}} = props;
  consot handlSubmit = event => 
 ```
 and un parent we can test it like 
  ```javascript
  <formpage onsubmit={() => {console.log('ds')}
  <formpage onsubmit={(formdata) => {console.log(formdata)}
 ```
 
 [from this link](https://github.com/CodeCoreYVR/awesome-answer-react-nov-2017)
  
