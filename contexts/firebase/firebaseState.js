import React, { useReducer } from 'react';
import FirebaseContext from './firebaseContext';
import firebaseReducer from './firebaseReducer';
import firebase from '../../firebase';

const FirebaseState = ({children}) => {

    const initialState = {
        menu: []
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    return (
        <FirebaseContext.Provider
        value={{
            menu: state.menu,
            firebase
        }}
        >
            {children}
        </FirebaseContext.Provider>
    )
};

export default FirebaseState;