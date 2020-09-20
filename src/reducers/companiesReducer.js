
//create a case statement for company info
export default (state = [], action) => {
    debugger
    switch(action.type){
        case "SET_COMPANIES":
            return [...action.payload];
        default:
            return state;
    }
}