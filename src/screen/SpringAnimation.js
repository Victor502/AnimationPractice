import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const SpringAnimation = (props) => {
  return (
    <View>
      <Text> Spring </Text>
      <View
        style={{
          marginVertical: 20,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text onPress={() => props.navigation.navigate('Home')}>Home</Text>
        <Text onPress={() => props.navigation.navigate('Timing')}>Timing</Text>
      </View>
    </View>
  );
};

export default SpringAnimation;
