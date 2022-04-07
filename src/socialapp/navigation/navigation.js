import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ListApi from '../screens/postwall';
import Details from '../screens/postdetails';
import Login from '../screens/login';
import Register from '../screens/register';
import Splash from '../screens/splash';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationStacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="list" component={ListApi} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContents {...props} />}
      initialRouteName="list"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: '40%',
        },
      }}>
      <Drawer.Screen
        name="list"
        component={ListApi}
        options={{drawerLabel: 'HOME'}}
      />
    </Drawer.Navigator>
  );
};

export default NavigationStacks;
DrawerNavigation;
