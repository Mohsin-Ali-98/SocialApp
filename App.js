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
import NavigationStacks from './src/socialapp/navigation/navigation';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={styles.mainview}>
      {
        <NavigationContainer>
          <NavigationStacks />
        </NavigationContainer>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainview: {
    height: '100%',
    width: '100%',
  },
});

export default App;
