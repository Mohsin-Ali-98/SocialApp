import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import NamesList from '../screens/names';
import EditName from '../screens/editname';
import NameCard from '../components/namecard';
import Todolist from '../../todolist/screens/todolist';
import TaskManager from '../../TaskManager/Task';
import Users from '../../Users';
import ListApi from '../screens/postwall';
import Details from '../screens/postdetails';
const Stack = createStackNavigator();

const NavigationStacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="list"
      screenOptions={{
        headerMode: 'screen',
        headerShown: false,
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen name="Home" component={NamesList} />
      <Stack.Screen name="Todo" component={Todolist} />
      <Stack.Screen name="Game" component={TaskManager} />
      <Stack.Screen name="user" component={Users} />
      <Stack.Screen name="list" component={ListApi} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  );
};

export default NavigationStacks;
