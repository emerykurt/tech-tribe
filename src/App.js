import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Companies from './containers/CompaniesContainer'
import RatingsContainer from './containers/RatingsContainer'
import Form from './components/ratingFolder/RatingForm'
import Comp from './components/CompanyForm'
import './App.css'

class App extends Component {

  render (){
    return (
        <Router>
          <div>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Companies}/>
            <Route path='/addcompany' component={Comp} />
            <Route path='/form' component={Form} />
            <Route path='/reviews' component={RatingsContainer}/>
          </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
