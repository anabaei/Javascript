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

# Theme - UI
* One place for all css
* We don't write any classes, all classes are already defined for us
```
yarn add theme-ui @theme-ui/presets
  
```
* create a theme.js in root with below boiler plete [theme-ui](https://hendrixer.github.io/nextjs-course/themeui)
```javascript
import { roboto } from '@theme-ui/presets'

const theme = {
  ...roboto,
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    }
  },
  styles: {
    ...roboto.styles
  }
}

export default theme
```
* we get roboto theme here, and we can have css components as we have like cards and pages
* Now we need it as themProvider in the root of our app at _app.jsx
```javascript
// _app.jsx
import React, { Component } from 'react'
import { ThemeProvider } from '@theme-ui/core'
import theme from '../theme.js';

export default function App({Component, pageProps}){
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
```
* The reason we always import React on top of all files, to tell compiler (Babel) to how to read JSX in that file
* Instead of importing React we use jsx, javascript pragma. It tells compiles which here is babel, hey you need to get jsx library to compile below file instead of using react. It does what same compile as react with extra benefit using sx property. 
```javascript
/** @jsx jsx */
// above called javascript pragma 
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


## Config
* To add config or some changes on babel create a file `next.config.js` at root as 
```javascript
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER } = require('next/constants')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_PRODUCTION_SERVER) {
      console.log("Development!")
      return defaultConfig
    }

  else if (phase === PHASE_PRODUCTION_SERVER) {
    return defaultConfig
    //   webpack: {
    //     plugins: [new BundleAnalyzerPlugin()]
    //   }
    
  }

  return defaultConfig
} 
```
### ENV variables
Next, create a .env file on the root and add some envs.

HELP_APP_URL=https://google.com

* This plugin added all variables inside .dev into our app
```javascript
yarn add next-env dotenv-load

```
in next.config.js

```javascript
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()
module.exports = withNextEnv()
```
* To access it we can have it, it rans in be
```
process.env.HELP_APP_URL
```

## TypeScript

* Add tsconfig.json into root and run the app, it asks you to download a package and then it is done!


# BackEnd 
* Go to folder and create a folder `api`  create index.js as
* Everything in api folder never render to browser or client side, so is would be safe
```javascript
// more context to add
export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'hello' }))
  }
```
* now check `http://localhost:3000/api`
```javascript
brew install httpie
http post :3000/api

```
To define actions
```javascript
import nc from 'next-connect';
//import cors from 'cors'

const handler = nc()
  // use connect based middleware
//   .use(cors())
  // express like routing for methods
  .get(async( req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'hello' }))
  })
  .post((req, res) => {
    res.json({ hello: 'world' })
  })
  .put(async (req, res) => {
    res.end('hello')
  })
  
export default handler;

```
* To have below we need to create `notes` folder in api with `[id].js` and `index.js` names 
```javascript
create note => POST /api/note
update note => PATCH /api/note/:id
delete note => DELETE /api/note/:id
get one note => DELETE /api/note/:id
get all notes => DELETE /api/note/
```
* And for in memory data we can have
```javascript
// src/data/data.js
const notes = []

module.exports = notes

```
# Fetching Data

### Prerendring fetch
* Below are done in node environment and not in browser. So It happened only in pre rendring page.
* It says send this props to this page before rendering
* This file isn't bundle with the page and it doesnt ship to client
```javascript
// /pages/index.js
// just put it at the end of page

const IndexPage = () => {// jsx }
export default IndexPage

export async function getStaticProps(context) {
  const response = await fetch("https://something.ca")\
  const data = await response.json()
  return {
    props: {}
  }
}
```
* You can do crawl a website, connect to db, file systems everything here


* Because these data are build in be and not rednering in FE, so to get dynamic data you need use another function as 
```javascript
export async function getStaticPaths() {
  // get all the paths for your posts from an API
  // or file system
  const results = await fetch('/api/posts')
  const posts = await results.json()
  const paths = posts.map(post => ({params: {slug: 
  post.slug}}))
  /*
  [
    {params: {slug: 'get-started-with-node'}},
    {params: {slug: 'top-frameworks'}}
  ]
  */
  return {paths}
}

export async function getStaticProps({ params }) {
  const res = await fetch(`/api/post/${params.slug}`)
  const post = await res.json()
  return {
    props: {post}
  }
}
```

# Server Side Response 
* This is pretty easy
```javascript


```