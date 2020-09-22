import React from 'react';
import './Company.css';
import {connect} from 'react-redux'
import Form from './RatingForm'

function Company(props) {
    // debugger
    return(
        <div className="compBox">
            <a href="#foo" id="reviewComp" data-id={props.id} onClick={writeReview}><img src={props.logo} alt="company logo" width="100" height="100"/></a><br/>
            <strong>{props.name}</strong><br/>
            <a href={props.website}>Website</a><br/>
            <a href={props.twitter}>Twitter</a><br/>
        </div>
    )
}

const writeReview= (e) => {
    debugger
    return(
        <Form />
    )
}

export default connect(null)(Company)