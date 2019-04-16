import React from 'react'
import './AppCG.css'

class RetrieveData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataReturned: {},
            isLoading: true,
            error: null
        }
    }
    
    componentDidMount() {
        this.setState({isLoading: true})
        fetch('https://swapi.co/api/people/1')
            .then(response => {
                if(response.ok) { 
                    return response.json()
                } else {
                    //Throw error if HTTP 404 error for example - wouldn't normally be caught
                    throw new Error('Its broken!')
                }
            })
            .then(data => this.setState({dataReturned: data}))
            .then(() => this.setState({isLoading: false}))  //.then accepts a callback function, not just a command
            .catch(error => this.setState({error: error, isLoading: false}))
    }

    render() {
        if(this.state.error) {
            return (
                <div>
                    <p>{this.state.error}</p>
                </div>
            )
        }
        return (
            <div>
                <p>{this.state.isLoading ? 'Loading...' : this.state.dataReturned.name}</p>
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