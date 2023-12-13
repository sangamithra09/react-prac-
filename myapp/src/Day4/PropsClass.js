import React from 'react'
class PropsClass extends React.Component{
    render()
    {
        return(
            <div>
                <h1>I am studying at {this.props.college}</h1>
            </div>
        )
    }
}
export default PropsClass;