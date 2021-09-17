import React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LandingScreen from '../screens/LandingScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';

const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <Drawer.Navigator initialRouteName="Landing">
      <Drawer.Screen
        options={{
          headerShown: false,
          swipeEnabled: false,
        }}
        name="Landing"
        component={LandingScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          swipeEnabled: false,
        }}
        name="Sign In"
        component={SignInScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          swipeEnabled: false,
        }}
        name="Sign Up"
        component={SignUpScreen}
      />
       <Drawer.Screen
        options={{
          headerShown: false,
          swipeEnabled: false,
        }}
        name="Forget Password"
        component={ForgetPasswordScreen}
      />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default Navigation;
