export const fetchRatings = () => {
    return(dispatch) => {
      return fetch('http://localhost:3000/ratings')
      .then(resp => resp.json())
      .then(ratings => {
        dispatch({ type: "SET_RATINGS", payload: ratings.data })
      })
    }
  }
  
  
export const addRating = rating => {
  // debugger
  return(dispatch) => {
    return fetch('http://localhost:3000/ratings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({rating:rating})
    })
    .then(resp => resp.json())
    .then(rating => {
      // debugger
      if (typeof rating.error == "undefined"){
        alert(`Thank you ${rating.data.attributes.rFName} for contributing to our site! You are now apart of our Tech TRIBE!`)
        dispatch({ type:"ADD_RATING", payload: rating })
              
      } else if (typeof rating.error == "string") {
        alert(rating.error) 
      }
    })
  } 
}
  