//create a case statement for company info
export default (state = [], action) => {
    debugger
    switch(action.type){
        case "SET_COMPS":
            return [...action.payload];
        default:
            return state;
    }
}