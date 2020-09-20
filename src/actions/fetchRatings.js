export const fetchRatings = () => {
    return(dispatch) => {
      return fetch('http://localhost:3000/ratings')
      .then(resp => resp.json())
      .then(ratings => {
        dispatch({ type: "SET_RATINGS", payload: ratings })
      })
    }
  }
  
  
  export const addRating = rating => {
    return(dispatch) => {
      return fetch('http://localhost:3000/rating', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({rating:rating})
      })
      .then(resp => resp.json())
      .then(rating => {
        dispatch({ type: "ADD_RATING", payload: rating })
      })
    } 
  }
  
  export const removeRating = rId => {
    return(dispatch) => {
      return fetch(`http://localhost:3000/rating/${rId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(rating => {
        dispatch({ type: "REMOVE_RATING", payload: rating })
      })
    } 
  }