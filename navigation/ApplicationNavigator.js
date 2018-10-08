import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from '../screens/HomeScreen';
import Settings from '../screens/MyStuff/Settings';
import QuickStart from '../screens/Practice/QuickStart';
import Courses from "../screens/Learn/Courses";

export default createStackNavigator({
        Home: {screen: Home},
        QuickStart: {screen: QuickStart},
        Settings: {screen: Settings},
        Courses: {screen: Courses}
    },
    {
        initialRouteName: 'Home',
    },
);
