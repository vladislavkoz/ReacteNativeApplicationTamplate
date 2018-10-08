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
        title: 'Home',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Application</Text>
                <View>
                    <TextInput placeholder='Translate any word or phrase' style={styles.translation}/>
                </View>
                <View>
                    <Text style={styles.text}>Hola user, te ves guapo hoy</Text>
                    <View>
                        <Button title='Start my daily practice' onPress={() => {
                        }}/>
                        <Text style={styles.text}>Daily statistic here</Text>
                    </View>
                </View>
                <View style={styles.statistic}>
                    <View style={styles.statisticBlock}></View>
                    <View style={styles.statisticBlock}></View>
                    <View style={styles.statisticBlock}></View>
                </View>
                <Text style={styles.text}>
                    Some information about application, or some information about updated parts
                </Text>
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
        marginTop: '5%',
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#fff',
    },
    statistic: {
        borderWidth: 0.5,
        borderColor: 'black',
        flexDirection: 'row',
        width: '100%',
    },
    statisticBlock: {
        flex: 1,
        height: 200,
        backgroundColor: '#d6d7da',
    },
    translation: {
        marginTop: '5%',
        fontSize: 14,
        height: 50,
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
    },
    title: {
        marginTop: '2%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
});
