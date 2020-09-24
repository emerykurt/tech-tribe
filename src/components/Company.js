import React from 'react';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


function Company(props) {
    return(
        <div className="compBox">
            <br/>
            <Link to={{ 
                pathname:"/form", rCompId: props.id, rCompName: props.name
            }}>
                <img src={props.logo} alt="company logo" width="100" height="100"/>
            </Link><br/>
            <small>(click logo to write a review)</small><br/>
            <strong>{props.name}</strong><br/>
            <a href={props.website}>Website</a><br/>
            <a href={props.twitter}>Twitter</a><br/><br/><br/>
        </div>
    )
}

export default connect(null)(Company)