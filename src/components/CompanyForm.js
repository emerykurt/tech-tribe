import React from 'react'
import {connect} from 'react-redux'
import {addCompany} from '../actions/CompaniesAction'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiStrictModeTheme'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const theme = createMuiTheme()

export class CompanyForm extends React.Component{
    state ={
        name: '',
        website: '',
        twitter: '',
        logo: ''
    }

    handlechange = input => (e) => {
        // debugger
        this.setState({[input]: e.target.value})
    }

    render(){
        const {name, website, twitter, logo} = this.state
        
        return(
            <ThemeProvider theme={theme}>
                <React.Fragment>
                <br/><br/><br/><br/><br/>
                    <Paper variant="outlined" square elevation={3} >
                    <br/><br/><br/>
                        <Typography variant="h3" >
                        Add Your Company
                        </Typography><br/><br/><br/>
                        <InputLabel>Company Name:</InputLabel><br/>
                        <TextField id="compName" 
                        label="...company name" 
                        variant="outlined"
                        onChange={this.handlechange('name')} 
                        value={name} /><br/><br/><br/>

                        <InputLabel>Company Career Website:</InputLabel><br/>
                        <TextField id="compWebsite" 
                        label="...website url" 
                        variant="outlined"
                        onChange={this.handlechange('website')} 
                        value={website}/><br/><br/><br/>         

                        <InputLabel>Twitter Url:</InputLabel><br/>
                        <TextField id="compTwitter" 
                        label="...twitter url" 
                        variant="outlined"
                        onChange={this.handlechange('twitter')} 
                        value ={twitter}/><br/><br/><br/>

                        <InputLabel>Logo Image Link:</InputLabel><br/>
                        <TextField id="compLogo" 
                        label="...image url" 
                        variant="outlined"
                        onChange={this.handlechange('logo')} 
                        value={logo}/><br/><br/><br/>
                        
                        <Link to={{pathname:"/"}}>
                        <Button variant="contained" color="secondary"
                        onClick={() => { this.props.addCompany(this.state) }}>Submit</Button>
                        </Link><br/>
                    </Paper>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}

export default connect(null, {addCompany})(CompanyForm)

