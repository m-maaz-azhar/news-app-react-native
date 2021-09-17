import React, {useEffect, useState} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LandingScreen from '../screens/LandingScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import auth from '@react-native-firebase/auth';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainNavigation() {
  const [User, setUser] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged(res => {
      if (res) {
        setUser(res);
        console.log("=====RES",res)
      }
    });
  }, []);

  return (
    <Stack.Navigator>
      {User==null?(
      <Stack.Screen
        options={{headerShown: false}}
        name="AuthScreen"
        component={AuthNavigation}
      />
      ):(
      <Stack.Screen
        options={{headerShown: false}}
        name="AppScreen"
        component={AppNavigation}
      />
      )}
    </Stack.Navigator>
  );
}

function AuthNavigation() {

  // const [User, setUser] = useState(null);

  // useEffect(() => {
  //   auth().onAuthStateChanged(res => {
  //     if (res) {
  //       setUser(res);
  //       console.log("=====RES",res)
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, []);
  
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Landing"
        component={LandingScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Sign In"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Sign Up"
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Forget Password"
        component={ForgetPasswordScreen}
      />
    </Stack.Navigator>
  );
}

function AppNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default MainNavigation;
