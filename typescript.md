## Typescript

* Setup a project that can handle typescript code. You can setup `webpack` to setup `tsconfig`. Or you can use boilerplate like below
* [Tutorial](https://www.youtube.com/watch?v=Z5iWr6Srsj8)
```javascript
npx create-react-app name-of-your-project --typescript
// it does create tsconfig and no need to update webpack
```
* `webpack` takes javascripts, html, css and generate static assets. It is a module bundler.

```javascript

import React from "react"

export const TextField = () => {
     return(
          <div>
            <input />
          </div>
     );
}
```
* Now in typescript you need to define type of const as `React.FC` which is a funciton component
```javascript
TextField: React.FC = () => {
```
* Define props inside brackets with their type as
```javascript
TextField: React.FC<{ name: string }> = () => {
```
* Alternatively you can do it as
```javascript
interface NameOfInterface {
     name: string
}
TextField: React.FC<NameOfInterface> = () => {
```
* Define the component and pass the params `ctr+space` give you hint!
```javascript
<TextField name="amir" />
```
* props could be function to return void,string, number as
```javascript
interface NameOfInterface {
     name?: string;  // ? makes it optional
     isInt: boolean;
     myFunction1: () => number; 
     myFunction2: (bob: string) => boolean; 
     obj :{
          school: string
     };
     obj2: anotherInterFaceName
}
```
* To access props we define them inside paranthesis as 
```javascript
TextField: React.FC<NameOfInterface> = ({ name, isInt, myFunction1}) => {
```
## Hooks in TypeScript
* useState as a common hook define as
```javascript
export const TextField: React.FC<Props> = ({ name}) => {
   const [count, setCount] = useState(5); // type of count would be deffered as integer since we assign it 
   const [count, setCount] = useState< number | null>(5); // we say it can have twp types: be either number or null. undefined is different type 
   setCount(22);

   const [count, setCount] = useState<{ name: string }>({name: 'amir'}); // pass an object as state. 
   const [count, setCount] = useState<NameOfInterface>({name: 'amir'}); 
   
 }
     return(
```
### useRef
* Just hover on `ref` and it tells you have different options to pass type which one of them is `HTMlInputElement` or sometimes it is `HTMLDIVElement` 
```javascript
const inputRef = useRef<HTMlInputElement>(null)
return (
     <div>
       <input ref={inputRef}>
     </div>
)
```
#### onChange
* need to pass it in params of module and also deifne it in props as
* If you hover on `onChange` it tells you the it can either take a function or undefined and the function you pass it takes an event as an argument. So copy paste it into defined props as
```javascript
interface MyProps {
     name: string,
     handleChangeOldVersion: () => void;
     handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const TextField: React.FC<MyProps> = ({ name, handleChange }) => {
const inputRef = useRef<HTMlInputElement>(null)
return (
     <div>
       <input ref={inputRef} onChange={handleChange}>
     </div>
)
```

## Reducer Hook
* 

