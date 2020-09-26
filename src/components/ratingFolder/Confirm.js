import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addRating} from '../../actions/RatingsAction'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Nav from './NavBar'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiStrictModeTheme'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'


const theme = createMuiTheme()


export class Confirm extends Component {

    
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
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
        const {values: {rTechCom, rInt, rIntCom, rTech, rTitle, rLang, rCompen, rBenef, rDivers, rMentor, rCult, rOv, rFName, rLName, rLinked, rBootcamp, rCity, rState}, name:{rCompName}} = this.props
        return (
            <ThemeProvider theme={theme}>
                <Paper variant="outlined" square elevation={3} 
                     style={{ background: "linear-gradient(to bottom, #b3b39a 0%, #999966 100%)"}}><br/><br/>
                    <Nav interview={this.interview} work={this.work} user={this.user} review={this.review}/>
                    <br/><br/><br/>
                <Container maxWidth="sm">
                    <Typography variant="h3" >
                    Review:
                    </Typography>
                    <List>
                        <ListSubheader>Company Name:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rCompName}/>
                        </ListItem>

                        <ListSubheader>Job Title:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rTitle}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.interview}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>Interview Process Difficulty:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rInt}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.interview}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>Interview Process Comment:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rIntCom}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.interview}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>Technical Interview Difficulty:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rTech}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.interview}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>Technical Interview Comment:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rTechCom}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.interview}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>Technical Interview Language:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rLang}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.interview}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>Compensation:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rCompen}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.work}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>Benefits:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rBenef}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.work}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>Diversity:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rDivers}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.work}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>Mentorship:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rMentor}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.work}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>Work Culture:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rCult}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.work}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>Overall Score:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rOv}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.work}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>First Name:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rFName}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.user}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>Last Name:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rLName}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.user}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>LinkedIn:</ListSubheader>
                        <ListItem>
                        <a href={rLinked}><LinkedInIcon/></a>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.user}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>Bootcamp:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rBootcamp}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.user}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>City:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rCity}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.user}>Edit</Button>
                        <br/><br/>

                        <ListSubheader>State:</ListSubheader>
                        <ListItem>
                        <ListItemText primary={rState}/>
                        </ListItem>
                        <Button size="small" variant="outlined" color="primary" onClick={this.user}>Edit</Button><br/><br/>
                    </List>

                    <Link to={{pathname:"/reviews"}}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => {
                            this.props.addRating(this.props.values) 
                            }}>Confirm</Button>
                            
                    </Link><br/>
                </Container>
                </Paper>
            </ThemeProvider>
        )
    }
}

export default connect(null, {addRating})(Confirm)
