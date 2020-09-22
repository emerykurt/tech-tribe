import React from 'react';
import './Company.css';
import {connect} from 'react-redux'
import Form from './ratingFolder/RatingForm'

function Company(props) {
    // debugger

    return(
        <div className="compBox">
            <a href="#foo" id="reviewComp" data-id={props.id} data-name={props.name}><img src={props.logo} alt="company logo" width="100" height="100"/></a><br/>
            <strong>{props.name}</strong><br/>
            <a href={props.website}>Website</a><br/>
            <a href={props.twitter}>Twitter</a><br/>
        </div>
    )
}

export default connect(null)(Company)