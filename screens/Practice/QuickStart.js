import React from 'react';
import {styles} from '../../commonStyles';
import {
    Text,
    View,
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Quick Start',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Quick Start</Text>
            </View>
        );
    }
}
