import {React, useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginContext} from './src/contexts/LoginContext';
import {AuthStack, HomeStack} from './src/navigator';
import {Provider} from 'react-redux';
import store from './store';

const Stack = createNativeStackNavigator();

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <LoginContext.Provider value={{isLogin, setLogin}}>
          {isLogin ? <HomeStack /> : <AuthStack />}
        </LoginContext.Provider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
