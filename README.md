This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tech Tribe

Tech Tribe is a React/Redux app that utilizes Material UI for styling. The inspiration comes from graduating FlatIron School and creating a network space for those graduating or alum.

### Backend Link
<a href="https://github.com/emerykurt/techtribe_api">Tech Tribe API</a>

### Build Status 

Completed

### devDependencies:
`package.json`
`package-lock.json`

### Initial Installation
```
npx create-react-app my-app 
cd my-app
npm start
```
`npm start` :
1. Runs the app in the development mode.
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
3. The page will reload if you make edits.

## Installing Redux

`npm install redux-thunk`

##### Middleware/Store Setup:
```
import { Provider } from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import { reducer as searchReducer, reduxSearch } from 'redux-search'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
```

```
const enhancer = compose(
  applyMiddleware(thunk),
  reduxSearch({
    resourceIndexes: {
      companies: ['name']
    },
    resourceSelector: ( state) => {
      return state.companies
    }
  })
)
```

```
const store = createStore(
  rootReducer, 
  enhancer)
```

```
ReactDOM.render(
  
    <Provider store={store}>
      <Container style={{ background: "#ffffff"}} maxWidth="md">
      <App />
      </Container>
    </Provider>
  ,
  document.getElementById('root')
)
```

### Material UI

`npm install @material-ui/core`
`npm install @material-ui/icons`

### License

<small>Copyright, 2020, Emery K Lumsden II

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (Tech Tribe), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</small>


#### tech-tribe
