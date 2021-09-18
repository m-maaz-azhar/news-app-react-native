import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

import NewsCard from '../components/NewsCard';
import {Divider, ScrollView, HStack, Spinner, Heading} from 'native-base';

function HeadlinesScreen({navigation}) {
  const [newsData, setnewsData] = useState('');

  let api_key = '36a5d75e76c69f512338f9068cd53f89';

  useEffect(() => {
    fetch(
      `http://api.mediastack.com/v1/news?access_key=${api_key}&sources=en`,
    )
      .then(response => response.json())
      .then(({data}) => setnewsData(data));
  }, []);

  return (
    <ScrollView>
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
            <HStack space={2} mt={3}>
              <Spinner accessibilityLabel="Loading posts" />
            </HStack>
          </>
        )}
      </View>
    </ScrollView>
  );
}

export default HeadlinesScreen;
