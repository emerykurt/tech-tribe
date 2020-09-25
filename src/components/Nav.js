import React from 'react'
import {NavLink} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'


function Nav () {

    const [anchorEl, setAnchorEl] = React.useState(null)
    

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <AppBar id="anchor" style={{ background: "#525c55"}}  >
          <div>
            <Button style={{ background: "#eaeaea"}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Menu
            </Button>
            <Typography 
            align='center'
            justify='center'
            variant="h4">
            Tech Tribe
            </Typography>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
                <MenuItem style={{ background: "#eaeaea"}} onClick={handleClose}><NavLink to='/'>Company Community</NavLink></MenuItem>
                <MenuItem style={{ background: "#eaeaea"}} onClick={handleClose}><NavLink to='/reviews'>Tribal Thoughts</NavLink></MenuItem>
            </Menu>
            </div>
        </AppBar>
    )
    
}

export default Nav
