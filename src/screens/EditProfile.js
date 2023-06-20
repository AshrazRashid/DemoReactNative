import {React} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'This is a Profile Page'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default EditProfile;
