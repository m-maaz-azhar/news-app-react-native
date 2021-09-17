import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './App/store';

import Navigation from './App/config/Navigation';
import {NativeBaseProvider} from 'native-base';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
