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

const Register = () => {
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [passeye, setpasseye] = useState(true);

  const Register = () => {
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
        })
        .catch(err => {
          if (err.code === 'auth/email-already-in-use') {
            Alert.alert('Email already in use');
          }
          if (err.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }
        });

      setname('');
      setemail('');
      setpass('');
    } else {
      Alert.alert('please fill all the fields');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.imgview}>
        <Header title="Register" />
      </View>
      <View style={styles.inputview}>
        <View style={styles.userfield}>
          <TextInput
            value={name}
            placeholder="Enter Username"
            placeholderTextColor="black"
            onChangeText={i => setname(i)}
            keyboardType="default"
            style={{
              width: '75%',
              height: '50%',
              backgroundColor: '#ebeef2',
              elevation: 20,
              color: 'black',
              fontSize: 15,
              paddingLeft: 20,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />
          <View style={styles.eye}>
            <FontAwesomeIcon icon={faUser} size={30} />
          </View>
        </View>
        <View style={styles.emailfield}>
          <TextInput
            value={email}
            placeholder="Enter Email-address"
            placeholderTextColor="black"
            onChangeText={i => setemail(i)}
            keyboardType="email-address"
            style={{
              width: '75%',
              height: '50%',
              backgroundColor: '#ebeef2',
              elevation: 20,
              color: 'black',
              fontSize: 15,
              paddingLeft: 20,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />
          <View style={styles.eye}>
            <FontAwesomeIcon icon={faMailBulk} size={30} />
          </View>
        </View>
        <View style={styles.passfield}>
          <TextInput
            value={pass}
            placeholder="Enter Password"
            textContentType="newPassword"
            secureTextEntry={passeye}
            // textContentType="newPassword"
            // secureTextEntry
            onChangeText={i => setpass(i)}
            placeholderTextColor="black"
            style={{
              width: '75%',
              height: '50%',
              backgroundColor: '#ebeef2',
              // borderRadius: 10,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              elevation: 20,
              color: 'black',
              fontSize: 15,
              paddingLeft: 20,
            }}
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
    height: '40%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 11,
    // },
    // shadowOpacity: 0.57,
    // shadowRadius: 15.19,

    // elevation: 23,
  },
  emailfield: {
    height: '40%',
    width: '100%',
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  passfield: {
    height: '40%',
    width: '100%',
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  eye: {
    height: '50%',
    width: '20%',
    backgroundColor: '#ebeef2',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    elevation: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnview: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    height: '50%',
    width: '40%',
    backgroundColor: '#a6baed',
    borderRadius: 30,
    elevation: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Register;
