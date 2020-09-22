import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default class Nav extends Component {
    render(){
        return (
            <AppBar>
                <Toolbar>
                <Button variant="outlined" color="primary" >
                <Accordion variant="outlined">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography >Menu</Typography>
                    </AccordionSummary>
                    <MenuList >
                        <MenuItem ><NavLink to='/'>Home</NavLink></MenuItem>
                        <MenuItem ><NavLink to='/form'>Write a Review</NavLink></MenuItem>
                        <MenuItem ><NavLink to='/reviews'>View Reviews</NavLink></MenuItem>
                    </MenuList>
                </Accordion>
                </Button> 
                </Toolbar>
            </AppBar>
        )
    }
}
