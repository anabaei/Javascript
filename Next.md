# Next js

- Need SSR and API routes use Next.js. Scott Moss resource [link](https://hendrixer.github.io/nextjs-course/)
- Yarn or npm
- React isn't a framework, because after you did `npm install react` you need to install other dependencies like `router`, figure out how to do styling, links etc to make an app to have a full feature rich application ..React is like a view library.
- `Next.js` is a full stack framework and it uses `React` as a view library. like `gatsby` a framework built on top of react. Next.js provides server side rendering, css modules for us.
- Next.js gives `Dev build system` when you may never touch. In the past people had to build webpack
- `Create-react-app` gives us a boiler plate of react with a `build system file`. If you have s aingle page then use it.

## Start

- `npx` it install the cli command first if not exist then execute whatever in front of it

```javascript
npx or yarn create-next-app
```

- OR Manually, Recommended

```javascript
yarn add next react react-dom
```

- Then add starts

```javascript
  "scripts":{
    "dev": "next", // run it in dev env fast loading
    "build": "next build", // ready for production
    "start": "next start" //
  },
```

# routes

- Create index.js inside `pages folder` and default would be this. For more you can have nested folders

- Below is a functionional component, which renders a function but a class component requires you actully render the funciton.

```javascript
// [id].jsx
// Use react hook, if it was class then instead of useRoutes should use withRouter
import React from "react";
import { useRouter } from "next/router";

const page = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Note {id}</h1>;
};
export default page;
```

### Catch-all routes

- This way we can catch all routes

```javascript
[...params].js;
//then is an array
const { params } = router.query;
```

- you can make sure the parent is same

# Components

- At root craete folder `src/components`

# Link

- Navigation is client side

```javascript
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link href="/notes">
        <a>Notes</a>
      </Link>
      <Link href="/notes/[id]" as={`/notes/${val}`}>
        notes 2
      </Link>
      <button onClick={(e) => router.push("/")}>Home index</button>
      <button onClick={(e) => router.push("/notes/[id]", `/notes/${val}`)}>
        Home index with dynamic routes
      </button>
    </div>
  );
};
export default page;
```

# Config CSS

### Global CSS

* below is bacically what next is doing behind seen
```javascript
// pages/_app.jsx
import React, { Component } from 'react'
// import any other css to globally access here
//import 'cal.css'
export default function App({Component, pageProps}){
    return <Component {...pageProps} />
}
```
### CSS Module
* you can use it anywhere you want
* CSS needs to be as module, then when import it, it builds css class on that file which is imported, we can do it on several files and all is built on build time
* They basically call a dynamic unique class associated with them per import
* you can import it many places and it wont collide
```javascript
// styles.module.css
.body {
  color: red
}
// import
import '../../styles.modules.css'
```

## Theme - UI
* One place for all css
* We don't write any classes, all classes are already defined for us
```
yarn add theme-ui @theme-ui/presets
  
```
* create a theme.js in root with below boiler plete [theme-ui](https://hendrixer.github.io/nextjs-course/themeui)
* we get roboto theme here, and we can have css components as we have like cards and pages
* Now we need it as themProvider in the root of our app at _app.jsx
```javascript
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Nav = () => (
  <header sx={{height: '60px', width: '100vw', bg: 'primary', borderBottom: '1px solid', borderColor: 'primary'}}>
    <nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
      <Link href="/">
        <a sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer'}}>Note App</a>
      </Link>

      <Link href="/notes">
        <a sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>notes</a>
      </Link>

    </nav>
  </header>
)

export default Nav
```
* import jsx means tell babel to compile this module with jsx not react. then you can use sx. sx is like inlining styling except it creates classes for each one and define css there
* you can define everything like variant in theme and assign them in the moduels. 