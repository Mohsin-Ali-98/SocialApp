import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEye,
  faEyeSlash,
  faUser,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/header';
import {StackActions} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = () => {
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [passeye, setpasseye] = useState(true);
  const [credentiales, setcredentials] = useState(false);
  const [error, seterror] = useState(null);
  const [loader, setloader] = useState(false);

  const Register = () => {
    setloader(true);
    if ((name != '', email != '', pass != '')) {
      auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'list'}],
            }),
          );
          setname('');
          setemail('');
          setpass('');
          // AsyncStorage.setItem('session_status', true);
          storeData();
        })
        .catch(err => {
          setcredentials(true);
          seterror(err.code);
          setloader(false);
        });
    } else {
      Alert.alert('please fill all the fields');
    }
  };
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('session_status', 'true');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.imgview}>
        <Header title="Register" />
      </View>
      <View style={styles.inputview}>
        <View style={[error ? styles.warnuser : styles.userfield]}>
          <TextInput
            value={name}
            placeholder="Enter Username"
            placeholderTextColor="black"
            onChangeText={i => setname(i)}
            keyboardType="default"
            style={styles.textinput}
          />
          <View style={styles.eye}>
            <FontAwesomeIcon icon={faUser} size={30} />
          </View>
        </View>
        <View style={[error ? styles.warnuser : styles.emailfield]}>
          <TextInput
            value={email}
            placeholder="Enter Email-address"
            placeholderTextColor="black"
            onChangeText={i => setemail(i)}
            keyboardType="email-address"
            style={styles.textinput}
          />
          <View style={styles.eye}>
            <FontAwesomeIcon icon={faMailBulk} size={30} />
          </View>
        </View>
        <View style={[error ? styles.warnuser : styles.passfield]}>
          <TextInput
            value={pass}
            placeholder="Enter Password"
            textContentType="newPassword"
            secureTextEntry={passeye}
            // textContentType="newPassword"
            // secureTextEntry
            onChangeText={i => setpass(i)}
            placeholderTextColor="black"
            style={styles.textinput}
          />
          <TouchableOpacity
            style={styles.eye}
            onPress={() => {
              setpasseye(!passeye);
            }}>
            {passeye ? (
              <FontAwesomeIcon icon={faEye} size={30} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} size={30} />
            )}
          </TouchableOpacity>
        </View>
        {credentiales ? (
          <View style={styles.warnview}>
            {error === 'auth/email-already-in-use' ? (
              <Text style={{color: 'red', fontSize: 15}}>
                Email Alreardy in use
              </Text>
            ) : null}
            {error === 'auth/invalid-email' ? (
              <Text style={{color: 'red', fontSize: 15}}>
                Email/Password Invalid
              </Text>
            ) : null}
          </View>
        ) : null}
      </View>
      <View style={styles.btnview}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            Register();
          }}>
          {loader ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Register
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4367c4',
    justifyContent: 'space-evenly',
  },
  imgview: {
    height: '30%',
    width: '100%',
  },

  inputview: {
    height: '40%',
    width: '100%',
    justifyContent: 'space-around',
  },
  userfield: {
    height: '25%',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  warnuser: {
    height: '25%',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    elevation: 20,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 10,
  },
  emailfield: {
    height: '25%',
    width: '95%',
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  passfield: {
    height: '25%',
    width: '95%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textinput: {
    width: '80%',
    height: '100%',
    backgroundColor: '#ebeef2',
    // borderRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 20,
    color: 'black',
    fontSize: 15,
    paddingLeft: 20,
  },
  eye: {
    height: '100%',
    width: '20%',
    backgroundColor: '#ebeef2',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    elevation: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  warnview: {
    height: '20%',
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    elevation: 20,
  },
  btnview: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    height: '60%',
    width: '40%',
    backgroundColor: '#a6baed',
    borderRadius: 30,
    elevation: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Register;
