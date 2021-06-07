import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text } from 'react-native-paper'
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native'

const NewOrder = () => {

    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <View>
                <Image style={globalStyles.image} source={require('../assets/welcome.png')} />
            </View>
            <View style={[globalStyles.content, style.content]}>
                <Button
                    mode="contained"
                    style={globalStyles.button}
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Text style={globalStyles.buttonText}>Make an order</Text>
                </Button>
            </View>
        </View>
     );
}

const style = StyleSheet.create({
    content: {
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

export default NewOrder;