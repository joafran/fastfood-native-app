import React from 'react';
import { Button, Text } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../styles/global';

const MenuButton = () => {
    const navigation = useNavigation();
    return ( 
        <Button 
                style={[globalStyles.button, {backgroundColor: '#dc143c'}]} 
                mode="contained"
                onPress={() => navigation.navigate('Menu')}
            >
                <Text style={[globalStyles.buttonText, {color: '#fff', fontSize: 16}]}>📋 Menu</Text>
        </Button>
     );
}
 
export default MenuButton;