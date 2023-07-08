import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../counterSlice';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>{'Count: '}</Text>
        <Text style={styles.text}>{counter}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment())}
          // onPress={() => {
          //   setCount(count + 1);
          // }}
        >
          <Text style={styles.whiteText}>{'Count + 1'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement())}
          // onPress={() => {
          //   setCount(count - 1);
          // }}
        >
          <Text style={styles.whiteText}>{'Count - 1'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
  },

  whiteText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginVertical: 25,
    borderRadius: 10,
  },
});
