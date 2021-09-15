import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './App/config/Navigation';

function App() {

  useEffect(() => {
      SplashScreen.hide();
  }, [])


  return (
    <View style={{flex:1}}>
      <Navigation/>
    </View>
  );
}

export default App;
