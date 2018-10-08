import React from 'react';
import {styles} from '../../commonStyles';
import {
    AsyncStorage,
    StyleSheet,
    Button,
    View, Text,
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Courses',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Courses</Text>
            </View>
        );
    }
}
