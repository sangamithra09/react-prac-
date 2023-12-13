import React from 'react'
class StateClassCom extends React.Component{
    state={
        color:"red"
    }
    handleChange=()=>{this.setState({color:"Blue"})}
    render()
    {
        return(
            <div>
                <h1>The chosen color is {this.state.color}</h1>
                <button onClick={this.handleChange}>Click me</button> 
            </div>
        )
    }
}
export default StateClassCom;