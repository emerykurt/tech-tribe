import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Companies from './containers/Companies'
// import Company from './components/Company'
// import RatingsContainer from './containers/RatingsContainer'
import './App.css';

class App extends Component {
  render (){
    return (
      <div className="App">
        <Companies/>
        <Router>
          <Switch>
            <Route exact path='/companies' component={Companies}/>
            {/* <Route exact path='/ratings' component={RatingsContainer}/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
