import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Practice from '../screens/Practice/Practice';
import Home from '../screens/SecondHome';
import Settings from '../screens/MyStuff/Settings';
import Learn from '../screens/Learn/Learn';
import MyStuff from '../screens/MyStuff/MyStuff';
import QuickStart from '../screens/Practice/QuickStart';
import Courses from "../screens/Learn/Courses";

export const TabsNavigator = createBottomTabNavigator(
    {
        Home: Home,
        Practice: {
            screen: createStackNavigator({
                Practice: {screen: Practice},
                QuickStart: {screen: QuickStart},
            })
        },

        Learn: {
            screen: createStackNavigator({
                Learn: {screen: Learn},
                Courses: {screen: Courses}
            })
        },

        MyStuff: {
            screen: createStackNavigator({
                MyStuff: {screen: MyStuff},
                Settings: {screen: Settings},
            })
        }
    }
);
