import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, List, Text } from 'react-native-paper';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native'

import FirebaseContext from '../contexts/firebase/firebaseContext';
import OrderContext from '../contexts/orders/orderContext';


const Menu = () => {
    const navigation = useNavigation();
    const { menu, getMenu } = useContext(FirebaseContext);
    const { selectMeal } = useContext(OrderContext);
    
    useEffect(() => {
        getMenu();
    }, []);

    const groupByCategory = (category, index) => {
        if(index > 0 ) {
            const prevCategory = menu[index - 1].category;
            if(prevCategory !== category) {
                return (
                    <View>
                            <Text style={styles.category}>{category}</Text>
                    </View>
                )
            }
        } else {
            return (
                <View>
                        <Text style={styles.category}>{category}</Text>
                </View>
            )
        }

    }

    return (
            <ScrollView>
                {(menu.length) ? (
                    menu.map( (option, idx) => {
                        const { name, description, category, image, id, price } = option;
                    
                    return (
                        <View key={id} style={[globalStyles.content, styles.content]}>
                            {groupByCategory(category, idx)}
                            <List.Item
                                onPress={() => {
                                    selectMeal(option);
                                    navigation.navigate('MealDetail')
                                }}
                                title={name}
                                titleStyle={styles.title}
                                description={description}
                                descriptionStyle={styles.description}
                                right={() => <Text style={styles.price}>$ {price}</Text>}
                                left={ () =>  <Image style={styles.image} source={{uri: image}}/>}
                                />
                                
                        </View>

                    );
                    })
                    ) : <ActivityIndicator style={{marginTop: 150}} color="#dc143c" size="large"></ActivityIndicator> 
                }
            </ScrollView>
     );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#eee',
        paddingVertical: 10,
        marginBottom: 25
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 18
    },
    category: {
        fontWeight: '700',
        backgroundColor: '#DC143C',
        padding: 8,
        color: '#FFF',
        textTransform: 'uppercase'
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#ffd700',
        color: '#000',
        width: 60,
        height: 40,
        textAlign: 'center',
        marginVertical: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
    }
});
 
export default Menu;