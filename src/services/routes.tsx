import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/heroes';
import HeroSingle from '../pages/heroes/HeroSingle';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/heroes/:id" exact component={HeroSingle} />
  </Switch>
);

export default Routes;
