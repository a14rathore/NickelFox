const initialState = 0;

const UpdateNUm = (state = initialState, action) => {
    switch (action.type) {
        case "Increase": return state + action.payload;
        case "Decrease": return state - 1;
        default: return state;
    }

}
export default UpdateNUm;