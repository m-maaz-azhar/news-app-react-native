import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {Heading, Box, Text, Button, Divider,HStack,Spinner} from 'native-base';
import {getUser} from '../store/actions';
import {useSelector, useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ProfileScreen({navigation}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const state = useSelector(state => state);
  console.log('CURRENT USER DATA=== ', state.user);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {state.user ? (
        <>
          <Box
            style={{alignItems: 'center'}}
            width="100%"
            shadow={1}
            _light={{
              backgroundColor: 'emerald.400',
            }}
            _dark={{
              backgroundColor: 'gray.700',
            }}>
            <Image
              source={require('../assets/profilePlaceholder.png')}
              style={{width: 120, height: 120}}
            />
            <Heading size="md" my={3} color="gray.600">
              {state.user.name.toUpperCase()}
            </Heading>
          </Box>
          <Box width="90%">
            <View
              marginTop={10}
              marginBottom={10}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <MaterialCommunityIcons name="email" color="#10b981" size={40} />
              <Text>{state.user.email}</Text>
            </View>
            <Divider />
            <View
              marginTop={10}
              marginBottom={10}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <MaterialCommunityIcons name="location-enter" color="#10b981" size={40} />
              <Text>{state.user.address}</Text>
            </View>
            <Divider />
            <Heading size='md' alignSelf="center" py={2} color="emerald.600">PAYMENT DETAILS</Heading>
            <Divider/>
            <View
              marginTop={10}
              marginBottom={10}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <MaterialCommunityIcons name="credit-card" color="#10b981" size={40} />
              <Text>{state.user.creditCardNo}</Text>
            </View>
            <Divider />
            <View
              marginTop={10}
              marginBottom={10}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <MaterialCommunityIcons name="barcode" color="#10b981" size={40} />
              <Text>{state.user.cardCvv}</Text>
            </View>
            <Divider/>
          </Box>
        </>
      ) : (
        <>
            <HStack space={2} mt={3}>
              <Heading color="emerald.300">Loading Profile</Heading>
              <Spinner accessibilityLabel="Loading posts" />
            </HStack>
          </>
      )}
    </View>
  );
}

export default ProfileScreen;
