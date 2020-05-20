import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app.js';

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <App />,
    //document.body.appendChild(document.createElement('div')),
    document.getElementById('root'),
  )
})
