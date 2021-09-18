import React,{useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  Button,
} from 'native-base';
import moment from 'moment';

function NewsCard({title, description, published_at, author, category, image}) {
  function shortDescription(str, n) {
    return str.length > n ? str.substr(0, n - 1) + '....' : str;
  }

  return (
    <Box
      my={4}
      width={72}
      shadow={1}
      _light={{
        backgroundColor: 'gray.50',
      }}
      _dark={{
        backgroundColor: 'gray.700',
      }}>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
              uri: image,
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="red.500"
          _text={{
            color: 'white',
            fontWeight: '700',
            fontSize: 'xs',
          }}
          position="absolute"
          bottom={0}
          px={2}
          py={1}>
          {category.toUpperCase()}
        </Center>
        <Center
          p={1}
          rounded="full"
          bg="gray.100"
          boxSize={10}
          position="absolute"
          right={0}
          m={2}
          _text={{
            color: 'white',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 'lg',
          }}>
            <Ionicons
              size={30}
              name='heart-outline'
              color='red'
            />
        </Center>
      </Box>
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading size="md" ml={-1}>
            {title}
          </Heading>
          <Heading
            size="xs"
            _light={{
              color: 'red.500',
            }}
            _dark={{
              color: 'red.300',
            }}
            fontWeight="500"
            ml={-0.5}
            mt={-1}>
            {author}
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          {shortDescription(description, 100)}
        </Text>
        <HStack alignItems="center" space={4} justifyContent="flex-end">
          <HStack alignItems="center">
            <Icon
              as={<MaterialIcons name="access-time" />}
              color="gray.500"
              size="sm"
            />
            <Text ml={1} color="gray.500" fontWeight="500">
              {moment(published_at).format('MMM Do YY')}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
}

export default NewsCard;
