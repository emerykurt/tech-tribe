import React from 'react'
import Company from '../components/Company'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {fetchCompanies} from '../actions/CompaniesAction'
import SearchContainer from './SearchContainer'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

class Companies extends React.Component {

    componentDidMount(){
        this.props.fetchCompanies()  
    }

    search = (e) => {
        // debugger
        this.setState({
            search: e.target.value
        })
        
    }

    shuffleArray = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }

      

    renderCompanies(){
        debugger
        if (this.state !== null ){
            const companies = this.props.companies.filter((company) => company.attributes.name.toLowerCase().includes(this.state.search))

            return(
                companies.map(company => {
                return(
                    <Company key={company.attributes.id} 
                    id = {company.attributes.id}
                    name = {company.attributes.name} 
                    website = {company.attributes.website} 
                    twitter = {company.attributes.twitter}
                    logo = {company.attributes.logo} 
                    /> )   
            }))

        } else {
            const shuffleComps = this.shuffleArray(this.props.companies)

            return(
                shuffleComps.map(company => {
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
        
    }

    render(){
        return(
        <div>
            <br/><br/>
            <Typography variant="h2"
            align='center'>
                Company Community!
            </Typography><br/>
            <TextField 
                align='center'
                label='Company Search'
                variant='outlined'
                margin='normal'
                id="search-companies"
                onChange={this.search}
            /><br/>
            <Typography>
            <Link to={{pathname:"/addcompany"}}><strong align='center'>(Don't see the company you are looking for?)</strong> </Link>
            </Typography><br/><br/>
            <Grid
            container
            spacing={1}
            alignItems="center"
            justify="center">
            {this.renderCompanies() }
            </Grid>
        </div>)

    }
}
const mapStateToProps = (state) => {
    return{ 
        companies: state.companies,
        search: ' '
    }
}

export default connect(mapStateToProps, {fetchCompanies})(Companies)