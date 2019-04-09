import React from 'react'
import './AppCG.css'

const RetrieveData = () => {
    let dataReturned = {}
    fetch('https://swapi.co/api/people/1')
        .then(response => response.json())
        .then(data => dataReturned = Object.assign({}, data))

    console.log(dataReturned)
    return dataReturned
}



class AppCG extends React.Component {
    
    
    
    render() {
        const data = RetrieveData()
        console.log("test44")
        console.log(data)
        return (
            <div id="testTitle">
                <h1>testApp</h1>
                <p>{data.name}</p>
                <p>test2</p>
            </div>

        )
    }
}

export default AppCG