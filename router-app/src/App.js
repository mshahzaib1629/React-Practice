import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import { Route, Switch, Redirect } from 'react-router-dom';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='content'>

          <Switch>
            <Route path="/products/:id" exact component={ProductDetails} />
            {/* this route object is also having its own props such as 'sortBy' in addition to default props passed by Route component i.e 'history', 'location', 'match' */}
            <Route path="/products" render={(props) => <Products sortBy="newest" {...props}/>} />  
           
            {/* appending with '?' mark means saying that these attributes are optional */}
            <Route path="/posts/:year?/:month?" component={Posts} />  
            <Route path="/admin" component={Dashboard} />

            {/* adding a route to not-found page */}
            <Route path="/not-found" component={NotFound}/>
            
            {/* if a user enter '/messages' in the url, we will redirect it to '/posts' page */}
            <Redirect from="/messages" to="/posts" /> 
            
            {/* for home page */}
            <Route path="/" exact component={Home} />   

            {/* if invalid url is typed, we redirect it to not found page */}
            <Redirect to="/not-found" />
          </Switch>    
        </div>
      </div>
    );
  }
}

export default App;
