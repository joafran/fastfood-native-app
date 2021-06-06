import React, { useContext } from 'react';
import { Button, Text } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import OrderContext from '../../contexts/orders/orderContext';
import globalStyles from '../../styles/global';


const SummaryButton = () => {
    const navigation = useNavigation();
    const { orders } = useContext(OrderContext)
    if(!orders.length) return null;
    return ( 
        <Button 
                style={[globalStyles.button]} 
                mode="contained"
                onPress={() => navigation.navigate('OrderSummary')}
            >
                <Text style={globalStyles.buttonText}>My orders</Text>
        </Button>
     );
}
 
export default SummaryButton;