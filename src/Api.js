import React, { Component } from 'react';

class API extends Component {

    render() {

        return <div className="container">
            <ul>
                my name is  { this.props.mystate.name}
        and i'm  { this.props.mystate.age } years old
            </ul>
        </div>;
    }
}

export default API;