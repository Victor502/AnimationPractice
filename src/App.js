import React from 'react';
import {View} from 'react-native';
import TimingAnimations from './screen/TimeingAnimations';
import SpringAnimation from './screen/SpringAnimation';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    // <View style={{flex: 1}}>
    //   <TimingAnimations />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Timing" component={TimingAnimations} />
        <Stack.Screen name="Spring" component={SpringAnimation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
