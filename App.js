import {React, useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginContext} from './src/contexts/LoginContext';
import {AuthStack, HomeStack} from './src/navigator';

const Stack = createNativeStackNavigator();

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <NavigationContainer>
      <LoginContext.Provider value={{isLogin, setLogin}}>
        {isLogin ? <HomeStack /> : <AuthStack />}
      </LoginContext.Provider>
    </NavigationContainer>
  );
}

export default App;
