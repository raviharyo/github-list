const initialState = {
    lists: []
}

export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case `lists/fetchSuccess`:
            return { ...state, lists: action.payload }
        default:
            return state
    }
}