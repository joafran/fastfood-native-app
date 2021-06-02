import { GET_MENU_SUCCESS } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case GET_MENU_SUCCESS: 
            return {
                ...state,
                menu: action.payload
            }
        default:
            return state;
    }
}