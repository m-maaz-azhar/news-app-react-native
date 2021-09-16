import React from 'react';
import {ImageBackground, Image, View, StyleSheet} from 'react-native';
import {Box, Heading, Text, Button, Divider} from 'native-base';

function LandingScreen({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      resizeMode="cover"
      style={styles.container}>
      <Box>
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
      </Box>
      <Box p={5} style={{width: '100%',flex:0.6,borderTopLeftRadius:30,borderTopRightRadius:30}} bg="white">
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
          my={3}
          size="md"
          variant={'solid'}
          borderRadius={10}
          colorScheme="emerald">
          Sign In
        </Button>

        <Button
          size="md"
          variant={'outline'}
          borderRadius={10}
          colorScheme="emerald">
          Sign Up
        </Button>
        <Divider my={4} />
        <Button
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
