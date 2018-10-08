import React from 'react';
import {menuStyles} from '../../commonStyles';
import {
    Button,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Practice',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}  onPress={() => navigate('QuickStart')}>
                    <Text style={styles.text}>Quick start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>Media Words</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>Vocab</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>Conjugation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>Grammar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>Reading</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>Listening</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>Writing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>Tests</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>My Assignments</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ...menuStyles,
});
