import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';
import OrderContext from '../contexts/orders/orderContext';
import globalStyles from '../styles/global';

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
        <View style={[globalStyles.container]}>
            <ImageBackground style={styles.image} source={{uri: 'http://st2.depositphotos.com/1013107/5289/i/450/depositphotos_52896365-Wooden-table-and-blur-restaurant-background.jpg'}}>
                <Text style={styles.title}>Quantity</Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View>
                        <Button style={{backgroundColor: '#1f2937'}} onPress={() => lessQuantity()} mode="contained"><Text style={{fontSize: 40}}>-</Text></Button>
                    </View>
                    <TextInput
                        defaultValue="1"
                        value={quantity.toString()}
                        keyboardType="numeric"
                        style={styles.input}
                        onChangeText={(quantity) => setQuantity(quantity)}
                    />
                    <View>
                        <Button style={{backgroundColor: '#1f2937'}} onPress={() => addQuantity()} mode="contained"><Text style={{fontSize: 40}}>+</Text></Button>
                    </View>
                </View>
                <Text style={styles.subtotal}>Subtotal: ${total}</Text>
                <Button onPress={() => confirmAlert()} style={{paddingVertical: 10, backgroundColor: '#ffda00'}} mode="contained"><Text style={{fontSize: 20}}>Make the order</Text></Button>
            </ImageBackground>

        </View>
     );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '50%',
        color: '#fff',
        alignSelf: 'center',
        paddingVertical: 10,
        marginVertical: 20,
        backgroundColor: '#1f2937'
    },
    subtotal: {
        fontSize: 30,
        padding: 5,
        backgroundColor: '#1f2937',
        textAlign: 'center',
        width: '50%',
        alignSelf: 'center',
        color: '#fff',
        marginVertical: 20
    },
    input: {
        fontSize: 50, 
        textAlign: 'center', 
        width: 80,
        color: '#fff',
        borderBottomWidth: 3,
        borderBottomColor: '#1f2937'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
})
 
export default MealForm;