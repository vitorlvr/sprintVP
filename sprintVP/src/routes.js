import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home/home';
import Cartoes from './pages/meusCartoes/meusCartoes';

import CustomTabBar from './components/CustomTabBar/index';
import Menu from './pages/menu/menu';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#409",

            tabBarStyle: {
                borderTopWidth: 0,
                backgroundColor: "#fff",
            }
        }}
            initialRouteName='Home'
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen
                name='Menu'
                component={Menu}
                options={{
                    tabBarIcon: "menufold"
                }}
            />
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: "home"
                }}
            />
            <Tab.Screen
                name='Cartoes'
                component={Cartoes}
                options={{
                    tabBarIcon: "creditcard"
                }}
            />
        </Tab.Navigator>
    );
};