export default (state = [], action) => {
    // debugger
    switch(action.type){
        case "SET_RATINGS":
            return [...action.payload];
        case "ADD_RATING":
            // debugger
            return [...state, action.payload];
        default:
            return state;
    }
}