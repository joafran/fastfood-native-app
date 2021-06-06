import { CONFIRM_ORDER, SELECT_MEAL, SHOW_TOTAL } from "../../types";

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

        case SHOW_TOTAL:
            return {
                ...state,
                total: action.payload
            }
                
        default:
            return state;
    }
}