import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const DrawerContents = () => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <DrawerItem {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContents;
