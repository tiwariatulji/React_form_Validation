import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <h1>It is Child</h1>
                <button onClick={this.props.update}>Count</button>
            </div>
        );
    }
}

export default Child;