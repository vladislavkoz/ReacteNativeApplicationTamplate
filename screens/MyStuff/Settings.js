import React from 'react';
import {styles} from '../../commonStyles';
import {
    AsyncStorage,
    StyleSheet,
    Button,
    View,
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title='Sign out' onPress={this.signOutAsync}/>
            </View>
        );
    }

    signOutAsync = async () => {
        await AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('Authentication');
    };
}

