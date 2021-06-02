import React, { useReducer } from 'react';
import FirebaseContext from './firebaseContext';
import firebaseReducer from './firebaseReducer';
import firebase from '../../firebase';
import { GET_MENU_SUCCESS } from '../../types';

const FirebaseState = ({children}) => {
    
    const initialState = {
        menu: []
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const getMenu = () => {
        
        firebase.db.collection('meals').where('available', '==', true)
        .onSnapshot(handleSnapshot);
        
        async function handleSnapshot(snapshot) {
            let meals = await snapshot.docs.map( doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            dispatch({
                type: GET_MENU_SUCCESS,
                payload: meals
            });
        }
    }

    return (
        <FirebaseContext.Provider
        value={{
            menu: state.menu,
            firebase,
            getMenu
        }}
        >
            {children}
        </FirebaseContext.Provider>
    )
};

export default FirebaseState;