import React from 'react';
import {
    Button,
    StyleSheet,
    Text, TouchableOpacity,
    View,
} from 'react-native';
import {menuStyles} from "../../commonStyles";

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'My Stuff',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>Notes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>Progress</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={()=>navigate('Settings')}>
                    <Text style={styles.text}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>Translations</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ...menuStyles,
});