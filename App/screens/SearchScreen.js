import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'native-base';
import auth from '@react-native-firebase/auth';

import NewsCard from '../components/NewsCard';
import {
  Divider,
  ScrollView,
  HStack,
  Spinner,
  Heading,
  Input,
} from 'native-base';
import {TextInput} from 'react-native-gesture-handler';

function SearchScreen({navigation}) {
  const [newsData, setnewsData] = useState('');
  const [searchQuery, setsearchQuery] = useState('');

  let api_key = '36a5d75e76c69f512338f9068cd53f89';

  let searchTerm = () => {
    if (searchQuery != '') {
      fetch(
        `http://api.mediastack.com/v1/news?access_key=${api_key}&keywords=${searchQuery}&sources=en`,
      )
        .then(response => response.json())
        .then(({data}) => setnewsData(data));
    }
  };

  return (
    <ScrollView>
      <Input
        placeholder="Search Here"
        InputRightElement={
          <Button size="md" onPress={() => searchTerm()}>
            SEARCH
          </Button>
        }
        onChangeText={text => setsearchQuery(text)}
        _light={{
          placeholderTextColor: 'blueGray.400',
        }}
        _dark={{
          placeholderTextColor: 'blueGray.50',
        }}
        m={3}
      />
      <View alignItems={'center'}>
        {newsData ? (
          newsData.map((news, index) => {
            return (
              <NewsCard
                key={index}
                title={news.title}
                description={news.description}
                published_at={news.published_at}
                author={news.author}
                category={news.category}
                image={news.image}
              />
            );
          })
        ) : (
          <>
            <Text>Search by typing any keywords above</Text>
          </>
        )}
      </View>
    </ScrollView>
  );
}

export default SearchScreen;
