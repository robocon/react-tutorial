import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import HelloExternalComponent from './components/HelloExternalComponent'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

class HelloComponentClass extends React.Component{
  render(){
    return <h1>Hello React Component Class</h1>
  }
}

function HelloComponentFunction(){
  return <h1>Hello React Component Function</h1>
}

ReactDOM.render(
  <HelloExternalComponent/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
