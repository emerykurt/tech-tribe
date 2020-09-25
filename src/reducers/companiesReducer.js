

export default (state = [], action) => {
    // debugger
    switch(action.type){
        case "SET_COMPS":
            return [...action.payload];
        case "ADD_COMPS":
                return [...state, action.payload];
        case "SEARCH":{
            // debugger
            const {value} = action
            const companies = state.filter((company) => company.attributes.name.includes(value))
            return {...companies}
        } 
        default:
            return state;
    }
}