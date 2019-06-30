import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    
    render() {
        //Using Destructing here to make code simple. We choosed the attributes that we need from the props by
        //destructing so that we do not have to write lengthy code every time. such as 'this.props.onIncrement'
        //can be replaced by onIncrement by using Destructing
        const {counters, onIncrement, onDecrement, onDelete, onReset} = this.props;

        return (
            <React.Fragment>

                <button className="btn btn-primary" onClick={onReset}>Reset</button><br/>
                {counters.map(counter => 
                <Counter key={counter.id} 
                
                // This attribute will pass the complete set of attribute (i.e id, value attributes) associated with counters
                counter = {counter}
                onDelete = {onDelete}
                onIncrement = {onIncrement}
                onDecrement = {onDecrement}
                // OR if we want to pass selective props attribute to counter object: 
                // value={counter.value}  
                // id={counter.id} 
                // selected
                
                />)}

            </React.Fragment>
        );
    }
}

export default Counters;