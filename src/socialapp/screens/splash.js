import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      RetriveAsyncData(), 1000;
    });
  }, []);

  const RetriveAsyncData = async () => {
    try {
      const value = await AsyncStorage.getItem('session_status');
      if (value == 'true') {
        setTimeout(() => {
          SplashtoPost(), 1000;
        });
      } else if (value == 'false') {
        setTimeout(() => {
          SplashtoLogin(), 1000;
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const SplashtoLogin = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'login'}],
      }),
    );
  };

  const SplashtoPost = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'list'}],
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          // width: '90%',
          fontSize: 40,
          fontStyle: 'italic',
          fontWeight: 'bold',
        }}>
        WELCOME!!!!
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4367c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
