import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import NavBar from './components/navBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <h1>hello</h1>
      <div className="container">
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Movies} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
