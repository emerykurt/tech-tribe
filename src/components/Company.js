import React from 'react';
import './Company.css';
import {connect} from 'react-redux'

function Company(props) {
    return(
        <div className="compBox">
            <h2>{props.name}</h2><br/>
            <img src={props.logo} alt="company logo" width="100" height="100"/><br/>
            <a href={props.website}>Website</a><br/>
            <a href={props.twitter}>Twitter</a><br/><br/>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
}

export default connect(mapStateToProps)(Company)