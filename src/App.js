// create your App component here
import React, { Component } from 'react';

class App extends Component {
    // state = {
    //     people: []
    // }
    
    // TODO Practice creating a React component that utilizes fetch to display content
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({people: data.people})
        })
    }
    render() { 
        console.log(this.state)
        return(
            <div>Hi</div>
        )
    }
}
 
export default App;