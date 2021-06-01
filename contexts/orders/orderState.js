import React, { useReducer } from 'react';
import OrderContext from './orderContext';
import orderReducer from './orderReducer';

const OrderState = ({children}) => {

    const initialState = {
        orders: []
    }

    const [state, dispatch] = useReducer(orderReducer, initialState)

    return (
        <OrderContext.Provider
        value={{
            orders: state.orders
        }}
        >
            {children}
        </OrderContext.Provider>
    )
};

export default OrderState;