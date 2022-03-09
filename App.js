import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import NavigationStacks from './src/crudproject/navigation/navigation';
import NamesList from './src/crudproject/screens/names';

import Todolist from './src/todolist/screens/todolist';
import { NavigationContainer } from '@react-navigation/native';
import TaskManager from './src/TaskManager/Task';

const App  = () => {
 

  return (
    <SafeAreaView style={styles.mainview}>
            {/* <Todolist/> */}


            { <NavigationContainer>
                    <NavigationStacks/>
            </NavigationContainer> }


            {/* <TaskManager/> */}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
mainview:{
  height:"100%",
  width:"100%",
} ,
});

export default App;
