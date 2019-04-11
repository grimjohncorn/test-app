import React from 'react'
import './AppCG.css'

class RetrieveData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataReturned: {},
            isLoading: true
        }
    }
    
    componentDidMount() {
        this.setState({isLoading: true})
        fetch('https://swapi.co/api/people/1')
            .then(response => response.json())
            .then(data => this.setState({dataReturned: data}))
            .then(this.setState({isLoading: false}))
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? <p>Loading...</p> : this.state.dataReturned.name}
            </div>
        )
    }

}



class AppCG extends React.Component {
    
    
    
    render() {
        return (
            <div id="testTitle">
                <h1>testApp</h1>
                    <p><RetrieveData /></p>
                <p>test2</p>
            </div>

        )
    }
}

export default AppCG