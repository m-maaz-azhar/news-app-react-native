import React from 'react';
import {Text, View,Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HOME SCREEN</Text>
      <Button onPress={() => navigation.navigate('Profile')} title="Go back to Profile" />
    </View>
  );
}

export default HomeScreen;
