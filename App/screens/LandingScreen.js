import React from 'react';
import {ImageBackground, Image, View, StyleSheet} from 'react-native';
import {Box, Heading, Text, Button, Divider} from 'native-base';

function LandingScreen({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      resizeMode="cover"
      style={styles.container}>
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
        size="lg">
        APP NAME
      </Heading>
      <Box p={5} bg="gray.100" rounded="lg">
        <Heading
          alignSelf={{
            base: 'center',
            md: 'flex-start',
          }}
          size="md">
          Welcome
        </Heading>

        <Text mb={5} mt={2}>
          Discover Amazing Things Around You.
        </Text>

        <Button
          my={3}
          size="sm"
          variant={'solid'}
          borderRadius={10}
          colorScheme="emerald">
          Sign In
        </Button>

        <Button
          size="sm"
          variant={'outline'}
          borderRadius={10}
          colorScheme="emerald">
          Sign Up
        </Button>
        <Divider my={2} />
        <Text alignSelf={'center'} color={'gray.700'}>
          Terms and Conditions apply
        </Text>
      </Box>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LandingScreen;
