import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import NavigationBar from  './components/navbar';
import Footer from  './components/footer';

//Pages
import home from "./pages";
import search from "./pages/search";
import detail from "./pages/detail";
import { Provider } from 'react-redux';
import store from './store';
import notFound from './404';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavigationBar />
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/index" component={home} />
              <Route exact path="/search" component={search} />
              <Route exact path="/search?text=:text" component={search} />
              <Route exact path="/detail" component={detail} />
              <Route component={notFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
