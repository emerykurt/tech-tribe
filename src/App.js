import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Companies from './containers/CompaniesContainer'
import RatingsContainer from './containers/RatingsContainer'
import Form from './components/ratingFolder/RatingForm'
import Comp from './components/CompanyForm'
import './App.css'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Zoom from '@material-ui/core/Zoom'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    // debugger
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}
ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

function App (props) {

    return (
        <Router>
          <CssBaseline />
          <Nav/>
          <Toolbar id="back-to-top-anchor" />
          <Switch>
            <Route exact path='/' component={Companies}/>
            <Route path='/addcompany' component={Comp} />
            <Route path='/form' component={Form} />
            <Route path='/reviews' component={RatingsContainer}/>
          </Switch>
          <ScrollTop {...props}>
            <Fab style={{ background: "#8D9B6A"}}  size="medium" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Router>
    );
}

export default App;
