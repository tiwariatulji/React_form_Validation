import React, { Component } from 'react';

class ErrorBoundary1 extends Component {
    render() {
        if(true){
            throw new Error ("custom Error")
        }
        return (
            <div>
                <h1>Hello Error Boundary</h1>
            </div>
        );
    }
}

export default ErrorBoundary1;