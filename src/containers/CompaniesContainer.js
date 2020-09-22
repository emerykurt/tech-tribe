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
        // debugger
        console.log(this.props)
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

    searchCompanies = () => {
        // debugger
        let compDisplay = this.props.companies
        const search = document.getElementById("rCompId")
        if (search.value !== " "){
            debugger
            compDisplay = this.props.companies.filter((company) => {
                if (company.attributes.name.toLowerCase().includes(search.value.toLowerCase()) === true){
                    return(
                        <Company key={company.attributes.id} 
                        id = {company.attributes.id}
                        name = {company.attributes.name} 
                        website = {company.attributes.website} 
                        twitter = {company.attributes.twitter}
                        logo = {company.attributes.logo} 
                        /> )
                }   
            })
    
        }
    }

    render(){
        // debugger
        return(
            
        <div>
            <h1>All the Companies!</h1>
            <input type="search" placeholder="Company.." id="rCompId" name="rCompId" onChange={this.searchCompanies} />
            {/* <SearchContainer /> */}
            {this.renderCompanies() }
        </div>)

    }
}
const mapStateToProps = state => {
    return{ companies: state.companies}
}

export default connect(mapStateToProps, {fetchCompanies})(Companies)