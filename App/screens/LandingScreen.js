import React from 'react';
import {ImageBackground, Image, View, StyleSheet} from 'react-native';
import {Box, Heading, Text, Button, Divider} from 'native-base';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

function LandingScreen({navigation}) {
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  const saveUserToDb = (name, email, uid) => {
    database()
      .ref(`/users/${uid}`)
      .set({
        name,
        email,
      })
      .then(() => console.log('Data set.'));
  };

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      resizeMode="cover"
      style={styles.container}>
      <Box style={{justifyContent: 'center', alignItems: 'center', flex: 1.3}}>
        <Image
          source={require('../assets/logo.png')}
          style={{width: 180, height: 180}}
        />
        <Heading
          alignSelf={{
            base: 'center',
            md: 'flex-start',
          }}
          mb={5}
          size="xl">
          APP NAME
        </Heading>
      </Box>
      <Box
        p={5}
        style={{
          width: '100%',
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        bg="white">
        <Heading
          alignSelf={{
            base: 'center',
            md: 'flex-start',
          }}
          size="md">
          Welcome
        </Heading>

        <Text mb={5} mt={2} alignSelf={'center'}>
          Discover Amazing Things Around You.
        </Text>

        <Button
          onPress={() => navigation.navigate('Sign In')}
          my={3}
          size="md"
          variant={'solid'}
          borderRadius={10}
          colorScheme="emerald">
          Sign In
        </Button>

        <Button
          onPress={() => navigation.navigate('Sign Up')}
          size="md"
          variant={'outline'}
          borderRadius={10}
          colorScheme="emerald">
          Sign Up
        </Button>
        <Divider my={5} />

        <Button
          onPress={() =>
            onFacebookButtonPress().then(({user}) =>
              saveUserToDb(user.displayName, user.email, user.uid),
            )
          }
          size="md"
          variant={'solid'}
          borderRadius={10}
          colorScheme="blue">
          Continue With Facebook
        </Button>
      </Box>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default LandingScreen;
