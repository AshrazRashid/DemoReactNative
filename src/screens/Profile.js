import {React} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

const Profile = ({navigation}) => {
  const gotoEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const gotoCounterScreen = () => {
    navigation.navigate('CounterScreen');
  };

  const gotoTodoList = () => {
    navigation.navigate('TodoListScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'This is a Profile Page'}</Text>

      <TouchableOpacity onPress={gotoEditProfile}>
        <Text style={styles.text}>{'Edit Profile'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={gotoCounterScreen}>
        <Text style={styles.text}>{'Counter Screen'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={gotoTodoList}>
        <Text style={styles.text}>{'Todo List'}</Text>
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

  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Profile;
