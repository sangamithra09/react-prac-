import React from 'react'
export default function Default(props) {
    return(
        <div>
            <h1>DefaultProps</h1>
            <h1>Default value is {props.name}</h1>
        </div>
    )
}
Default.defaultProps={
    name:"Skct"
}