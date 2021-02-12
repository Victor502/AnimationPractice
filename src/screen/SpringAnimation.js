import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import SpringBox from '../components/SpringBox';
import Spring2 from '../components/Spring2';

const SpringAnimation = (props) => {
  return (
    <View>
      <Text style={{marginVertical: 50}}> Spring </Text>
      <View style={styles.space} />
      <SpringBox />
      <View style={styles.space} />
      <Spring2 />
      <SafeAreaView />
      <View style={styles.navigationContainer}>
        <Text onPress={() => props.navigation.navigate('Home')}>Home</Text>
        <Text onPress={() => props.navigation.navigate('Timing')}>Timing</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    marginVertical: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  space: {
    marginVertical: 10,
  },
});
export default SpringAnimation;
