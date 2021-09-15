import React from 'react';
import {Text, View , Button} from 'react-native';

function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Go back home" />
    </View>
  );
}

export default ProfileScreen;
