import React, { Component } from 'react';

class ErrorBound2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }
    static getDerivedStateFromError (){
        return{
            error :true
        }
    }
    render() {
        return (
            <div>
                {this.state.error ? <h1>Custom page error for Handling</h1> : this.props.children}   
            </div>
        );
    }
}

export default ErrorBound2;