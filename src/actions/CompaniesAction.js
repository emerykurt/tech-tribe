export const fetchCompanies = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/companies')
        .then(res => res.json())
        .then( (json) => {
            dispatch({type:"SET_COMPS", payload: json.data})
        })

    }
}

export const addCompany = company => {
  // debugger
    return(dispatch) => {
      return fetch('http://localhost:3000/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({company:company})
      })
      .then(resp => resp.json())
      .then(company => {
        // debugger
        if (typeof company.error == "undefined"){
          alert(`Thank you for adding ${company.data.attributes.name} to our site. Just to be sure, look for your company!`)
          dispatch({ type:"ADD_COMP", payload: company })
                
        } else if (typeof company.error == "string") {
          alert(company.error) 
        }
      }
      )
    } 
  }