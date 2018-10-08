import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Application',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View>
                    <TextInput placeholder='Translate any word or phrase' style={styles.translation}/>
                </View>
                <View>
                    <View>
                        <Button title='Start my daily practice' onPress={() => {
                        }}/>
                        <Text style={styles.text}>Daily statistic here</Text>
                    </View>
                    <View style={styles.appMenu}>
                        <View style={styles.menuColumn}>
                            <View style={styles.practice}>
                                <Text style={styles.text}>Practice</Text>
                                <Button title="Quick start" onPress={() => navigate('QuickStart')}/>
                                <Button title="Media Words" onPress={() => {}}/>
                                <Button title="Vocab" onPress={() => {}}/>
                                <Button title="Conjugation" onPress={() => {}}/>
                                <Button title="Grammar" onPress={() => {}}/>
                                <Button title="Reading" onPress={() => {}}/>
                                <Button title="Listening" onPress={() => {}}/>
                                <Button title="Writing" onPress={() => {}}/>
                                <Button title="Tests" onPress={() => {}}/>
                                <Button title="My Assignments" onPress={() => {}}/>
                            </View>
                        </View>
                        <View style={styles.menuColumn}>
                            <View style={styles.learn}>
                                <Text style={styles.text}>Learn</Text>
                                <Button title="Courses" onPress={() => navigate('Courses')}/>
                                <Button title="Dictionary" onPress={() => {}}/>
                                <Button title="Phrase Book" onPress={() => {}}/>
                                <Button title="Countries" onPress={() => {}}/>
                                <Button title="My Classes" onPress={() => {}}/>
                                <Button title="My School" onPress={() => {}}/>
                            </View>
                            <View style={styles.stuff}>
                                <Text style={styles.text}>My Stuff</Text>
                                <Button title="Notes" onPress={() => {}}/>
                                <Button title="Progress" onPress={() => {}}/>
                                <Button title="Settings" onPress={() => navigate('Settings')}/>
                                <Button title="Translations" onPress={() => {}}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const commonMenuBlocksStyle = {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    width: '100%',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    translation: {
        fontSize: 14,
        height: 50,
    },
    appMenu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    menuColumn: {
        flexDirection: 'column',
        width: '50%',
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
    },
    practice: {
        ...commonMenuBlocksStyle,
    },
    learn: {
        ...commonMenuBlocksStyle,
    },
    stuff: {
        ...commonMenuBlocksStyle,
    },
});
