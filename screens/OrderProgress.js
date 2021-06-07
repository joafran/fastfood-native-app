import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper'
import globalStyles from '../styles/global';
import OrderContext from '../contexts/orders/orderContext';
import { useNavigation } from '@react-navigation/native'
import firebase from '../firebase'
import CircleTimer from '../components/ui/CircleTimer';

const OrderProgress = () => {
    const navigation = useNavigation();
    const [time, setTime] = useState(0)
    const [isDone, setisDone] = useState(false)
    const { orderId } = useContext(OrderContext);

    useEffect(() => {
        const getOrder = () => {
            firebase.db.collection('orders').doc(orderId).onSnapshot((doc) => {
                setTime(doc.data().deliveryTime);
                setisDone(doc.data().isDone);
            });
        }
        getOrder()
    }, [])

    return ( 
        <View style={globalStyles.container}>
            <View style={[globalStyles.content, {justifyContent: 'space-around', alignItems: 'center'}]}>
                {(time === 0) && (
                    <>
                        <Image style={globalStyles.image} source={require('../assets/time.png')}/>
                        <View>
                            <Text style={{textAlign: 'center', fontSize: 20}} >We received your order...</Text>
                            <Text style={{fontSize: 20}} >We are defining the delivery time</Text>
                        </View>
                        <ActivityIndicator color="#FFDA00" size="large"></ActivityIndicator>
                    </>
                )} 
                {(!isDone && time > 0) && (
                    <>
                    <View>
                        <Text style={styles.waitingText}>Your order will be ready in</Text>
                        <CircleTimer time={time * 60} />
                    </View>
                    </>
                )}
                {isDone && (
                    <>
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.successText}>Your order is ready!</Text>
                            <Image style={{width: 400, height: 380}} source={require('../assets/ready.png')} />
                            <Text style={styles.successText}>Please come to the restaurant to take your order.</Text>
                        </View>
                        <Button 
                         color='#ffda00' 
                         mode="contained"
                         onPress={() => navigation.navigate('NewOrder')}
                        >
                            Make a new order
                        </Button>
                    </>
                )}
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    waitingText: {
        fontSize: 20, 
        textAlign: 'center', 
        marginBottom: 20,
        backgroundColor: '#1F2937',
        padding: 15,
        fontWeight: 'bold',
        color: '#fff'
    },
    successText: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: '#dc143c',
        color: '#fff',
        marginVertical: 10,
    }
})
 
export default OrderProgress;