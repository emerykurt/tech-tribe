import React from 'react'
import Company from '../components/Company'
import {connect} from 'react-redux'
import {fetchCompanies} from '../actions/fetchCompanies'
import SearchContainer from './SearchContainer'

class Companies extends React.Component {
    
    componentDidMount(){
        this.props.fetchCompanies()
        
    }

    renderCompanies(){
        
        console.log(this.props)
        return(this.props.companies.map(company => {
            return(
                <Company 
                name = {company.attributes.name} 
                website = {company.attributes.website} 
                twitter = {company.attributes.twitter}
                logo = {company.attributes.logo} /> )
        }))
    }

    render(){
        // debugger
        return(
            
        <div>
            <h1>All the Companies!</h1>
            <SearchContainer/>
            {this.renderCompanies()}
        </div>)

    }
}
const mapStateToProps = state => {
    debugger
    return{ companies: state.companies}
}

export default connect(mapStateToProps, {fetchCompanies})(Companies)