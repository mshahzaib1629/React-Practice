import React, { Component } from 'react';
import { spawn } from 'child_process';

class Counter extends Component {

    style = {
        fontSize: 20
    }

    //this method is called when component is get updated (i.e when state or props are changed). this may be use to make
    //AjAX requests according to update
    componentDidUpdate(prevProps, newProps) {
        console.log('PrevProps', prevProps);
        console.log('NewProps', newProps);

        console.log('value: ', this.props.counter.value)
    }

    //This method is called just before component is removed from the dom
    componentWillUnmount() {
        console.log('Counter Unmount');
    }

    render() {
        console.log("props:", this.props);
        return (
            <div className="row">
                <div className="col-1">
                    <span style={this.style} className={this.getBadgeClasses()}>{this.formatValue()}</span>
                </div>
                <div className="col">
                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => this.props.onIncrement(this.props.counter)} >
                        +
                     </button>

                    <button
                        className="btn btn-secondary btn-sm m-2"
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        disabled = {this.props.counter.value === 0 ? 'disabled':''}>
                        -
                    </button>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.props.onDelete(this.props.counter.id)}>
                        Delete
                    </button> <br />
                </div>


            </div>
        );
    }




    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatValue() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;