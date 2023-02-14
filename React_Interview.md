# Interview 

## Closure 
* Explain what is this and show one example?
* Clusore is calling a varibale from inner function of outer funciton 

## Bind, Apply and Call 
* They are built in functions to bind to current object 
* `a.bind(null,2) ?
* What compilers uses Javascript?
* When using ES6 classes we need to bind all callbacks explicitly since there is no autobinding 

## TDD/BDD

## Difference between rebase and merge 
* Merge as it says merge two branches and keep both alive but rebase put one brance prior to the other one 


<details>
        <summary> destructure </summary>

```javascript
[a, b] = [10, 20]
[a, b, ...rest] = [10, 20, 30, 40, 50] // rest = [30, 40, 50]
```
* Destructure Object
```javascript
const numbers = [];
const obj = { a: 1, b: 2 };
const { a: numbers[0], b: numbers[1] } = obj;
// numbers[0] = 1
({ a: a1,  ...rest } = obj)
```

* Create an object from an email
```javascript
[...z] = [id, email] // id=3, email='ttt@gmail.com'
//returns 
{ '0': 3, '1': 'ttt@gmail.com' }
```
</details>


<details>
     <summary> Image Component & ProgressiveImage </summary>

* In this example, the ProgressiveImage component takes two image sources: src and lowResSrc. The component starts by rendering the lowResSrc image and sets the imageSrc state to lowResSrc using the useState hook.

The component also uses the useEffect hook to create an image object and check if the higher resolution image URL (src) is valid. If the image URL is valid, the component sets the imageSrc state to src using setImageSrc.


```javascript
import React, { useState, useEffect } from 'react';

function ProgressiveImage({ src, lowResSrc, alt, width, height }) {
  const [imageSrc, setImageSrc] = useState(lowResSrc);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageSrc(src);
  }, [src]);

  return (
    <img src={imageSrc} alt={alt} width={width} height={height} />
  );
}

export default ProgressiveImage;

```
* In this example, the App component uses the ProgressiveImage component to render an image with a width of 800 pixels and a height of 600 pixels. The component starts by rendering the low resolution image, and then replaces it with the higher resolution version once it has loaded.
  
```javascript

import ProgressiveImage from './ProgressiveImage';

function App() {
  return (
    <ProgressiveImage
      src="https://example.com/high-res-image.jpg"
      lowResSrc="https://example.com/low-res-image.jpg"
      alt="An example image"
      width={800}
      height={600}
    />
  );
}

export default App;
```


</details>

<details>
     <summary> Lazy loading components </summary>

* Write a lazy loading component
```javascript
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```
* lazy function is used to load the LazyComponent component asynchronously, which means that the component is only loaded when it is actually needed. The Suspense component is used to provide a fallback component that is displayed while the lazy component is being loaded.
* A lazy loading is used for large components when users don't need them immediately, like images videos
* Fetch data could be in lazy load unless the data is critical of the function of component, so it is better to load data during initial render
</details>