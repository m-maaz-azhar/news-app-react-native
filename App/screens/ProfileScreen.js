import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {getAllUsers} from '../store/actions';
import {useSelector, useDispatch} from 'react-redux';

function ProfileScreen({navigation}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const state = useSelector(state => state);

  console.log('STATE++++ ', state.allUsers);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>All Profiles</Text>
      {state.allUsers ? (
        Object.keys(state.allUsers).map((key, index) => {
          return (
            <Text key={index}>
              NAME: {state.allUsers[key].name} EMAIL {state.allUsers[key].email}
            </Text>
          );
        })
      ) : (
        <Text>Loading Data...</Text>
      )}
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go back home"
      />
    </View>
  );
}

export default ProfileScreen;
