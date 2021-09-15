import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './App/config/Navigation';
import {NativeBaseProvider} from 'native-base';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NativeBaseProvider>
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    </NativeBaseProvider>
  );
}

export default App;
