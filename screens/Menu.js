import React, { useContext, useEffect } from 'react';
import FirebaseContext from '../contexts/firebase/firebaseContext';
import { List, Text } from 'react-native-paper';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import globalStyles from '../styles/global';

const Menu = () => {
    
    const { menu, getMenu } = useContext(FirebaseContext);
    
    useEffect(() => {
        getMenu();
        console.log(menu)
    }, []);

    const groupByCategory = (category, index) => {
        if(index > 0 ) {
            const prevCategory = menu[index - 1].category;
            if(prevCategory !== category) {
                return (
                    <View>
                            <Text style={styles.category}>{category.toUpperCase()}</Text>
                    </View>
                )
            }
        } else {
            return (
                <View>
                        <Text style={styles.category}>{category.toUpperCase()}</Text>
                </View>
            )
        }

    }

    return (
        <>
            <ScrollView>
                {(menu.length) ? (
                    menu.map( (option, idx) => {
                        const { name, description, category, image, id, price } = option;
                    
                    return (
                        <View key={id} style={[globalStyles.content, styles.content]}>
                            {groupByCategory(category, idx)}
                            <List.Item
                                title={name}
                                titleStyle={styles.title}
                                description={description}
                                descriptionStyle={styles.description}
                                left={ () =>  <Image style={styles.image} source={{uri: image}}/>}
                                />
                                <Text style={styles.price}>$ {price}</Text>
                        </View>

                    );
                    })
                    ) : <Text>There's no meals available</Text> 
                }
            </ScrollView>
        </>
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
        backgroundColor: '#dc143c',
        padding: 8,
        color: '#fff'
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#ffd700',
        color: '#000',
        width: 60,
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginHorizontal: 20
    }
});
 
export default Menu;