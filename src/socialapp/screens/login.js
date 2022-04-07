import React, {useState, useEffect} from 'react';
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
import {faEye, faEyeSlash, faUser} from '@fortawesome/free-solid-svg-icons';
import {StackActions, useNavigation} from '@react-navigation/native';
import Header from '../components/header';
import {CommonActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [text, settext] = useState('');
  const [pass, setpass] = useState('');
  const [passeye, setpasseye] = useState(true);
  const [cred, setcred] = useState(false);
  const [error, seterror] = useState(null);
  const [loader, setloader] = useState(false);
  const [emailnot, setemailnot] = useState(false);
  const [passnot, setpassnot] = useState(false);
  const [bothnot, setbothnot] = useState(false);
  const [warn, setwarn] = useState(false);

  const Login = () => {
    setloader(true);
    if (text != '' && pass != '') {
      auth()
        .signInWithEmailAndPassword(text, pass)
        .then(() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'list'}],
            }),
          );
          settext('');
          setpass('');
          storeData();
        })
        .catch(err => {
          setcred(true);
          seterror(err.code);
          setbothnot(false);
          setemailnot(false);
          setpassnot(false);
          setloader(false);
          setwarn(true);
          console.log(error);
        });
    } else if (text == '' && pass != '') {
      setemailnot(true);
      setpassnot(false);
      setbothnot(false);
      setloader(false);
      setcred(true);
      setwarn(true);
    } else if (text != '' && pass == '') {
      setpassnot(true);
      setemailnot(false);
      setbothnot(false);
      setloader(false);
      setcred(true);
      setwarn(true);
    } else if (text == '' && pass == '') {
      setbothnot(true);
      setloader(false);
      setcred(true);
      seterror(null);
      setwarn(true);
    }
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('session_status', 'true');
    } catch (error) {
      console.log(error);
    }
  };
  const Register = () => {
    navigation.navigate('register');
  };

  return (
    <KeyboardAvoidingView style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.imgview}>
        <Header title="LOG IN" />
      </View>
      <View style={styles.inputview}>
        <View style={[warn ? styles.warnuser : styles.userfield]}>
          <TextInput
            value={text}
            placeholder="Enter Username"
            placeholderTextColor="black"
            onChangeText={i => settext(i)}
            keyboardType="email-address"
            style={styles.textinput}
          />
          <View style={styles.icon}>
            <FontAwesomeIcon icon={faUser} size={30} />
          </View>
        </View>
        <View style={[warn ? styles.warnuser : styles.passfield]}>
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
            style={styles.icon}
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
        {cred ? (
          <View style={styles.warnview}>
            <View style={styles.warninside}>
              {error === 'auth/invalid-email' ? (
                <Text style={{color: 'red', fontSize: 15}}>
                  Invalid Email or pass
                </Text>
              ) : null}

              {text == '' ? (
                <Text style={{color: 'red', fontSize: 15}}>
                  Please Enter Email
                </Text>
              ) : null}

              {pass == '' ? (
                <Text style={{color: 'red', fontSize: 15}}>
                  Please Enter Password
                </Text>
              ) : null}

              {text == '' && pass == '' ? (
                <Text style={{color: 'red', fontSize: 15}}>Fields Empty</Text>
              ) : null}
            </View>
          </View>
        ) : null}
      </View>
      <View style={styles.btnview}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            Register();
          }}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            Login();
          }}>
          {loader ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Login
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
    height: '30%',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  userfield: {
    height: '30%',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    elevation: 20,
  },
  warnuser: {
    height: '30%',
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
  passfield: {
    height: '30%',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    // elevation: 20,
  },
  textinput: {
    width: '80%',
    height: '100%',
    backgroundColor: '#ebeef2',
    elevation: 20,
    color: 'black',
    fontSize: 15,
    paddingLeft: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  warnview: {
    height: '20%',
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 20,
  },

  icon: {
    height: '100%',
    width: '20%',
    backgroundColor: '#ebeef2',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    elevation: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnview: {
    height: '30%',
    width: '100%',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    height: '40%',
    width: '40%',
    backgroundColor: '#a6baed',
    borderRadius: 30,
    elevation: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;

// personal token 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
