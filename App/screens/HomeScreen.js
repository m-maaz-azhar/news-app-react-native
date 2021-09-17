import React from 'react';
import {Text, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

function HomeScreen({navigation}) {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HOME SCREEN</Text>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Go back to Profile"
      />
      <Button onPress={() => signOut()} title="SIGN OUT"/>
    </View>
  );
}

export default HomeScreen;
