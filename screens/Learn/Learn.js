import React from 'react';
import {menuStyles} from '../../commonStyles';
import {
    AsyncStorage,
    StyleSheet,
    Button,
    View, Text, TouchableOpacity,
} from 'react-native';
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Learn',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}  onPress={()=>navigate('Courses')}>
                    <Text style={styles.text}>Courses</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>Dictionary</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>Phrase Book</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>Countries</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>My Classes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => {}}>
                    <Text style={styles.text}>My School</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ...menuStyles,
});
