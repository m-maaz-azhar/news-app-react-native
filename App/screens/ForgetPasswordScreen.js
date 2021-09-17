import React from 'react';
import {
  Container,
  Text,
  Heading,
  Center,
  Box,
  Input,
  Button,
  Icon,
  Divider,
} from 'native-base';
import {ImageBackground, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function ForgetPasswordScreen({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      resizeMode="cover"
      style={styles.container}>
      <Box w="90%" px={3} pb={5} rounded="lg" bg="white">
        <Center>
            
          <Box w="100%" py={4} mb={3} bg="emerald.500">
            <Heading alignSelf="center" color="white" size="md">
              FORGET PASSWORD
            </Heading>
          </Box>

          <Input
            my={2}
            placeholder="Enter your email here"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
            InputRightElement={
              <Button
                ml={1}
                roundedLeft={0}
                roundedRight="md"
                colorScheme="emerald">
                RESET
              </Button>
            }
          />

          <Divider my={2} />

          <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
            <Text py={1}>Back to login</Text>
          </TouchableOpacity>
        </Center>
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

export default ForgetPasswordScreen;
