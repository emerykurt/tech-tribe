import React from 'react'
import Company from '../components/Company'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {fetchCompanies} from '../actions/CompaniesAction'
import SearchContainer from './SearchContainer'

class Companies extends React.Component {

    componentDidMount(){
        this.props.fetchCompanies()  
    }

    renderCompanies(){
        // debugger
        return(
            this.props.companies.map(company => {
            return(
                <Company key={company.attributes.id} 
                id = {company.attributes.id}
                name = {company.attributes.name} 
                website = {company.attributes.website} 
                twitter = {company.attributes.twitter}
                logo = {company.attributes.logo} 
                /> )   
        }))
    }

    render(){
        // debugger
        return(
            
        <div>
            <h1>All the Companies!</h1>
            <SearchContainer /><br/>
            <strong>(Don't see the company you are looking for?)</strong> 
            <Link to={{pathname:"/addcompany"}}>click here</Link>
            {this.renderCompanies() }
        </div>)

    }
}
const mapStateToProps = state => {
    return{ companies: state.companies}
}

export default connect(mapStateToProps, {fetchCompanies})(Companies)