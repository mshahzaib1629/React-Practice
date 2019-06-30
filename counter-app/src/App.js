import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ]
}

constructor(props) {
  super(props);
  console.log('App Constructor');
}

 //this method is called after a component is rendered into the dom. It is perfect place to get data from server via AJAX
componentDidMount(){ 
  //AJAX CALL
  console.log('App Mounted')
}

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters });

}
handleDelete = (counterID) => {
    console.log('Event Handler Called!', counterID);

    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
};

handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };       //don't know why this assignment is made
    counters[index].value++;
    this.setState({counters});
    
};

handleDecrement = (counter) => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index].value--;
  this.setState({counters});
}

  render() { 
    return ( 
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=> c.value > 0).length}/>
      <main className="container">
          <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete} 
          />
      </main>
    </React.Fragment>
     );
  }
}
 
export default App;