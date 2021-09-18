import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Stack} from 'native-base';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileScreen from '../screens/ProfileScreen';
import LandingScreen from '../screens/LandingScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import auth from '@react-native-firebase/auth';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SportsNews from '../screens/SportsNews';
import HeadlinesScreen from '../screens/HeadlinesScreen';
import StockMarketScreen from '../screens/StockMarketScreen';
import SearchScreen from '../screens/SearchScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const Drawer = createDrawerNavigator();

function Navigation() {
  const [User, setUser] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged(res => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
    });
  }, [User]);

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('Sign Out') /*navigation.navigate('Landing')*/);
  };

  return (
    <>
      {User == null ? (
        <Drawer.Navigator>
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
        </Drawer.Navigator>
      ) : (
        <Drawer.Navigator>
          <Drawer.Screen
            options={{
              headerRight: () => (
                <Button
                  size="sm"
                  mr={3}
                  colorScheme="rose"
                  onPress={() => signOut()}>
                  SIGN OUT
                </Button>
              ),
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#10b981',
              },
            }}
            name="News"
            component={HomeCategories}
          />
          <Drawer.Screen
            options={{
              headerRight: () => (
                <Button
                  size="sm"
                  mr={3}
                  colorScheme="rose"
                  onPress={() => signOut()}>
                  SIGN OUT
                </Button>
              ),
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#10b981',
              },
            }}
            name="Search"
            component={SearchScreen}
          />
          <Drawer.Screen
            options={{
              headerRight: () => (
                <Button
                  size="sm"
                  mr={3}
                  colorScheme="rose"
                  onPress={() => signOut()}>
                  SIGN OUT
                </Button>
              ),
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#10b981',
              },
            }}
            name="Favourite"
            component={FavouritesScreen}
          />
          <Drawer.Screen
            options={{
              headerRight: () => (
                <Button
                  size="sm"
                  mr={3}
                  colorScheme="rose"
                  onPress={() => signOut()}>
                  SIGN OUT
                </Button>
              ),
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#10b981',
              },
            }}
            name="Profile"
            component={ProfileScreen}
          />
        </Drawer.Navigator>
      )}
    </>
  );
}
const TabTop = createMaterialTopTabNavigator();

function HomeCategories() {
  return (
    <TabTop.Navigator>
      <TabTop.Screen name="Headlines" component={HeadlinesScreen} />
      <TabTop.Screen name="Stock" component={StockMarketScreen} />
      <TabTop.Screen name="Sports" component={SportsNews} />
    </TabTop.Navigator>
  );
}

export default Navigation;
