import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';
import OrderContext from '../contexts/orders/orderContext';

const MealForm = () => {
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);
    const navigation = useNavigation();
    const { meal, confirmOrder } = useContext(OrderContext);
    const { price, name } = meal;

    const calculateTotal = () => {
        const totalToPay = price * quantity;
        setTotal(totalToPay);
    }

    useEffect(() => {
        calculateTotal();
    }, [quantity]);

    const confirmAlert = () => {
        Alert.alert(
            'Confirm order',
            `${name} \nQuantity: ${quantity}`,
            [
                {
                    text: 'Confirm',
                    onPress: () => {
                        const order = {
                            ...meal,
                            quantity,
                            total
                        }
                        confirmOrder(order);
                        navigation.navigate('OrderSummary')
                    }
                },
                {
                    text: 'Cancel',
                    style: 'cancel'
                }
            ]
        )
    }

    const lessQuantity = () => {
        if(quantity > 1) {
            setQuantity(parseInt(quantity) - 1);
        }
    }

    const addQuantity = () => {
        setQuantity(parseInt(quantity) + 1);
    }

    return ( 
        <View style={{height: '100%'}}>
            <Text style={{fontSize: 40, textAlign: 'center', marginVertical: 20}}>Quantity</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <View>
                    <Button onPress={() => lessQuantity()} mode="contained"><Text style={{fontSize: 40}}>-</Text></Button>
                </View>
                <TextInput
                    defaultValue="1"
                    value={quantity.toString()}
                    keyboardType="numeric"
                    style={{fontSize: 40, borderBottomWidth: 2, borderBottomColor: '#00acee'}}
                    onChangeText={(quantity) => setQuantity(quantity)}
                />
                <View>
                    <Button onPress={() => addQuantity()} mode="contained"><Text style={{fontSize: 40}}>+</Text></Button>
                </View>
            </View>
            <Text style={{fontSize: 40, textAlign: 'center', marginVertical: 20}}>Subtotal: ${total}</Text>
            <Button onPress={() => confirmAlert()} style={{paddingVertical: 20}} mode="contained"><Text style={{fontSize: 20}}>Make the order</Text></Button>
        </View>
     );
}
 
export default MealForm;