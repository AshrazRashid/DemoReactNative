import {React, useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/screens';
import {LoginContext} from './src/contexts/LoginContext';
import {AuthStack, HomeStack} from './src/navigator';

const Stack = createNativeStackNavigator();

function App() {
  const isLogin = useContext(LoginContext);

  return (
    <NavigationContainer>
      {isLogin ? <AuthStack /> : <HomeStack />}
    </NavigationContainer>
  );
}

export default App;
