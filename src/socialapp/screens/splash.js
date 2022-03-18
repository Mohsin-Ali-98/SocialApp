import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      SplashNavigation(), 1000;
    });
  }, []);

  const SplashNavigation = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'login'}],
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
