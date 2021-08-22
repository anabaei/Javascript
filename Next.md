
# Next js

* Need SSR and API routes use Next.js. Scott Moss resource [link](https://hendrixer.github.io/nextjs-course/)
* Yarn or npm 
* React isn't a framework, because after you did `npm install react` you need to install other dependencies like `router`, figure out how to do styling, links etc to make an app to have a full feature rich application ..React is like a view library. 
* `Next.js` is a full stack framework and it uses `React` as a view library. like `gatsby` a framework built on top of react. Next.js provides server side rendering, css modules for us. 
* Next.js gives `Dev build system` when you may never touch. In the past people had to build webpack
* `Create-react-app` gives us a boiler plate of react with a `build system file`. If you have s aingle page then use it. 

## Start

* `npx` it install the cli command first if not exist then execute whatever in front of it
```javascript
npx or yarn create-next-app
```
* OR Manually, Recommended
```javascript
yarn add next react react-dom
```
* Then add starts
```javascript
  "scripts":{
    "dev": "next", // run it in dev env fast loading
    "build": "next build", // ready for production
    "start": "next start" //
  },
```
## routes
* Create index.js inside  `pages folder` and default would be this. For more you can have nested folders

* Below is a functionional component, which renders a function but a class component requires you actully render the funciton.

```javascript
// [id].jsx
// Use react hook, if it was class then instead of useRoutes should use withRouter 
import React from 'react';
import { useRoutes} from 'next/routes';

const page = () => {
 const { id } = router.query;

 return (
   <h1>
     Note {id}
   </h1>
 )
}
export default page;
```

