//create a case statement for company info

export default (state = [], action) => {
    // debugger
    switch(action.type){
        case "SET_COMPS":
            return [...action.payload];
        case "SEARCH":{
            debugger
            let compDisplay = state.companies.filter((company) => 
            company.attributes.name.toLowerCase().includes(this.state.search.toLowerCase()))
            return {...state, search: compDisplay}
        } 
        default:
            return state;
    }
}