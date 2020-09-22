import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Companies from './containers/CompaniesContainer'
// import Company from './components/Company'
// import RatingsContainer from './containers/RatingsContainer'
import './App.css';
import Form from './components/ratingForms/RatingForm'

class App extends Component {
  render (){
    return (
      <div id="main-container">
        <Router>
          <Switch>
            {/* <Route exact path='/' component={Companies}/> */}
            <Route exact path='/' component={Form}/>
            {/* <Route exact path='/ratings' component={RatingsContainer}/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
