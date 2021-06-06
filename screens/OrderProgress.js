import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OrderContext from '../contexts/orders/orderContext';
import globalStyles from '../styles/global';

const OrderProgress = () => {
    const navigation = useNavigation();
    const { meal } = useContext(OrderContext);
    return ( 
        <Text>OrderProgress</Text>
     );
}
 
export default OrderProgress;