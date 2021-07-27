import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/heroes';
import HeroSingle from '../pages/heroes/HeroSingle';
import Series from '../pages/series';
import SerieSingle from '../pages/series/SerieSingle';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/heroes/:id" exact component={HeroSingle} />

    <Route path="/series" exact component={Series} />
    <Route path="/series/:id" exact component={SerieSingle} />
  </Switch>
);

export default Routes;
