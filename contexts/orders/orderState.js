import React, { useReducer } from 'react';
import { 
    CONFIRM_ORDER, 
    REMOVE_ORDER, 
    SELECT_MEAL, 
    SHOW_TOTAL, 
    ORDER_SENT 
} from '../../types';
import OrderContext from './orderContext';
import orderReducer from './orderReducer';

const OrderState = ({children}) => {
    
    const initialState = {
        orders: [],
        meal: null,
        orderId: '',
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

    const orderSent = (id) => {
        dispatch({
            type: ORDER_SENT,
            payload: id
        });
    }

    return (
        <OrderContext.Provider
        value={{
            orders: state.orders,
            meal: state.meal,
            orderId: state.orderId,
            total: state.total,
            selectMeal,
            showTotal,
            confirmOrder,
            deleteOrder,
            orderSent
        }}
        >
            {children}
        </OrderContext.Provider>
    )
};

export default OrderState;