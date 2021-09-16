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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function SignUpScreen({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      resizeMode="cover"
      style={styles.container}>
      <Box w="90%" px={3} pb={5} rounded="lg" bg="white">
        <Center>
          <Box w="100%" py={4} mb={3} bg="emerald.500">
            <Heading alignSelf="center" color="white" size="md">
              SIGN UP
            </Heading>
          </Box>

          <Input
            my={2}
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="account" />}
                size="md"
                m={2}
                _light={{
                  color: 'emerald.500',
                }}
                _dark={{
                  color: 'gray.300',
                }}
              />
            }
            placeholder="Full Name" // mx={4}
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />

          <Input
            my={2}
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="email" />}
                size="md"
                m={2}
                _light={{
                  color: 'emerald.500',
                }}
                _dark={{
                  color: 'gray.300',
                }}
              />
            }
            placeholder="Email" // mx={4}
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />

          <Input
            my={2}
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="lock" />}
                size="md"
                m={2}
                _light={{
                  color: 'emerald.500',
                }}
                _dark={{
                  color: 'gray.300',
                }}
              />
            }
            placeholder="Password" // mx={4}
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />

          <Button my={3} size="md" colorScheme="emerald" width="90%">
            SIGN UP
          </Button>
          <Divider my={2}/>

          <TouchableOpacity onPress={()=>navigation.navigate('Sign In')}>
            <Text py={1}>Already Have An Account?</Text>
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

export default SignUpScreen;
