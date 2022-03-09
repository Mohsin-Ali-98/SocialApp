import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const HeightDimension = Dimensions.get('window').height;
const widthDimension = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4367c4',
    height: HeightDimension / 2.5,
    width: '100%',
    borderRadius: 30,
    alignItems: 'center',
  },
  idview: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleview: {
    height: '25%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  bodyview: {
    // height: HeightDimension / 5,
    height: '50%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

const Posts = ({title, body, id}) => {
  return (
    <View style={styles.container}>
      <View style={styles.idview}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          {' '}
          Post No :{id + 1}
        </Text>
      </View>
      {/* <View style={styles.titleview}>
        <View
          style={{
            height: '100%',
            width: '20%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}> Title :</Text>
        </View>
        <View
          style={{
            height: '100%',
            width: '80%',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 18}}> {title}</Text>
        </View>
      </View> */}
      <View style={styles.titleview}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            width: '20%',
            paddingLeft: 10,
          }}>
          Title :
        </Text>
        <Text style={{fontSize: 18, width: '80%'}}> {title}</Text>
      </View>
      <View style={styles.bodyview}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            width: '20%',
            paddingLeft: 10,
          }}>
          Body :
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'auto',
            width: '80%',
            height: '100%',
          }}>
          {body}
        </Text>
      </View>
    </View>
  );
};

export default Posts;
