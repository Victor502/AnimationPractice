import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import TimingAnimations from './screen/TimeingAnimations';
import SpringAnimation from './screen/SpringAnimation';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = (props) => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeText}> Practice Animations</Text>
      <View style={styles.navigationContainer}>
        <Text onPress={() => props.navigation.navigate('Timing')}>Timing</Text>
        <Text onPress={() => props.navigation.navigate('Spring')}>Spring</Text>
      </View>
      <SafeAreaView />
    </View>
  );
};

const App: () => React$Node = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Timing" component={TimingAnimations} />
        <Stack.Screen name="Spring" component={SpringAnimation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    justifyContent: 'center',
  },
  homeText: {
    fontSize: 64,
    textAlign: 'center',
  },
  navigationContainer: {
    marginVertical: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default App;
