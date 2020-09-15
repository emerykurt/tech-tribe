import React from 'react';
import CompaniesContainer from './CompaniesContainer'
import RatingsContainer from './RatingsContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <CompaniesContainer/> */}
        <RatingsContainer/>
      </header>
    </div>
  );
}

export default App;
