import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/home/index';

const Drawer = createDrawerNavigator();

export default function SideMenu() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home"
            drawerStyle={{ backgroundColor: '#313131', paddingVertical: 20}}
            drawerContentOptions={{ activeBackgroundColor: '#fff', inactiveTintColor: '#fff' }}>
                <Drawer.Screen name="Menu1" component={Home} options={
                    { 
                        drawerLabel: (({focused}) => <Text style={{ color: focused ? '#313131' : '#fff'}}>Tela 1</Text>),
                        drawerIcon: (({focused}) => <Icon color={ focused ? '#313131' : '#fff'}/>)
                    }
                }/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}