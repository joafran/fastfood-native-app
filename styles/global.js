import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 300,
        width: '100%'
    },
    content: {
        marginHorizontal: '2.5%',
        flex: 1,
    },  
    button: {
        backgroundColor: '#FFDA00',
        borderRadius: 30
    },
    buttonText: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#000'
    }
});

export default globalStyles;