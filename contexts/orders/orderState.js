import React, { useReducer } from 'react';
import { SELECT_MEAL } from '../../types';
import OrderContext from './orderContext';
import orderReducer from './orderReducer';

const OrderState = ({children}) => {
    
    const initialState = {
        orders: [],
        meal: null
    }

    const [state, dispatch] = useReducer(orderReducer, initialState);

    const selectMeal = (meal) => {
        dispatch({
            type: SELECT_MEAL,
            payload: meal
        })
    }

    return (
        <OrderContext.Provider
        value={{
            orders: state.orders,
            meal: state.meal,
            selectMeal
        }}
        >
            {children}
        </OrderContext.Provider>
    )
};

export default OrderState;