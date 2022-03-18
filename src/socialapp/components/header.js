import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginview: {
    height: '80%',
    width: '100%',
    backgroundColor: '#a6baed',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 3,
    elevation: 50,
  },
  triangleview: {
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  triangle: {
    width: '10%',
    height: '100%',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderTopWidth: 45,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#a6baed',
  },
  transparent: {
    width: '80%',
    height: '100%',
    backgroundColor: 'transparent',
    elevation: 40,
  },
});

const Header = props => {
  return (
    <View style={styles.container}>
      <View style={styles.loginview}>
        <Text
          style={{
            fontSize: 50,
            color: 'black',
            fontStyle: 'normal',
            fontWeight: 'bold',
          }}>
          {props.title}
        </Text>
      </View>
      <View style={styles.triangleview}>
        <View style={styles.triangle}></View>
        <View style={styles.transparent}></View>
      </View>
    </View>
  );
};

export default Header;
