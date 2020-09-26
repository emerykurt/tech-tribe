import { combineReducers } from 'redux'
import { reducer as searchReducer } from 'redux-search'
import companies from './companiesReducer'
import ratings from './ratingsReducer'
export default combineReducers({
  search: searchReducer,
  companies,
  ratings
})