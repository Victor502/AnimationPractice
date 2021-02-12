import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import TimingAnimations from './screen/TimeingAnimations';
import SpringAnimation from './screen/SpringAnimation';
import InsetButton from './components/InsetButton';
import LoopingAnimation from './components/LoopingAnimation';
import ColorChangeScreen from './screen/ColorChangeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = (props) => {
  return (
    <View style={styles.homeContainer}>
      <LoopingAnimation text={'Animations'} />
      <Text style={styles.homeText}> Practice Animations</Text>
      <View style={styles.navigationContainer}>
        <InsetButton
          onPress={() => props.navigation.navigate('Timing')}
          text={'Timing'}
        />
        <InsetButton
          onPress={() => props.navigation.navigate('Spring')}
          text={'Spring'}
        />
        <InsetButton
          onPress={() => props.navigation.navigate('Color')}
          text={'Color'}
        />
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
        <Stack.Screen name="Color" component={ColorChangeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  homeText: {
    fontSize: 64,
    textAlign: 'center',
    marginBottom: 250,
  },
  navigationContainer: {
    marginVertical: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default App;
