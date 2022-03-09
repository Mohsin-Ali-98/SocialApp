import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

const users = [1, 2, 4, 55, 6, 4, 5];

const Users = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => {
        console.log(res.length);
        setFlag(res.splice(0, 10));
      })
      .catch(err => {
        alert(err);
      });
  }, []);

  const [Flag, setFlag] = useState([]);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text>Users</Text>
      </View>
      <Text style={{color: '#000'}}>This is text input</Text>
      <View style={styles.list}>
        <FlatList
          data={Flag}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.list}
                onPress={() => {
                  console.log(item);
                  //   setFlag(!Flag);
                }}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
          style={{flex: 1}}
        />
      </View>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  header: {
    height: '7%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  list: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: '100%',
    marginLeft: 10,
    flex: 1,
    marginBottom: 10,
  },
});
