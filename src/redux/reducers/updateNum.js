const initialState = 0;

const UpdateNum = (state = initialState, action) => {
    switch (action.type) {
        case "Increase": return state + action.payload;
        case "Decrease": return state - 2;
        default: return state;
    }

}
export default UpdateNum;