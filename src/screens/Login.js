import {React, useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {LoginContext} from '../contexts/LoginContext';

const Login = () => {
  const {isLogin, setLogin} = useContext(LoginContext);

  return (
    <View style={styles.container}>
      <Text>{'Login Page'}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setLogin(true);
        }}>
        <Text style={styles.whiteText}>{'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 10,
  },

  whiteText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Login;
