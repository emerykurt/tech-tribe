import React, { Component } from 'react'
import Nav from './NavBar'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiStrictModeTheme'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'

const theme = createMuiTheme()

export class InterviewForm extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    confirm = e => {
        e.preventDefault()
        this.props.reviewInterview()
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
        // debugger
        const {values, handlechange} = this.props
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                <br/><br/><br/><br/><br/>
                    <Nav interview={this.interview} work={this.work} user={this.user} review={this.review}/>
                    <Paper variant="outlined" square elevation={3} >
                    <br/><br/><br/>
                        <Typography variant="h3" >
                        Interview Process
                        </Typography>
                        <br/><br/><br/>
                        <InputLabel>Job Title:</InputLabel>
                        <TextField id="rTitle" 
                        label="details..." 
                        variant="outlined" 
                        onChange={handlechange('rTitle')}
                        value={values.rTitle}/>
                        <br/><br/><br/><br/>
                        <InputLabel>Interview Difficulty:</InputLabel>
                        <Select id="rInt" 
                        onChange={handlechange('rInt')}
                        value={values.rInt}>
                                <MenuItem value="easy">easy</MenuItem>
                                <MenuItem value="moderate">moderate</MenuItem>
                                <MenuItem value="extensive">extensive</MenuItem>

                        </Select><br/><br/>
                        <TextField id="rIntCom" 
                        label="details..." 
                        variant="outlined" 
                        onChange={handlechange('rIntCom')}
                        value={values.rIntCom}/>
                        <br/><br/><br/><br/>
                        <InputLabel>Tech Interview Difficulty:</InputLabel>
                        <Select id="rTech" 
                        onChange={handlechange('rTech')}
                        value={values.rTech}>
                                <MenuItem value="easy">easy</MenuItem>
                                <MenuItem value="moderate">moderate</MenuItem>
                                <MenuItem value="extensive">extensive</MenuItem>

                        </Select><br/><br/>
                        <TextField id="rTechCom" 
                        label="details..." 
                        variant="outlined" 
                        onChange={handlechange('rTechCom')} 
                        value={values.rTechCom}/><br/><br/><br/><br/>
                        <InputLabel>Tech Interview Language:</InputLabel>
                        <TextField id="rLang" 
                        label="details..." 
                        variant="outlined" 
                        onChange={handlechange('rLang')} 
                        value={values.rLang}/><br/><br/>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={this.continue}>Continue</Button>
                        <br/>
                        <Button 
                        variant="outlined" 
                        color="secondary"
                        onClick={this.confirm}>Review</Button>
                    </Paper>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}

export default InterviewForm
