import React from 'react';
import {
    AsyncStorage,
    StyleSheet,
    Button,
    View,
} from 'react-native';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    render() {
        return (
            <View>
                <Button title="Sign in!" onPress={this.signInAsync}/>
                <Button title="Second template" onPress={this.signInSecond}/>
            </View>
        );
    }

    signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Application');
    };

    signInSecond = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('OneMoreApp');
    };

}
