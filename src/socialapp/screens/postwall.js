import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Posts from './postcard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const ListApi = () => {
  const navigation = useNavigation();

  const [text, settext] = useState('');
  const [list, setlist] = useState([]);

  let newindex = null;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => {
        console.log(res[1]);
        setlist(res);
      })
      .catch(err => {
        alert(err);
      });
  }, []);

  const Details = item => {
    navigation.navigate('details', {
      item,
    });
  };

  const POST = () => {
    if (text != '') {
      list.push({
        title: text,
        body: text,
        id: newindex + 1,
      });
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: text,
        body: 'new body added',
        id: newindex + 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(json => console.log(json));
    settext('');
  };

  const ApiItem = ({item, index}) => {
    newindex = index;

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          Details(item);
        }}>
        <Posts title={item.title} body={item.body} id={index} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainview}>
      <View style={styles.header}>
        <Text style={{fontSize: 20, fontStyle: 'italic', fontWeight: 'bold'}}>
          POSTS
        </Text>
      </View>
      <View style={styles.input}>
        <TextInput
          value={text}
          placeholder="Enter newpost"
          onChangeText={i => settext(i)}
          style={{
            width: '80%',
            height: '90%',
            backgroundColor: '#3e3f4f',
            borderRadius: 10,
          }}
        />
        <TouchableOpacity
          style={styles.postbtn}
          onPress={() => {
            POST();
          }}>
          <Text style={{color: 'black'}}>POST</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <View style={styles.post}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              fontStyle: 'italic',
            }}>
            POSTS:
          </Text>
        </View>
        <FlatList
          data={list}
          renderItem={ApiItem}
          keyExtractor={item => {
            item.id;
          }}
          style={{flex: 1, marginBottom: 10}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainview: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'whit',
  },
  header: {
    height: '10%',
    backgroundColor: '#4367c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: '10%',
    backgroundColor: '#a6baed',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  postbtn: {
    height: '70%',
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#4367c4',
    borderWidth: 5,
    borderRadius: 20,
  },
  list: {
    height: '80%',
    width: '100%',
    backgroundColor: '#a6baed',
  },
  post: {
    height: '10%',
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginTop: 10,
    marginLeft: 10,
    flex: 1,
    width: '95%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListApi;
