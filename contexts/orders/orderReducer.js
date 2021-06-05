import { CONFIRM_ORDER, SELECT_MEAL } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case SELECT_MEAL:
            return {
                ...state,
                meal: action.payload
            };

        case CONFIRM_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }

        default:
            return state;
    }
}