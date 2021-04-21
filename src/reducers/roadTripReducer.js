const initState = { numStops: 0, orderedLocationIds: [] }

const roadTripReducer = (state=initState, action) => {
    switch(action.type) {
        case "ADD_A_LOCATION":
            return { ...state, numStops: ++state.numStops};
        case "UPDATE_LOCATIONS":
            return { ...state, orderedLocationIds: action.payload };
        default:
            return state;
    };
};

export default roadTripReducer;