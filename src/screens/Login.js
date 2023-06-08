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
  const [isLogin, setLogin] = useState(false);

  return (
    <LoginContext.Provider value={isLogin}>
      <View style={styles.container}>
        <Text>{'this is a Login Page'}</Text>

        <TouchableOpacity
          onPress={() => {
            setLogin(true);
          }}>
          <Text>{'Login'}</Text>
        </TouchableOpacity>

        {/* <TextInput */}
      </View>
    </LoginContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default Login;
