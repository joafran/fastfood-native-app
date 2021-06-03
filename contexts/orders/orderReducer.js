import { SELECT_MEAL } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case SELECT_MEAL:
            return {
                ...state,
                meal: action.payload
            }

        default:
            return state;
    }
}