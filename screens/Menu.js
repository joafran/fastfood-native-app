import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native';
import FirebaseContext from '../contexts/firebase/firebaseContext';


const Menu = () => {
    
    const { menu, getMenu } = useContext(FirebaseContext);
    
    useEffect(() => {
        getMenu();
        console.log(menu)
    }, [])

    return (
        <>
            <Text>Menu</Text>
        </>
     );
}
 
export default Menu;