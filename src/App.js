import React, { Component } from 'react';
import API from './Api'
import firstHOC from './Form'
class App extends Component {
 
    render() {
        
        return (
            <div className="container" style={{backgroundColor:"black"}}>
                <h1>{this.props.name}</h1>
                my name is  { this.props.mystate.name}
        and i'm  { this.props.mystate.age } years old
            </div>
        );
    }
}

export default firstHOC(App,API);