
const initialState = {
    val: 0
};

const UpdateNum = (state = initialState, action) => {
    switch (action.type) {
        case "Increase": return { val: state.val + action.payload };
        case "Decrease": return { val: state.val - 2 };
        default: return state;
    }

}
export default UpdateNum;