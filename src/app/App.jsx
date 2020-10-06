import React from 'react';
import './globalStyles.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Notfound from './pages/404';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/film/:id"
        render={() => (
          <Layout>
            <MovieDetails />
          </Layout>
        )}
      />
      <Route path="/search/:query" render={() => <Layout />} />
      <Route path="/" exact render={() => <Layout />} />
      <Route path="/404" component={Notfound} />
      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>
);
export default App;
