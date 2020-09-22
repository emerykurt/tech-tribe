import { combineReducers } from 'redux'
import companies from './companiesReducer'
import ratings from './ratingsReducer'
export default combineReducers({
  companies,
  ratings
})