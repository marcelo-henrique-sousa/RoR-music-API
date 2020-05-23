import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import 'app.scss';

//components
import Menu from './components/shared/menu';

import Routes from './routes.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes />
    </BrowserRouter>
  );
}

export default App;