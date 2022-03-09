import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    height: '70%',
    width: '100%',
    backgroundColor: '#4367c4',
  },
  idview: {
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  titleview: {
    height: '30%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyview: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnview: {
    height: '30%',
    width: '100%',
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  likeview: {
    height: '100%',
    width: '50%',
    backgroundColor: '#4367c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likebtn: {
    height: '40%',
    width: '60%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  shareview: {
    height: '100%',
    width: '50%',
    backgroundColor: '#4367c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sharebtn: {
    height: '40%',
    width: '60%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});

const Details = ({route}) => {
  const {item} = route.params;

  const [btnstate, setbntstae] = useState(true);

  const Likepost = () => {
    setbntstae(!btnstate);
    console.log(btnstate);
  };

  const Sharepost = () => {
    Alert.alert('Post has been shared');
  };

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.idview}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Post ID : </Text>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>{item.userId}</Text>
        </View>
        <View style={styles.titleview}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              width: '20%',
              paddingLeft: 10,
              alignSelf: 'flex-start',
              fontStyle: 'italic',
            }}>
            Title :
          </Text>
          <Text style={{fontSize: 20, width: '80%'}}> {item.title}</Text>
        </View>
        <View style={styles.bodyview}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              width: '20%',
              paddingLeft: 10,
              alignSelf: 'flex-start',
              fontStyle: 'italic',
            }}>
            Body :
          </Text>
          <Text
            style={{
              fontSize: 20,
              width: '80%',
            }}>
            {item.body}
          </Text>
        </View>
      </View>
      <View style={styles.btnview}>
        <View style={styles.likeview}>
          <TouchableOpacity style={styles.likebtn} onPress={() => Likepost()}>
            {btnstate ? (
              <Text style={{fontSize: 25, color: 'white'}}>LIKE</Text>
            ) : (
              <Text
                style={{
                  fontSize: 25,
                  color: '#4d5bd6',
                }}>
                LIKED
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.shareview}>
          <TouchableOpacity style={styles.sharebtn} onPress={() => Sharepost()}>
            <Text style={{fontSize: 25, color: 'white'}}>SHARE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;
