import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


export class NavBar extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    confirm = e => {
        e.preventDefault()
        this.props.reviewInterview()
    }
    interview = e => {
        e.preventDefault()
        this.props.interview()
    }
    work = e => {
        e.preventDefault()
        this.props.work()
    }
    user = e => {
        e.preventDefault()
        this.props.user()
    }
    review = e => {
        e.preventDefault()
        this.props.review()
    }
    
    render() {
        return(
        <AppBar>
            <Toolbar>
                <Button variant="outlined" >
                <Accordion variant="outlined">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography >Menu</Typography>
                    </AccordionSummary>
                    <MenuList >
                        <MenuItem onClick={this.interview}>Interview Process</MenuItem>
                        <MenuItem onClick={this.work}>Work Life</MenuItem>
                        <MenuItem onClick={this.user}>About You</MenuItem>
                        <MenuItem onClick={this.review}>Review</MenuItem>
                    </MenuList>
                </Accordion>
                </Button> 
            </Toolbar>
        </AppBar>
        )
    }
}

export default NavBar
