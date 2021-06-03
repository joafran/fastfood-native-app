import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/core';
import OrderContext from '../contexts/orders/orderContext';

import { Button, Card, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles/global';

const MealDetail = () => {
    const { meal } = useContext(OrderContext);
    const { name, description, price, image } = meal;
    const navigation = useNavigation();

    return ( 
        <View style={[globalStyles.container, styles.container]}>
            <Card>
                <Card.Cover style={globalStyles.image} source={{uri: image}} />
                <Card.Content style={{backgroundColor: '#fafad2'}}>
                    <Card.Title titleStyle={styles.title} title={name} right={() => <Text style={[styles.title, styles.price]}>Price: ${price}</Text>} />
                    <Paragraph style={styles.description}>{description}</Paragraph>
                </Card.Content>
            </Card>
            <Button onPress={() => navigation.navigate('MealOrder')} style={styles.button} color='#FFDA00' mode='contained'>Add to my orders</Button>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },
    title: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        backgroundColor: '#DC143C',
        fontWeight: 'bold',
        color: '#FFF'
    },
    price: {
        marginHorizontal: 5,
        borderWidth: 2,
        borderColor: '#DC143C',
        backgroundColor: '#fff',
        color: '#DC143C'
    },
    description: {
        fontSize: 17,
        backgroundColor: '#dc143c',
        padding: 10,
        borderRadius: 5,
        color: '#fff'
    },
    button: {
        paddingVertical: 5
    }
})
 
export default MealDetail;