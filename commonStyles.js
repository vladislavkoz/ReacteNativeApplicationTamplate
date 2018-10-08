import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        height: 50,
    },
});

export const menuStyles = {
    container: {
        flexDirection: 'column',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#d6d7da',
        alignContent: 'stretch',
        height: '100%',
        justifyContent: 'center'
    },
    button: {
        flexGrow: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#d6d7da',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    }
};