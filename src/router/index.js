import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModuleRouters from './modules';
import CommonRouters from './common';

const routers = [...ModuleRouters, ...CommonRouters];
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routers.map((route, i) => (
          <Route key={i} path={route.path} component={route.component} />
        ))}
      </Switch>
    </Suspense>
  </Router>
);

export default App;
