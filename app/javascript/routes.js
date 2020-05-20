import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Pages
import Home from './pages/home';
import Album from './pages/album';
import Discovery from './pages/discovery';
import Favorites from './pages/favorites';
import Search from './pages/search';

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/discovery" component={Discovery} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/favorites" component={Favorites} />
    <Route exact path="/album/:id" component={Album} />
  </Switch>
);

export default Routes;