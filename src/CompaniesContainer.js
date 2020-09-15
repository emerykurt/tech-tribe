import React from 'react'
import Company from './Company'
import CompanySearch from './SearchContainer'

class CompaniesContainer extends React.Component {
    state = {companies: []}

    componentDidMount(){
        fetch("http://localhost:3000/companies")
        .then(res => res.json())
        .then( (json) => {
            this.setState({
                companies: json.data 
            })
        })
    }

    renderCompanies(){
        console.log(this.state)
        return(this.state.companies.map(company => {
            return(
                <Company 
                name = {company.attributes.name} 
                website = {company.attributes.website} 
                twitter = {company.attributes.twitter}/> )
        }))
    }

    render(){
        return(
            
        <div>
            <h1>All the Companies!</h1>
            {this.renderCompanies()}
        </div>)

    }
}

export default CompaniesContainer