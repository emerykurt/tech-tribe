import React, { Component } from 'react'
import Nav from './NavBar'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiStrictModeTheme'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

const theme = createMuiTheme()

export class UserForm extends Component {
 
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    interview = () => {
        this.props.interview()
    }
    work = () => {
        this.props.work()
    }
    user = () => {
        this.props.user()
    }
    review = () => {
        this.props.review()
    }

    render() {
        const {values, handlechange} = this.props
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <Nav interview={this.interview} work={this.work} user={this.user} review={this.review}/>
                    <Paper variant="outlined" square elevation={3} >
                    <br/><br/><br/><br/>
                        <Typography variant="h3" >
                        About You
                        </Typography>
                        <br/><br/><br/>
                        <InputLabel>First Name:</InputLabel><br/>
                        <TextField id="rFName" 
                        label="...first name" 
                        variant="outlined" 
                        onChange={handlechange('rFName')} 
                        value={values.rFName}/><br/><br/><br/>
                        <InputLabel>Last Name:</InputLabel><br/>
                        <TextField id="rLName" 
                        label="...last name" 
                        variant="outlined" 
                        onChange={handlechange('rLName')} 
                        value={values.rLName}/><br/><br/><br/>
                        <InputLabel>Bootcamp:</InputLabel><br/>
                        <TextField id="rBootcamp" 
                        label="...bootcamp" 
                        variant="outlined" 
                        onChange={handlechange('rBootcamp')} 
                        value={values.rBootcamp}/><br/><br/><br/>
                        <InputLabel>City:</InputLabel><br/>
                        <TextField id="City" 
                        label="...city" 
                        variant="outlined" 
                        onChange={handlechange('rCity')} 
                        value={values.rCity}/><br/><br/><br/>
                        <InputLabel>State:</InputLabel><br/>
                        <TextField id="State" 
                        label="...state" 
                        variant="outlined" 
                        onChange={handlechange('rState')} 
                        value={values.rState}/><br/><br/><br/>
                        <Button 
                            variant="outlined" 
                            color="primary" 
                            onClick={this.back}>Back</Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={this.continue}>Review</Button>
                    </Paper>
                </React.Fragment>
            </ThemeProvider>
        )}
}

export default UserForm