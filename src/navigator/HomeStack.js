import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Profile, EditProfile, CounterScreen, TodoListScreen} from '../screens';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="CounterScreen" component={CounterScreen} />
      <Stack.Screen name="TodoListScreen" component={TodoListScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
