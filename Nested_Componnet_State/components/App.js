import React from 'react';
import {QuestionShowPage} from './QuestionShowPage';
import {QuestionIndexPage} from './QuestionIndexPage';
// Anywhere you write JSX tags, React must be
// imported, because JSX tags are translated
// to React.createElement(...) calls.

function App () {
  return (
    <div className="App">
      <QuestionIndexPage />
      <QuestionShowPage />
    </div>
  );
}

// import App from './App';
// 👇 will make the value at App available by importing with 👆
// in other files.
export default App;
