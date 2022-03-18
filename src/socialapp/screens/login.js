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
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash, faUser} from '@fortawesome/free-solid-svg-icons';
import {StackActions, useNavigation} from '@react-navigation/native';
import Header from '../components/header';
import {CommonActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
const Login = () => {
  const navigation = useNavigation();
  const [text, settext] = useState('');
  const [pass, setpass] = useState('');
  const [passeye, setpasseye] = useState(true);
  // firebase states
  const [initializing, setinitializing] = useState(true);
  const [user, setuser] = useState();

  function onAuthStateChanged(user) {
    setuser(user);
    if (initializing) setinitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const Login = () => {
    if ((text != '', pass != '')) {
      if (initializing) return null;
      if (!user) {
        Alert.alert('User not avalible please Sign in');
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'list'}],
          }),
        );
        settext('');
        setpass('');
      }
    } else {
      Alert.alert('please fill all the fields');
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
        <View style={styles.userfield}>
          <TextInput
            value={text}
            placeholder="Enter Username"
            placeholderTextColor="black"
            onChangeText={i => settext(i)}
            keyboardType="email-address"
            style={{
              width: '75%',
              height: '70%',
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
              height: '70%',
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
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            Login();
          }}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Login
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
    height: '30%',
    width: '100%',
    justifyContent: 'space-evenly',
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
  passfield: {
    height: '40%',
    width: '100%',
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  eye: {
    height: '70%',
    width: '20%',
    backgroundColor: '#ebeef2',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    elevation: 40,
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
