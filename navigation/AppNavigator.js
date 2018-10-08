import React from 'react';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import ApplicationNavigator from './ApplicationNavigator';
import SignInScreen from '../screens/SignInScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import {TabsNavigator} from './TabsNavigator';

const AuthStack = createStackNavigator({SignIn: SignInScreen});

export default createSwitchNavigator({
        AuthLoading: AuthLoadingScreen,
        Authentication: AuthStack,
        Application: ApplicationNavigator,
        OneMoreApp: TabsNavigator,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);