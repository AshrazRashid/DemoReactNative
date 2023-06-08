import {React} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>{'this is a Home Page'}</Text>

      {/* <TextInput */}
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
});

export default Profile;
