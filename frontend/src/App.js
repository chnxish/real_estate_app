import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/notfound';
import About from './containers/about';
import Contact from './containers/contact';
import Home from './containers/home';
import ListingDetail from './containers/listing_detail';
import Listings from './containers/listings';
import Login from './containers/login';
import SignUp from './containers/signup';
import Layout from './hocs/layout';

import { Provider } from 'react-redux';
import store from './store';

import './sass/main.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/listings' component={Listings} />
          <Route exact path='/listings/:id' component={ListingDetail} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
