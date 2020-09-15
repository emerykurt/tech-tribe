import React from 'react'


function Company(props){
    return(
        <div>
            <h2>{props.name}</h2><br/>
            <a href={props.website}>Website</a><br/>
            <a href={props.twitter}>Twitter</a>
        </div>
    )
}

export default Company