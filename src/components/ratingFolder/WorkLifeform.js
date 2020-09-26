import React, { Component } from 'react'
import Nav from './NavBar'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiStrictModeTheme'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Container from '@material-ui/core/Container'

const theme = createMuiTheme()

export class WorkLifeform extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    confirm = e => {
        e.preventDefault()
        this.props.reviewWork()
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
                <Paper variant="outlined" square elevation={3} 
                     style={{ background: "linear-gradient(to bottom, #b3b39a 0%, #999966 100%)"}}><br/><br/>
                    <Nav interview={this.interview} work={this.work} user={this.user} review={this.review}/>
                    <br/><br/><br/>
                    <Container maxWidth="sm">
                        <Typography variant="h3" >
                        Work Life
                        </Typography>
                        <br/><br/><br/>
                        <InputLabel>Compensation (this information will not be displayed or connected with your name):</InputLabel>
                        <Input
                            id="rCompen"
                            type="number"
                            value={values.amount}
                            onChange={handlechange('rCompen')}
                            defaultValue= {50000}
                            inputProps={{ min: "50000", step: "50" }}
                            startAdornment={<InputAdornment position='start'>$</InputAdornment>}/><br/><br/>
                        <InputLabel>Benefits:</InputLabel>
                        <Select id="rBenef" 
                        onChange={handlechange('rBenef')}
                        value={values.rBenef}>
                                <MenuItem value="yes">yes</MenuItem>
                                <MenuItem value="no">no</MenuItem>
                        </Select><br/><br/>
                        <InputLabel>Diversity:</InputLabel>
                        <Select id="rDivers" 
                        onChange={handlechange('rDivers')}
                        value={values.rDivers}>
                                <MenuItem value="yes">yes</MenuItem>
                                <MenuItem value="no">no</MenuItem>
                        </Select><br/><br/>
                        <InputLabel>Mentorship:</InputLabel>
                        <Select id="rMentor" 
                        onChange={handlechange('rMentor')}
                        value={values.rMentor}>
                                <MenuItem value="yes">yes</MenuItem>
                                <MenuItem value="no">no</MenuItem>
                        </Select><br/><br/>
                        <InputLabel>Work Culture:</InputLabel>
                        <Select id="rCult" 
                        onChange={handlechange('rCult')}
                        value={values.rCult}>
                                <MenuItem value="innovative">innovative</MenuItem>
                                <MenuItem value="progressive">progressive</MenuItem>
                                <MenuItem value="flexible">flexible</MenuItem>
                                <MenuItem value="competitive">competitive</MenuItem>
                                <MenuItem value="challenging">challenging</MenuItem>
                                <MenuItem value="inflexible">inflexible</MenuItem>
                                <MenuItem value="micromanaged">micromanaged</MenuItem>
                                <MenuItem value="difficult">difficult</MenuItem>
                                <MenuItem value="hypercompetitive">hypercompetitive</MenuItem>
                        </Select><br/><br/><br/><br/>

                        <InputLabel>Overall:</InputLabel>
                        <FormControl component="fieldset">
                        <RadioGroup row aria-label="rOv" name="rOv" value={values.rOv} onChange={handlechange('rOv')}>
                            <FormControlLabel value="0" control={<Radio />} label="poor" />
                            <FormControlLabel value="3" control={<Radio />} label="needs work" />
                            <FormControlLabel value="7" control={<Radio />} label="satisfactory" />
                            <FormControlLabel value="10" control={<Radio />} label="excellent" />
                        </RadioGroup>
                        </FormControl><br/><br/><br/><br/>

                        <Button 
                            variant="outlined" 
                            color="primary" 
                            onClick={this.back}>Back</Button>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={this.continue}>Continue</Button>
                        <br/>
                        <Button 
                        variant="outlined"
                        color="secondary" 
                        onClick={this.confirm}>Review</Button>
                    </Container>
                    </Paper>
            </ThemeProvider>
        )
    }
}

export default WorkLifeform
