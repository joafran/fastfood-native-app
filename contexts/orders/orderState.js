import React, { useReducer } from 'react';
import { CONFIRM_ORDER, REMOVE_ORDER, SELECT_MEAL, SHOW_TOTAL } from '../../types';
import OrderContext from './orderContext';
import orderReducer from './orderReducer';

const OrderState = ({children}) => {
    
    const initialState = {
        orders: [],
        meal: null,
        total: 0
    }

    const [state, dispatch] = useReducer(orderReducer, initialState);

    const selectMeal = (meal) => {
        dispatch({
            type: SELECT_MEAL,
            payload: meal
        })
    };

    const confirmOrder = (meal) => {
        dispatch({
            type: CONFIRM_ORDER,
            payload: meal
        })
    }

    const showTotal = (total) => {
        dispatch({
            type: SHOW_TOTAL,
            payload: total
        })
    }

    const deleteOrder = (id) => {
        dispatch({
            type: REMOVE_ORDER,
            payload: id
        })
    }

    return (
        <OrderContext.Provider
        value={{
            orders: state.orders,
            meal: state.meal,
            total: state.total,
            selectMeal,
            showTotal,
            confirmOrder,
            deleteOrder
        }}
        >
            {children}
        </OrderContext.Provider>
    )
};

export default OrderState;