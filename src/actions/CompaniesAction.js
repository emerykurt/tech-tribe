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


  export function search(value) {
    return {type: "SEARCH", value}
  }