import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const state = {
  initTodos: [
    // { title: "Lorem ipsum, dolor", id: 1, isDone: false },
    // { title: "sit amet consectetur", id: 2, isDone: false },
    // { title: "adipisicing elit", id: 3, isDone: false },
  ]
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

