import React, {useState} from 'react';
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
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

function SignInScreen({navigation}) {
  const [show, setShow] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const [validationError, setValidationError] = useState('')

  const attemptSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Sign In Done',res);
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          console.log('Sorry, you are not registered');
          setValidationError("Sorry, you are not registered");
        } else if (error.code === 'auth/wrong-password'){
          console.log('Sorry, you are not registered');
          setValidationError("Email and Password doesn't match");
        }

        console.log(error);
      });
  };

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      resizeMode="cover"
      style={styles.container}>
      <Box w="90%" px={3} pb={5} rounded="lg" bg="white">
        <Center>
          <Box w="100%" py={4} mb={3} bg="emerald.500">
            <Heading alignSelf="center" color="white" size="md">
              SIGN IN
            </Heading>
          </Box>
          <Input
            onChangeText={text => setemail(text)}
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
            onChangeText={text => setpassword(text)}
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
            type={show ? 'text' : 'password'}
            InputRightElement={
              <Button
                ml={1}
                roundedLeft={0}
                roundedRight="md"
                colorScheme="emerald"
                onPress={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'}
              </Button>
            }
            placeholder="Password" // mx={4}
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
          <Text style={{color:"red"}}>{validationError}</Text>
          <Button
            onPress={() => attemptSignIn()}
            my={3}
            size="md"
            colorScheme="emerald"
            width="90%">
            SIGN IN
          </Button>
          <Divider my={2} />

          <TouchableOpacity
            onPress={() => navigation.navigate('Forget Password')}>
            <Text py={1}>Forget Your Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
            <Text py={1}>Don't Have An Account?</Text>
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

export default SignInScreen;
